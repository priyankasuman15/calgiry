module.exports = {
  apps : [{
    name: 'calgarychess.com',
    script: './dist/hapi/server.js',
    interpreter: '/path/to/node/version',
    instances: 1,
    autorestart: true,
    cwd: '.',
    watch: false,
    env: {
      TZ: 'America/Edmonton',
      HOST_PUBLIC: 'calgarychess.com',
      MONGO_BIND: '127.0.0.1',
      MONGO_PORT: 27017,
      MONGO_USER: 'CCCUser',
      MONGO_PW: '12345',
      MONGO_DB: 'ccc',
      MONGO_AUTH: 'DEFAULT',
      MONGO_SOURCE: 'admin',
      MAIL_HOST: 'smtp.mailtrap.io',
      MAIL_PORT: '25',
      MAIL_USER: '6fabbd32853f42',
      MAIL_PW: 'f0ecceccabda5e'
    },
    env_development: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    pid_file: './pm2.pid',
    disable_logs: true,
    log_type: 'json',
    log_date_format: 'YYYY-MM-DD HH:mmZ',
    log: '/dev/null', // '/path/combined.out.error.log'
    output: '/dev/null', // '/path/out.log'
    error: '/dev/null' // '/path/error.log'
  }]

};
