'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');
const MongoHelpers = require('../../../controllers/mongodb');


// SERVER INTERNALS
//
// const Member = require('../../../models/member');




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'admin-members',
      context: h.context
    }
  };

  return h.view('admin-members', data);
}




async function setMemberFromPayload(request, h, member) {

  try {
    const name = request.payload.name.trim().replace(/\s+/g, ' ');
    const dob = request.payload.dob;
    const sex = request.payload.sex;
    const phone = request.payload.phone.replace(/[ ()\-]/, '.');
    const email = request.payload.email.trim().toLowerCase();
    const address = request.payload.address.trim().replace(/\s+/g, ' ');
    const city = request.payload.city.trim().replace(/\s+/g, ' ');
    const province = request.payload.province.trim().toUpperCase();
    const postal_code = request.payload.postal_code.trim().toUpperCase();
    const country = request.payload.country.trim().toUpperCase();
    const fideid = request.payload.fideid.trim();
    const cfcid = request.payload.cfcid.trim();
    const cfcexpiry = request.payload.cfcexpiry.trim();
    const cccexpiry = request.payload.cccexpiry.trim();
    // remove duplicates from events array & sort
    // https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
    const events = Array.from(new Set(request.payload.events.trim().split(','))).filter(Boolean).sort();

    const both = name.split(', ');
    const last = both[0];
    const first = both[1] || '';

    member.id = request.server.methods.makeHashCode(email).toString();
    member.personal.name.last = last;
    member.personal.name.first = first;
    member.personal.dob = dob;
    member.personal.sex = sex;
    member.personal.contact.phone = phone;
    member.personal.contact.email = email;
    member.personal.contact.address = address;
    member.personal.contact.city = city;
    member.personal.contact.province = province;
    member.personal.contact.postal_code = postal_code;
    member.personal.contact.country = country;
    member.data.fide.id = fideid;
    member.data.cfc.id = cfcid;
    member.data.cfc.expiry = cfcexpiry;
    member.data.ccc.expiry = cccexpiry;
    member.data.transactions.events = events;

    // //
    // let user = new Member();
    // user = request.server.methods.mergeObjectProperties(user, member);
    // request.log(request.payload);
    // request.log(user);
    // //

    return await member;
  }

  catch (error) {
    return Boom.badData('user processing', error);
  }
}




async function handler(request, h) {

  try {

    // if user is already authenticated...
    let session = null;
    if (request.auth.isAuthenticated && request.auth.isAuthorized && request.auth.credentials.scope.includes('admin')) {
      session = request.auth.credentials;

      // set query parameter
      const object_id = request.query.m;


      // GET
      //
      if (request.method === 'get') {

        if (object_id === undefined) {
          const members = await MongoHelpers.getMembers(request, { date: 100 });

          if (members.isBoom) {
            return handleError(request, h, members);
          }

          const data = {
            $global: {
              methods: request.server.methods,
              method: request.method,
              user: session,
              members,
              object_id,
              page: 'admin-members',
              context: h.context
            }
          };

          return h.view('admin-members', data);
        }

        if (object_id !== undefined) {
          // retrieve member object
          const member = await MongoHelpers.getMember(request, { _id: object_id });

          if (member.isBoom) {
            return handleError(request, h, member);
          }

          const data = {
            $global: {
              methods: request.server.methods,
              method: request.method,
              user: member,
              member,
              object_id,
              page: 'admin-members',
              context: h.context
            }
          };

          return h.view('admin-members', data);
        }
      }


      // POST
      //
      if (request.method === 'post') {

        // retrieve user object
        let member = await MongoHelpers.getMember(request, { _id: request.payload.object_id });

        if (member.isBoom) {
          return handleError(request, h, member);
        }

        member = await setMemberFromPayload(request, h, member);

        const result = await MongoHelpers.updateMember(request, member);

        if (result.isBoom) {
          return handleError(request, h, result);
        }

        // const data = {
        //   $global: {
        //     method: request.method,
        //     user: member,
        //     member,
        //     object_id,
        //     page: 'admin-members',
        //     context: h.context
        //   }
        // };

        const next = request.query.next ? request.query.next : `/admin-members?m=${member._id}`;
        return h.redirect(next);
      }
    }

    // return handleError(request, h, Boom.unauthorized('unauthorized request'));
    const next = request.query.next ? request.query.next : '/login';
    return h.redirect(next);
  }


  catch (error) {

    return Boom.badImplementation('server error', error);
  }
}


module.exports = handler;
