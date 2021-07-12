// 'use strict';


// LOAD MODULES
//
const Mongo = require('mongodb');


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




async function importMembers(db) {

  const input = `${__dirname}/../mongodb_exports/export_2020-03-25.json`;
  const members = require(input, 'utf8');

  // mongodb export to json results in hex string for _id
  // here we convert these strings back to an ObjectID value
  // else _id is empty and we create a fresh ObjectId value
  for (let i = 0; i < members.length; ++i) {
    members[i]._id = members[i]._id === '' ? Mongo.ObjectId() : Mongo.ObjectID.createFromHexString(members[i]._id);
  }

  try {
    const result = await db.collection('members').insertMany(members, { ordered: false });

    console.log(`imported records: ${result.insertedCount}`);

    return result.insertedCount;
  }

  catch (error) {
    console.log('mongodb error', error);
    process.exit(0);
  }
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

    importMembers(db);

    // client.close();
  });

}



getMongo();
