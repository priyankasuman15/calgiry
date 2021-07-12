'use strict';


// LOAD MODULES
//
const Bcrypt = require('bcryptjs');
const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const Mongo = require('mongodb');
const MongoHelpers = require('../../controllers/mongodb');
const NodeMailerHelper = require('../../controllers/nodemailer');


// SERVER INTERNALS
//
const Member = require('../../models/member');




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'register',
      context: h.context
    }
  };

  return h.view('register', data);
}




async function insertDocument(request, h, user) {

  try {
    const db = request.getMongo();

    // insert into mongodb
    const result = db.collection('members').insertOne(user);

    return await result;
  }

  catch (error) {
    return Boom.badImplementation('mongodb error', error);
  }
}




async function setUser(request, h) {

  try {
    const email = request.payload.email.trim().toLowerCase();
    const password = request.payload.password;
    const dob = request.payload.dob;
    const sex = request.payload.sex;
    const phone = request.payload.phone.replace(/[ ()\-]/, '.');
    const cfc = request.payload.cfc.trim();
    const name = request.payload.name.trim().replace(/\s+/g, ' ');
    const address = request.payload.address.trim();
    const city = request.payload.city.trim();
    const province = request.payload.province.trim().toUpperCase();
    const postal_code = request.payload.postal_code.trim().toUpperCase();
    const country = request.payload.country.trim().toUpperCase();

    const both = name.split(', ');
    const last = both[0];
    const first = both[1] || '';

    const NUM_SALT_ROUNDS = 12;
    const user = new Member();

    user._id = Mongo.ObjectId();
    user.id = request.server.methods.makeHashCode(email).toString();
    user.password = Bcrypt.hashSync(password, NUM_SALT_ROUNDS);
    user.scope = ['user'];
    user.personal.name.last = last;
    user.personal.name.first = first;
    user.personal.dob = dob;
    user.personal.sex = sex;
    user.personal.contact.address = address;
    user.personal.contact.city = city;
    user.personal.contact.province = province;
    user.personal.contact.postal_code = postal_code;
    user.personal.contact.country = country;
    user.personal.contact.email = email;
    user.personal.contact.phone = phone;
    user.data.cfc.id = cfc;

    return await user;
  }

  catch (error) {
    return Boom.badData('user processing', error);
  }
}




function checkReserved(request, h) {

  try {
    const reserved = require('../../configs/reserved');

    const email = request.payload.email.split('@');

    const data = {
      mailbox: email[0],
      hostname: email[1]
    };

    const schema = Joi.object({
      mailbox: Joi.any().invalid(...reserved.CA_ADDRESSES, ...reserved.RFC_2142, ...reserved.NOREPLY_ADDRESSES, ...reserved.OTHER_SENSITIVE_NAMES),
      hostname: Joi.any().invalid(...reserved.SPECIAL_HOSTNAMES)
    });

    const config = {
      abortEarly: true
    };

    const result = schema.validate(data, config);

    if (result.error === undefined) {
      return false;
    }

    return Boom.badData('joi: validation error', result);
  }

  catch (error) {
    return Boom.badImplementation('joi: validation error', error);
  }
}


function checkPasswords(request, h) {

  try {
    const badPassword = require('../../configs/passwords');

    const badMap = new Map(badPassword.BAD_PASSWORD);

    const password = request.payload.password;

    const data = {
      password
    };

    const schema = Joi.object({
      password: Joi.any().invalid(...Array.from(badMap.keys()))
    });

    const config = {
      abortEarly: true
    };

    const result = schema.validate(data, config);

    if (result.error === undefined) {
      return false;
    }

    return Boom.badData(`joi: validation error ${badPassword.errors.BAD_PASSWORD}`, result);
    // return Boom.badData('joi: validation error', result);
  }

  catch (error) {
    return Boom.badImplementation('joi: validation error', error);
  }
}




async function handler(request, h) {

  // POST

  try {

    // check if email is on reserved list
    // joi cannot by async
    const reserved = checkReserved(request, h);

    if (reserved.isBoom) {
      return handleError(request, h, reserved);
    }

    // check if password is on bad password list
    // joi is synchronous only
    const password = checkPasswords(request, h);

    if (password.isBoom) {
      return handleError(request, h, password);
    }

    // retrieve user object
    const exists = await MongoHelpers.getMember(request, { email: request.payload.email });

    if (!exists.isBoom) {
      const error = Boom.badData('mongodb error: user exists');
      return handleError(request, h, error);
    }

    const user = await setUser(request, h);

    const result = await insertDocument(request, h, user);

    if (result.insertedCount !== 1) {
      const error = Boom.badImplementation('mongodb error: failed to insert user');
      return handleError(request, h, error);
    }

    if (result.insertedCount === 1) {
      NodeMailerHelper.sendMail(request, user);
    }

    request.log(['info', 'session'], `/register ${user.personal.contact.email}`);

    return h.redirect('/login');
  }

  catch (error) {
    return Boom.badImplementation('mongodb error', error);
  }
}


module.exports = handler;
