'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');


// SERVER INTERNALS
//




async function getRatings(request, h) {

  try {

    const db = request.getMongo();
    const ratings = {};
    ratings.topAB = [];
    ratings.topABf = [];
    ratings.topJR14 = [];
    ratings.topJR20 = [];
    ratings.topSR50 = [];
    ratings.topSR65 = [];

    const today = {};
    today.date = new Date();
    today.year = today.date.getFullYear();
    today.month = today.date.getMonth();
    today.date = today.date.getDate();

    const now = request.server.methods.dateToIsoDate(new Date());

    const jr20 = request.server.methods.dateToIsoDate(new Date(today.year - 20, today.month, today.date));
    const jr14 = request.server.methods.dateToIsoDate(new Date(today.year - 14, today.month, today.date));
    const sr65 = request.server.methods.dateToIsoDate(new Date(today.year - 65, today.month, today.date));
    const sr50 = request.server.methods.dateToIsoDate(new Date(today.year - 50, today.month, today.date));

    const locations = ['Calgary', 'Cochrane', 'Banff', 'Canmore'];
    const personanongrata = ['111962'];


    const topAB = await db.collection('members').find({
      'personal.contact.city': { $in: locations },
      'personal.dob': { $ne: '' },
      'data.cfc.expiry': { $gt: now },
      'data.cfc.elo.classical': { $gt: '2000' },
      'data.cfc.id': { $nin: personanongrata }
    }, {
      '_id': 0
    }).collation({
      locale: 'en',
      numericOrdering: true
    }).limit(25).sort({ 'data.cfc.elo.classical': -1 }).toArray();

    ratings.topAB = topAB;


    const topABf = await db.collection('members').find({
      'personal.contact.city': { $in: locations },
      'personal.dob': { $ne: '' },
      'personal.sex': { $eq: 'f' },
      'data.cfc.expiry': { $gt: now }
    }, {
      '_id': 0
    }).collation({
      locale: 'en',
      numericOrdering: true
    }).limit(25).sort({ 'data.cfc.elo.classical': -1 }).toArray();

    ratings.topABf = topABf;


    const topJR14 = await db.collection('members').find({
      'personal.contact.city': { $in: locations },
      'personal.dob': { $gt: jr14 },
      'data.cfc.expiry': { $gt: now },
      'data.cfc.elo.classical': { $gt: '1000' }
    }, {
      '_id': 0
    }).collation({
      locale: 'en',
      numericOrdering: true
    }).limit(25).sort({ 'data.cfc.elo.classical': -1 }).toArray();

    ratings.topJR14 = topJR14;


    const topJR20 = await db.collection('members').find({
      'personal.contact.city': { $in: locations },
      'personal.dob': { $gt: jr20 },
      'data.cfc.expiry': { $gt: now },
      'data.cfc.elo.classical': { $gt: '1000' }
    }, {
      '_id': 0
    }).collation({
      locale: 'en',
      numericOrdering: true
    }).limit(25).sort({ 'data.cfc.elo.classical': -1 }).toArray();

    ratings.topJR20 = topJR20;


    const topSR50 = await db.collection('members').find({
      'personal.contact.city': { $in: locations },
      'personal.dob': { $gt: '', $lt: sr50 },
      'data.cfc.expiry': { $gt: now },
      'data.cfc.elo.classical': { $gt: '1000' }
    }, {
      '_id': 0
    }).collation({
      locale: 'en',
      numericOrdering: true
    }).limit(25).sort({ 'data.cfc.elo.classical': -1 }).toArray();
    ratings.topSR50 = topSR50;


    const topSR65 = await db.collection('members').find({
      'personal.contact.city': { $in: locations },
      'personal.dob': { $gt: '', $lt: sr65 },
      'data.cfc.expiry': { $gt: now },
      'data.cfc.elo.classical': { $gt: '1000' }
    }, {
      '_id': 0
    }).collation({
      locale: 'en',
      numericOrdering: true
    }).limit(25).sort({ 'data.cfc.elo.classical': -1 }).toArray();
    ratings.topSR65 = topSR65;


    return ratings;
  }


  catch (error) {

    return Boom.badImplementation('mongodb error', error);
  }

}


async function handler(request, h) {

  // GET

  try {

    // if user is already authenticated...
    let session = null;
    if (request.auth.isAuthenticated) {
      session = request.auth.credentials;
    }

    const ratings = await getRatings(request, h);

    const data = {
      $global: {
        methods: request.server.methods,
        user: session,
        ratings,
        page: 'ratings',
        context: h.context
      }
    };

    return h.view('ratings', data);
  }


  catch (error) {

    return Boom.badImplementation('mongodb error', error);
  }
}


module.exports = handler;
