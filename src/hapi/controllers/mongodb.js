'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');
const Mongo = require('mongodb');
const MongoDot = require('mongo-dot-notation');


// SERVER INTERNALS
//
// const Member = require('../models/member');




function parseQuery(queryParams) {

  const _default_id = new Mongo.ObjectID().toHexString();

  const queries = {
    '_id': { '_id': { '$eq': Mongo.ObjectID.createFromHexString(queryParams._id || _default_id).toString() } },
    email: { 'personal.contact.email': { $eq: queryParams.email } }
  };

  let query = {};

  if (queryParams.hasOwnProperty('_id')) {
    query = queries._id;
  }

  if (queryParams.hasOwnProperty('email')) {
    query = queries.email;
  }

  return query;
}




async function getMembers(request, queryParams = { date: 0 }) {

  const limit = 3000;

  // calculate time difference in years
  // default is '0', i.e. expires later than today
  // > 99 means 'complete list of all years'
  const today = {};
  today.date = new Date();
  today.year = today.date.getFullYear();
  today.month = today.date.getMonth();
  today.date = today.date.getDate();
  const date = queryParams.date > 99 ? '' : request.server.methods.dateToIsoDate(new Date(today.year - queryParams.date, today.month, today.date));

  try {

    const db = request.getMongo();

    const members = await db.collection('members')
      .find({
        'data.cfc.expiry': { $gte: date }
      })
      .collation({
        locale: 'en',
        numericOrdering: true
      })
      .project({
      // '_id': 0 // we need _id this time!
      })
      .limit(limit)
      .sort({ 'personal.name.last': 1, 'personal.name.first': 1 }).toArray();

    // error, no matching document(s) found
    if (members.length < 1) {
      return Boom.notFound('mongodb error: no matching document(s) found');
    }

    // success, matching document(s) found
    if (members.length > 0) {
      return members;
    }
  }


  catch (error) {

    return Boom.badImplementation('mongodb error', error);
  }

}




async function getMember(request, queryParams) {

  const query = parseQuery(queryParams);

  try {

    const db = request.getMongo();

    const cursor = db.collection('members')
      .find(
        query
      )
      .limit(1);

    const count = await cursor.count();
    const record = await cursor.next();

    // error, no matching document(s) found
    if (count !== 1) {
      return Boom.notFound('mongodb error: no matching document(s) found');
    }

    // success, matching document(s) found
    if (count === 1) {
      return record;
    }
  }


  catch (error) {

    return Boom.badImplementation('mongodb error', error);
  }

}




async function updateMember(request, member) {

  try {
    const db = request.getMongo();

    const _obj = Mongo.ObjectID.createFromHexString(member._id.toString()).toString();
console.log(_obj);
    const result = await db.collection('members')
      .updateOne(
        {
          '_id': _obj
        },
        MongoDot.flatten(member)
      );

    // error, document not updated
    if (result.matchedCount !== 1) {
      return Boom.badRequest('mongodb error: document not updated');
    }

    // success, updated document
    if (result.matchedCount === 1) {
      // return true;
      return result;
    }
  }


  catch (error) {

    return Boom.badImplementation('mongodb error', error);
  }

}
module.exports = {
  getMembers,
  getMember,
  updateMember
};
