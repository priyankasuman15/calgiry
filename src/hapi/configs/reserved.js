'use strict';


// https://ldpreload.com/blog/names-to-reserve
// error messages, data and custom validation code used in user registration
// below we construct a large but non-exhaustive list of names which
// users probably should not be able to register with, due to various risks

// for a site which creates email addresses from username, important common addresses must be reserved
// for a site which creates subdomains from usernames, important common hostnames/domain names must be reserved
// for a site which uses the username to generate a url to the user's profile, common well-known filenames must be reserved




module.exports = {

  errors: {
    CONFUSABLE: 'this name cannot be registered. please choose a different name',
    CONFUSABLE_EMAIL: 'this email address cannot be registered. please supply a different email address',
    DUPLICATE_EMAIL: 'this email address is already in use. please supply a different email address',
    FREE_EMAIL: 'registration using free email addresses is prohibited. please supply a different email address',
    RESERVED_NAME: 'this name is reserved and cannot be registered',
    TOS_REQUIRED: 'you must agree to the terms to register'
  },

  // hostnames with special/reserved meaning
  SPECIAL_HOSTNAMES: [
    'autoconfig',     // thunderbird autoconfig
    'autodiscover',   // ms outlook/exchange autoconfig
    'broadcasthost',  // network broadcast hostname
    'isatap',         // ipv6 tunnel autodiscovery
    'localdomain',    // loopback
    'localhost',      // loopback
    'wpad'            // proxy autodiscovery
  ],

  // common protocol hostnames
  PROTOCOL_HOSTNAMES: [
    'ftp',
    'imap',
    'mail',
    'news',
    'pop',
    'pop3',
    'smtp',
    'usenet',
    'uucp',
    'webmail',
    'www'
  ],

  // email addresses known used by certificate authorities during verification
  CA_ADDRESSES: [
    'admin',
    'administrator',
    'hostmaster',
    'info',
    'is',
    'it',
    'mis',
    'postmaster',
    'root',
    'ssladmin',
    'ssladministrator',
    'sslwebmaster',
    'sysadmin',
    'webmaster'
  ],

  // rfc-2142-defined names not already covered
  RFC_2142: [
    'abuse',
    'marketing',
    'noc',
    'sales',
    'security',
    'support'
  ],

  // common no-reply email addresses
  NOREPLY_ADDRESSES: [
    'mailer-daemon',
    'nobody',
    'noreply',
    'no-reply'
  ],

  // sensitive filenames
  SENSITIVE_FILENAMES: [
    'clientaccesspolicy.xml',  // silverlight cross-domain policy file
    'crossdomain.xml',         // flash cross-domain policy file
    'favicon.ico',
    'humans.txt',
    'keybase.txt',             // keybase ownership-verification url
    'robots.txt',
    '.htaccess',
    '.htpasswd'
  ],

  // other names which could be problems depending on url/subdomain structure
  OTHER_SENSITIVE_NAMES: [
    'account',
    'accounts',
    'blog',
    'buy',
    'clients',
    'contact',
    'contactus',
    'contact-us',
    'copyright',
    'dashboard',
    'doc',
    'docs',
    'download',
    'downloads',
    'enquiry',
    'faq',
    'help',
    'inquiry',
    'license',
    'login',
    'logout',
    'me',
    'myaccount',
    'payments',
    'plans',
    'portfolio',
    'preferences',
    'pricing',
    'privacy',
    'profile',
    'register',
    'registration',
    'secure',
    'settings',
    'signin',
    'signup',
    'ssl',
    'status',
    'subscribe',
    'terms',
    'tos',
    'user',
    'users',
    'weblog',
    'work'
  ]

};
