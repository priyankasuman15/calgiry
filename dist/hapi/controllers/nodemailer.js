'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');


// SERVER INTERNALS
//
const internals = require('../configs/manifest');


// ADDRESSES
//
const addresses = internals.addresses;




async function getOptions(request, user, path) {

  let options = {};

  switch (path) {

    case 'change':
      options = {
        from: addresses.info,
        to: user.personal.contact.email,
        bcc: addresses.admin,
        subject: 'CCC Password Change',
        html: `<h1>Calgary Chess Club Membership</h1><h4>Password Change Confirmation</h4><p>Your Calgary Chess Club Membership password has been changed. If you have not requested this change or need further assistance please contact <a href="mailto:${addresses.admin}">${addresses.admin}</a>!</p><h4>Account Details</h4><p>${user.personal.name.last}, ${user.personal.name.first}<br>${user.personal.contact.email}</p>`
      };
      break;

    case 'reset':
      options = {
        from: addresses.info,
        to: user.personal.contact.email,
        bcc: addresses.admin,
        subject: 'CCC Password Reset - Request',
        html: `<h1>Calgary Chess Club Membership</h1><h4>Password Reset Request</h4><p>A password reset request for the membership account linked to ${request.payload.email} has been registered by our system. Please complete the process via <a href="https://calgarychess.com/reset-api?t=${user.options.token}">Complete Password Reset</a>. This link is available for a limited time only.</p><p>If you did not initiate the password reset request, please contact <a href="mailto:${addresses.admin}">${addresses.admin}</a></p>`
        // <p>This action was requested from ip address ${request.info.remoteAddress}. Find out more about this address at <a href="https://www.ip-adress.com/ip-address/ipv4/${request.info.remoteAddress}">ip-address.com</a>!</p>
      };
      break;

    case 'reset-api':
      options = {
        from: addresses.info,
        to: user.personal.contact.email,
        bcc: addresses.admin,
        subject: 'CCC Password Reset - Confirmation',
        html: `<h1>Calgary Chess Club Membership</h1><h4>Password Reset Confirmation</h4><p>The password for the membership account linked to ${user.personal.contact.email} has been reset successfully. If you haven't done so already, please login via <a href="https://calgarychess.com/login">Login</a> to access your account with the newly created password.</p><p>If you did not initiate the password reset request, or experience other issues related to accessing your account, please contact <a href="mailto:${addresses.admin}">${addresses.admin}</a></p>`
      };
      break;

    case 'register':
      options = {
        from: addresses.info,
        to: user.personal.contact.email,
        bcc: [addresses.info, addresses.admin],
        subject: `CCC Membership Registration - Welcome ${user.personal.name.first}`,
        html: `<h1>Calgary Chess Club Membership</h1><h4>Registration Confirmation</h4><p>Thank you for registering with the Calgary Chess Club!</p><h4>Account Details</h4><p>${user.personal.name.last}, ${user.personal.name.first}<br>${user.personal.contact.email}</p>`
      };
      break;

    case 'events-post':
      options = {
        from: addresses.info,
        to: user.personal.contact.email,
        bcc: [addresses.info, addresses.admin],
        subject: 'CCC Event Registration - Confirmation',
        html: `<h1>Calgary Chess Club Event Registration</h1><h4>Confirmation &amp; Payment</h4><p>Thank you for registering in the ${user.options.event.name}! ${user.personal.name.first} ${user.personal.name.last} has been added to the event start list. However, your registration is not complete until all fees, event registration and expired memberships, are paid in full at least 24 hours before the start of the event. Payments made on-site, even if you have pre-registered online, incur the standard late fee of $${user.options.event.registration.on_site}.</p><p>Please review <a href="https://calgarychess.com/membership">Memberships</a> and <a href="https://calgarychess.com/events">Frequently Asked Questions</a> for details. Payments can be made via eTransfer sent to <a href="mailto:${addresses.payments}">${addresses.payments}</a>. Please use <strong>${user.options.event.id}</strong> as the secret phrase with your eTransfer. See you at the ${user.options.event.name}!</p><h4>Player Details</h4><p>Note any items highlighted below in <strong>bold</strong>, which means renewal fees are due for your expired CFC and/or CCC memberships. The expiry date of those memberships must include the end date of the event you are registering for.</p><p>${user.personal.name.last}, ${user.personal.name.first}<br>${user.personal.contact.email}</p>

        ${user.options.cfc ? '' : '<strong>'}
        <p>CFC<br>ID: ${user.data.cfc.id}<br>EXPIRY: ${user.data.cfc.expiry}</p>
        ${user.options.cfc ? '' : '</strong>'}

        ${user.options.ccc ? '' : '<strong>'}
        <p>CCC<br>ID: ${user.data.ccc.id}<br>EXPIRY: ${user.data.ccc.expiry}</p>
        ${user.options.ccc ? '' : '</strong>'}

        <p>Any questions about the event or registration process should be directed to <a href="mailto:${user.options.event.organizer[0].email}">${user.options.event.organizer[0].name.first} ${user.options.event.organizer[0].name.last}</a>.</p>`
      };
      break;

    default:
      options = {
        from: addresses.info,
        to: addresses.info,
        bcc: addresses.admin,
        subject: 'CCC eMail Notification',
        html: `<h1>CCC eMail Notification</h1><h4>Spurious Origin</h4><p>${user.personal.name.last}, ${user.personal.name.first}<br>${user.personal.contact.email}</p>`
      };
      break;

  }

  return await options;
}




async function send(request, user) {

  const transporter = request.getMailer();


  // configure message
  const path = request.path.slice(1);
  const options = await getOptions(request, user, path);


  // sending mail
  transporter.sendMail(options, (error, info) => {

    if (error) {
      return Boom.badImplementation('nodemailer error', error);
    }

    request.log(['info', 'nodemailer'], `accept/reject ${info.accepted.length}/${info.rejected.length}`);
    request.log(['info', 'nodemailer'], `nodemailer /${path} ${user.personal.contact.email}`);
  });
}




function sendMail(request, user) {

  send(request, user);
}




module.exports = {
  sendMail
};
