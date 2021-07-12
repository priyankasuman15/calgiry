'use strict';
// https://scotch.io/bar-talk/handling-file-uploads-with-hapi-js


// LOAD MODULES
//
const Boom = require('@hapi/boom');

const path = require('path');
const fs = require('fs');




function filter(filename) {

  if (!filename.match(/\.(pgn)$/)) {
    return false;
  }

  return true;
}


async function upload(request, h) {

  if (request.payload.datafile) {
    const name = request.payload.datafile.hapi.filename;
    let written = 0;
    const info = {};

    // apply filter and only continue if function returns true?
    if (filter(name) === false) {
      return Boom.unsupportedMediaType('media type not supported');
    }

    // const UPLOAD_PATH = 'uploads';
    // if (!fs.existsSync(UPLOAD_PATH)) fs.mkdirSync(UPLOAD_PATH);
    const folder = path.join(__dirname, '../../..', 'uploads/');

    // should probably add random uuid prefix to avoid name conflicts?
    const file = fs.createWriteStream(folder + name);
    request.payload.datafile.pipe(file);


    // file creation, writing or piping error
    file.on('error', (error) => {

      return Boom.expectationFailed('file creation, writing or piping error', error);
    });


    // log files written on completion
    file.on('finish', () => {

      written = file.bytesWritten;
      info.name = name;
      info.written = request.server.methods.numberWithCommas(written);
    });


    // finished reading
    request.payload.datafile.on('end', (error) => {

      // file upload did not complete
      if (error) {
        return Boom.expectationFailed('file upload did not complete', error);
      }
    });


    // required: create new Promise to wrap the stream
    // https://stackoverflow.com/questions/33599688/how-to-use-es8-async-await-with-streams
    const done = new Promise((resolve, reject) => {

      file.on('finish', () => resolve(info));
    });


    return await done;
  }
}


async function handler(request, h) {

  // POST

  try {

    // if user is already authenticated...
    let session = null;
    if (request.auth.isAuthenticated && request.auth.isAuthorized) {
      session = request.auth.credentials;

      const info = await upload(request, h);

      const data = {
        $global: {
          user: session,
          name: info.name,
          written: info.written,
          page: 'upload',
          context: h.context
        }
      };

      return h.view('upload', data);
    }
  }


  catch (error) {

    return Boom.badImplementation('upload error', error);
  }
}


module.exports = handler;
