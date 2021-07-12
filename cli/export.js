// 'use strict';


// LOAD MODULES
//
const Mongo = require('mongodb');
const fs = require('fs');


// SERVER INTERNALS
//
const options = {
  bind: '127.0.0.1',
  port: 27017,
  user: encodeURIComponent(''),
  pw: encodeURIComponent(''),
  db: '',
  auth: '',
  source: ''
};




async function getMembers(db, queryParams = { date: 0 }) {

  const limit = 3000;

  // calculate time difference in years
  // default is '0', i.e. expires later than today
  // > 99 means 'complete list of all years'
  const today = {};
  today.date = new Date();
  today.year = today.date.getFullYear();
  today.month = today.date.getMonth();
  today.date = today.date.getDate();
  const date = queryParams.date > 99 ? '' : dateToIsoDate(new Date(today.year - queryParams.date, today.month, today.date));

  try {

    const members = await db.collection('members')
      .find({
        // 'data.cfc.expiry': { $gte: date },
        // 'data.ccc.expiry': { $gte: date },
        'data.transactions.events': { $exists: true, $ne: [] }
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
      console.log('mongodb error: no matching document(s) found');
    }

    // success, matching document(s) found
    if (members.length > 0) {
      console.log(members.length);

      writeExport(members);
      return members;
    }
  }


  catch (error) {

    console.log('mongodb error', error);
  }

}




function writeExport(documents) {

  const output = `${__dirname}/export.json`;
  console.log(output);

  const writeable = fs.createWriteStream(output, { encoding: 'utf8' });
  writeable.write(JSON.stringify(documents, null, 2));

  return true;
}




function getMongo() {

  const url = `mongodb://${options.user}:${options.pw}@${options.bind}:${options.port}/${options.db}?authMechanism=${options.auth}&authSource=${options.source}`;

  Mongo.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {

    if (error) {
      console.log('mongodb connection error', error);
      process.exit(0);
      return;
    }

    const db = client.db(options.db);

    getMembers(db);

    client.close();
  });

}


function dateToIsoDate(date = new Date()) {

  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON().slice(0, 10);
}








getMongo();

// module.exports = importMembers;
// module.exports = getMongo;
