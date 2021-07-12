// 'use strict';


// LOAD MODULES
//
const NginxParser = require('nginxparser');

const parser = new NginxParser('$remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent"');
const fs = require('fs');


// VARIABLES
//
const path = './logs/nginx/calgarychess.com.access.log';

const entries = {
  count: 0,
  good: [],
  bad: [],
  admin: [],
  user: [],
  login: [],
  register: [],
  cron: [],
  blog: [],
  archives: [],
  events: [],
  ratings: [],
  membership: [],
  classes: [],
  about: []
};




function parseLog() {

  parser.read(path, (row) => {

    entries.count++;
    process(row);

  }, (error) => {

    if (error) {
      throw error;
    }

    print();
  });
}




function process(row) {

  if (row.status === '200') {
    if (row.request.startsWith('GET /admin')) {
      entries.admin.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /user')) {
      entries.user.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /login')) {
      entries.login.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /register')) {
      entries.register.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /cron')) {
      entries.cron.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /blog') || row.request.startsWith('GET / ')) {
      entries.blog.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /archives')) {
      entries.archives.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /events')) {
      entries.events.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /ratings')) {
      entries.ratings.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /membership')) {
      entries.membership.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /classes')) {
      entries.classes.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    if (row.request.startsWith('GET /about')) {
      entries.about.push(row.ip_str.replace(/[^0-9.]/g, ''));
    }

    entries.good.push(row.ip_str.replace(/[^0-9.]/g, ''));
  }

  else {
    entries.bad.push(row.ip_str.replace(/[^0-9.]/g, ''));
  }
}




function print() {

  console.log('count ' + entries.count);
  console.log('good ' + entries.good.length);
  console.log('bad ' + entries.bad.length);
  console.log('/admin ' + entries.admin.length);
  console.log('/user ' + entries.user.length);
  console.log('/login ' + entries.login.length);
  console.log('/register ' + entries.register.length);
  console.log('/cron ' + entries.cron.length);
  console.log('/blog ' + entries.blog.length);
  console.log('/archives ' + entries.archives.length);
  console.log('/events ' + entries.events.length);
  console.log('/ratings ' + entries.ratings.length);
  console.log('/membership ' + entries.membership.length);
  console.log('/classes ' + entries.classes.length);
  console.log('/about ' + entries.about.length);

  const frequency = true;

  const good = uniqueKeys(entries.good, frequency);
  writeFile('./logs/nginx_json/good.json', good);

  const bad = uniqueKeys(entries.bad, frequency);
  writeFile('./logs/nginx_json/bad.json', bad);

  const admin = uniqueKeys(entries.admin, frequency);
  writeFile('./logs/nginx_json/admin.json', admin);

  const user = uniqueKeys(entries.user, frequency);
  writeFile('./logs/nginx_json/user.json', user);

  const login = uniqueKeys(entries.login, frequency);
  writeFile('./logs/nginx_json/login.json', login);

  const register = uniqueKeys(entries.register, frequency);
  writeFile('./logs/nginx_json/register.json', register);

  const cron = uniqueKeys(entries.cron, frequency);
  writeFile('./logs/nginx_json/cron.json', cron);

  const blog = uniqueKeys(entries.blog, frequency);
  writeFile('./logs/nginx_json/blog.json', blog);

  const archives = uniqueKeys(entries.archives, frequency);
  writeFile('./logs/nginx_json/archives.json', archives);

  const events = uniqueKeys(entries.events, frequency);
  writeFile('./logs/nginx_json/events.json', events);

  const ratings = uniqueKeys(entries.ratings, frequency);
  writeFile('./logs/nginx_json/ratings.json', ratings);

  const membership = uniqueKeys(entries.membership, frequency);
  writeFile('./logs/nginx_json/membership.json', membership);

  const classes = uniqueKeys(entries.classes, frequency);
  writeFile('./logs/nginx_json/classes.json', classes);

  const about = uniqueKeys(entries.about, frequency);
  writeFile('./logs/nginx_json/about.json', about);
}




function uniqueKeys(obj, frequency) {

  const unordered = {};
  obj.forEach((x) => {

    unordered[x] = (unordered[x] || 0) + 1;
  });

  const ordered = {};

  // SORT BY FREQUENCY
  if (frequency === true) {
    Object.keys(unordered).sort((a, b) => {

      return unordered[b] - unordered[a];
    }).forEach((key) => {

      ordered[key] = unordered[key];
    });
  }

  // SORT BY IP ADDRESS
  else {
    Object.keys(unordered).sort().forEach((key) => {

      ordered[key] = unordered[key];
    });
  }

  return ordered;
}




function writeFile(file, obj) {

  const target = fs.createWriteStream(file);
  target.write(JSON.stringify(obj, null, 2));
}










parseLog();




module.exports = parseLog;
