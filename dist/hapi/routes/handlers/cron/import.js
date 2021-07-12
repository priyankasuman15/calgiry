// 'use strict';


// LOAD MODULES
//
const Mongo = require('mongodb');


// SERVER INTERNALS
//




async function importMembers(request) {

  // const input = `${__dirname}/../../../../../mongodb_exports/export_2019-10-05.json`;
  const input = `${__dirname}/../../../../import.json`;
  const members = require(input, 'utf8');

  // mongodb export to json results in hex string for _id
  // here we convert these strings back to an ObjectID value
  // else _id is empty and we create a fresh ObjectId value
  for (let i = 0; i < members.length; ++i) {
    members[i]._id = members[i]._id === '' ? Mongo.ObjectId() : Mongo.ObjectID.createFromHexString(members[i]._id);
  }

  try {
    const db = request.getMongo();

    const result = await db.collection('members').insertMany(members, { ordered: false });

    request.log(['info', 'cron', 'import', 'mongodb'], `imported records: ${result.insertedCount}`);
    return result.insertedCount;
  }

  catch (error) {
    request.log(['error', 'mongodb'], error);
    process.exit(0);
  }
}




module.exports = importMembers;
