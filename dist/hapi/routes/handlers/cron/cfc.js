// 'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');
// const Joi = require('@hapi/joi');
const Wreck = require('@hapi/wreck');

const readline = require('readline');


// SERVER INTERNALS
//
const schemas = require('../../../configs/schemas');




async function updateMembersCFC(request, list) {

  try {
    const db = request.getMongo();

    for (let i = 0; i < list.length; ++i) {
      const arr = list[i].split(';');
      const cfcid = arr[4];
      const cfcexpiry = arr[5];
      const elo_classical = arr[6];
      const elo_rapid = arr[7];
      const fideid = arr[8];

      await db.collection('members').findOneAndUpdate(
        { 'data.cfc.id': cfcid },
        {
          $set: {
            'data.fide.id': fideid,
            'data.cfc.expiry': cfcexpiry,
            'data.cfc.elo.classical': elo_classical,
            'data.cfc.elo.rapid': elo_rapid
          }
        },
        {
          returnNewDocument: true
        }
      );
    }

    return true;
  }

  catch (error) {
    return Boom.badImplementation('mongodb error: findOneAndUpdate', error);
  }
}




function parseLines(lines, problems, line) {

  const item = [];
  const object = {};
  line = line.replace(/"/g, '');
  const arr = line.split(',');
  const length = arr.length;

  // skip lines with formatting errors, ~2%
  if (length !== 12) {
    problems.push(line);
  }

  if (length === 12) {
    object.last = arr[2];
    object.first = arr[3];
    // object.dob = arr[];
    // object.sex = arr[];
    // object.address = arr[];
    object.city = arr[5];
    object.province = arr[4];
    // object.country = arr[];
    // object.postal_code = arr[];
    // object.phone = arr[];
    // object.email = arr[];
    object.cfcid = arr[0];
    object.cfcexpiry = arr[1].replace(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/, '$3-$2-$1');
    // object.cccid = arr[];
    // object.cccexpiry = arr[];
    object.elo_classical = arr[6];
    object.elo_rapid = arr[8];
    object.fideid = arr[10];

    // validate record and push onto lines array
    const valid = (schemas.schemas.cfc).validate(object, { allowUnknown: true });
    if (valid.error === undefined) {
      item.push(object.last);
      item.push(object.first);
      // item.push(object.dob);
      // item.push(object.sex);
      // item.push(object.address);
      item.push(object.city);
      item.push(object.province);
      // item.push(object.country);
      // item.push(object.postal_code);
      // item.push(object.phone);
      // item.push(object.email);
      item.push(object.cfcid);
      item.push(object.cfcexpiry);
      // item.push(object.cfcexpiry.replace(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/, '$3-$2-$1'));
      // item.push(object.cccid);
      // item.push(object.cccexpiry);
      item.push(parseInt(object.elo_classical, 10) === 0 ? '' : object.elo_classical);
      item.push(parseInt(object.elo_rapid, 10) === 0 ? '' : object.elo_rapid);
      item.push(object.fideid);

      lines.push(item.join(';'));
    }
  }
}




async function updateCFC(request) {

  const lines = [];
  const problems = [];
  const url = 'https://chess.ca/sites/default/files/tdlist.txt';
  const promise = Wreck.request('GET', url);

  try {
    const response = await promise;
    const body = await Wreck.read(response);
    const stream = Wreck.toReadableStream(body, 'utf8');

    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    });


    rl.on('line', (line) => {

      parseLines(lines, problems, line);
    });


    rl.on('close', () => {

      request.log(['info', 'cron', 'cfc'], `cfc data import: handled ${problems.length}/${lines.length}`);
      updateMembersCFC(request, lines);
    });

    return true;
  }

  catch (error) {
    return Boom.badImplementation('cron error: cfc', error);
  }
}




module.exports = updateCFC;
