'use strict';


// LOAD MODULES
//


// LOAD ENDPOINTS
//
const assets = require('./endpoints/assets');
const vision = require('./endpoints/vision');

const changeget = require('./endpoints/change-get');
const changepost = require('./endpoints/change-post');
const eventsget = require('./endpoints/events-get');
const eventspost = require('./endpoints/events-post');
const loginget = require('./endpoints/login-get');
const loginpost = require('./endpoints/login-post');
const logout = require('./endpoints/logout');
const registerget = require('./endpoints/register-get');
const registerpost = require('./endpoints/register-post');
const resetapi = require('./endpoints/reset-api');
const resetget = require('./endpoints/reset-get');
const resetpost = require('./endpoints/reset-post');
const uploadget = require('./endpoints/upload-get');
const uploadpost = require('./endpoints/upload-post');
const userget = require('./endpoints/user-get');
const userpost = require('./endpoints/user-post');

const adminmembers = require('./endpoints/admin/members');
const cron = require('./endpoints/cron/cron');

const about = require('./endpoints/about');
const archives = require('./endpoints/archives');
const blog = require('./endpoints/blog');
const classes = require('./endpoints/classes');
const membership = require('./endpoints/membership');
const ratings = require('./endpoints/ratings');


module.exports = [].concat(
  assets,
  vision,
  changeget,
  changepost,
  eventsget,
  eventspost,
  loginget,
  loginpost,
  logout,
  registerget,
  registerpost,
  resetapi,
  resetget,
  resetpost,
  uploadget,
  uploadpost,
  userget,
  userpost,
  adminmembers,
  cron,
  about,
  //archives,
  blog,
  classes,
  membership,
  ratings
);
