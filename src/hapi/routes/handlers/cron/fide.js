// 'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');

const fs = require('fs');


// SERVER INTERNALS
//




async function updateMembersFIDE(request, fide) {

  try {
    const db = request.getMongo();

    for (let i = 0; i < fide.classical.length; ++i) {
      if (fide.classical[i].country === 'CAN') {
        await db.collection('members').findOneAndUpdate(
          { 'data.fide.id': fide.classical[i].id },
          {
            $set: {
              'personal.sex': fide.classical[i].sex.toLowerCase(),
              'data.fide.title': fide.classical[i].title,
              'data.fide.elo.classical': fide.classical[i].elo
            }
          },
          {
            returnNewDocument: true
          }
        );
      }
    }

    for (let i = 0; i < fide.rapid.length; ++i) {
      if (fide.rapid[i].country === 'CAN') {
        await db.collection('members').findOneAndUpdate(
          { 'data.fide.id': fide.rapid[i].id },
          {
            $set: {
              'personal.sex': fide.rapid[i].sex.toLowerCase(),
              'data.fide.title': fide.rapid[i].title,
              'data.fide.elo.rapid': fide.rapid[i].elo
            }
          },
          {
            returnNewDocument: true
          }
        );
      }
    }

    for (let i = 0; i < fide.blitz.length; ++i) {
      if (fide.blitz[i].country === 'CAN') {
        await db.collection('members').findOneAndUpdate(
          { 'data.fide.id': fide.blitz[i].id },
          {
            $set: {
              'personal.sex': fide.blitz[i].sex.toLowerCase(),
              'data.fide.title': fide.blitz[i].title,
              'data.fide.elo.blitz': fide.blitz[i].elo
            }
          },
          {
            returnNewDocument: true
          }
        );
      }
    }

    return true;
  }

  catch (error) {
    return Boom.badImplementation('mongodb error: findOneAndUpdate', error);
  }
}




async function updateFIDE(request) {

  const fide = {
    classical: require(`${__dirname}/../../../../assets/json/fide/classical.json`, 'utf8'),
    rapid: require(`${__dirname}/../../../../assets/json/fide/rapid.json`, 'utf8'),
    blitz: require(`${__dirname}/../../../../assets/json/fide/blitz.json`, 'utf8')
  };

  try {
    const success = await updateMembersFIDE(request, fide);

    return success;
  }

  catch (error) {
    return Boom.badImplementation('cron error: fide', error);
  }
}




module.exports = updateFIDE;
