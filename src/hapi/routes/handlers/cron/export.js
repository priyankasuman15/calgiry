// 'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');
const MongoHelpers = require('../../../controllers/mongodb');

const fs = require('fs');


// SERVER INTERNALS
//




async function exportMembers(request) {

  const members = await MongoHelpers.getMembers(request, { date: 100 });

  if (members.isBoom) {
    return Boom.notFound('mongodb error: no matching document(s) found');
  }

  return await writeExport(request, members);
}




function writeExport(request, documents) {

  const dateISO = request.server.methods.dateToIsoDate();
  const output = `${__dirname}/../../../../export_${dateISO}.json`;

  const writeable = fs.createWriteStream(output, { encoding: 'utf8' });
  writeable.write(JSON.stringify(documents, null, 2));

  return true;
}




module.exports = exportMembers;
