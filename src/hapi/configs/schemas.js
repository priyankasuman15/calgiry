'use strict';


// LOAD MODULES
//
const Joi = require('@hapi/joi');




const schema = {
  address: Joi.object({ address: Joi.string().regex(/^[a-zA-Z0-9 #'.\-]{2,32}$/, { name: 'address' }) }),
  bookend: Joi.object({ bookend: Joi.string().regex(/^(?! )[A-Z](?!.* {2})[a-zA-Z '.-]{1,32}(?<! )$/, { name: 'bookend' }) }),
  bson: Joi.object({ bson: Joi.string().regex(/^[a-z0-9]{24}$/, { name: 'bson' }) }),
  cfc: Joi.object({ cfc: Joi.string().regex(/^\d{6}$/, { name: 'cfc' }) }),
  city: Joi.object({ city: Joi.string().regex(/^([a-zA-Z '.-]{2,32})$/, { name: 'city' }) }),
  country: Joi.object({ country: Joi.string().regex(/^[A-Z]{3}$/, { name: 'country' }) }),
  date: Joi.object({ date: Joi.string().regex(/^((?:19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }) }),
  elo: Joi.object({ elo: Joi.string().regex(/^(?:[2-9]\d{2}|[12]\d{3})$/, { name: 'elo' }) }),
  email: Joi.object({ email: Joi.string().regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' }) }),
  fide: Joi.object({ fide: Joi.string().regex(/^\d{6,9}$/, { name: 'fide' }) }),
  hash: Joi.object({ hash: Joi.string().regex(/^[A-Za-z0-9$./]{60}$/, { name: 'hash' }) }),
  id: Joi.object({ id: Joi.string().regex(/^\d+$/, { name: 'id' }) }),
  jobs: Joi.object({ jobs: Joi.string().valid('ics', 'cfc', 'fide', 'export', 'import').regex(/^[a-z]{3,6}$/, { name: 'jobs' }) }),
  name: Joi.object({ name: Joi.string().regex(/^[^ ]([a-zA-Z '.-]{1,32})(, )?([a-zA-Z '.-]{1,32})$/, { name: 'name' }) }),
  password: Joi.object({ password: Joi.string().regex(/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/, { name: 'password' }) }),
  path: Joi.string().length(14).regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\.zip$/, 'path'),
  phone: Joi.object({ phone: Joi.string().regex(/^[0-9]{3}\.[0-9]{3}\.[0-9]{4}$/, { name: 'phone' }) }),
  postal_code: Joi.object({ postal_code: Joi.string().regex(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} \d{1}[A-Z]{1}\d{1}$/, { name: 'postal_code' }) }),
  province: Joi.object({ province: Joi.string().regex(/^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/, { name: 'province' }) }),
  scope: Joi.object({ scope: Joi.string().valid('user', 'staff', 'admin', 'root').regex(/^[a-z]{4,5}$/, { name: 'scope' }) }),
  sex: Joi.object({ sex: Joi.string().valid('m', 'f').regex(/^[mf]$/, { name: 'sex' }) }),
  title: Joi.object({ title: Joi.string().valid('GM', 'IM', 'FM', 'CM', 'NM', 'WGM', 'WIM', 'WFM', 'WCM').regex(/^[CFGIMNW]{2,3}$/, { name: 'title' }) }),
  token: Joi.object({ token: Joi.string().regex(/^[A-Za-z0-9%]{60,80}$/, { name: 'token' }) }),
  transaction: Joi.object({ transaction: Joi.array().min(0).items(Joi.string().regex(/^20[0-9]{2}[ce]{1}[0-9]{3}$/)) }),
  events: Joi.object({ events: Joi.string().regex(/^(20[0-9]{2}[e]{1}[0-9]{3},?)+$/, { name: 'events' }) }),
  event: Joi.object({ event: Joi.string().regex(/^20[0-9]{2}[e]{1}[0-9]{3}$/, { name: 'event' }) }),
  yesno: Joi.object({ yesno: Joi.string().regex(/^[yn]$/, { name: 'yesno' }) })
};

const error = {
  address: 'Validation Error: "Address" is not formatted correctly!',
  bookend: 'Validation Error: "Bookend" must have between 2 and 32 characters, allowing only letters, spaces, hyphens, periods and single quotes, without multiple spaces or spaces at start or end of string',
  bson: 'Validation Error: "BSON" should be a valid BSON _id value',
  cfc: 'Validation Error: "CFC ID" should be a valid CFC Membership ID!',
  city: 'Validation Error: "City" is not formatted correctly!',
  country: 'Validation Error: "Country" must be an uppercase ISO3Alpha country abbreviation!',
  date: 'Validation Error: "Date" must be a valid date in "YYYY-MM-DD" (ISO8601) format!',
  elo: 'Validation Error: "Elo" must be a valid Elo rating between 200 and 2999!',
  email: 'Validation Error: "eMail" must be a valid eMail address. Please use only lowercase letters!',
  fide: 'Validation Error: "FIDE ID" should be a valid FIDE Membership ID!',
  hash: 'Validation Error: ',
  id: 'Validation Error: "ID" must be a numeric value!',
  jobs: 'Validation Error: "Jobs" must be a valid cron job!',
  name: 'Validation Error: "Name" should be formatted "Last, First"!',
  password: 'Validation Error: "Password" must be 6-10 characters and contain at least one uppercase, one lower case, one number, and one special character!',
  path: 'Validation Error: "Path" must be a valid archive location!',
  phone: 'Validation Error: "Phone" should be formatted "123.456.7890"!',
  postal_code: 'Validation Error: "Postal Code" must be a valid Canadian postal code!',
  province: 'Validation Error: "Province" must be an uppercase valid Canadian province abbreviation!',
  scope: 'Validation Error: "Scope" must be "user"!',
  sex: 'Validation Error: "Sex" must be one of "m" or "f"!',
  title: 'Validation Error: "Title" must be a valid title such as GM, IM, FM, CM, NM, WGM, WIM, WFM, WCM!',
  token: 'Validation Error: "Token" must be a valid encrypted token id!',
  transaction: 'Validation Error: "Transaction" must be an ID for a valid transaction!',
  events: 'Validation Error: "Events" must be a valid sequence of EventIDs, separated by commas!',
  event: 'Validation Error: "Event" must be a valid EventID!',
  yesno: 'Validation Error: "YesNo" must be one of "y" or "n"!'
};

// const label = {

// };

// const placeholder = {

// };




module.exports = {

  getSchema: function (name) {

    const object = {};
    const xxx = schema[name].describe();

    object.pattern = xxx.keys[name].rules[0].args.regex.toString().slice(1, -1);
    // console.log(xxx.keys[name].rules[0].args);
    object.error = error[name];

    return object;
  },


  schemas: {

    register: Joi.object().keys({
      email: Joi.string().regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' }).required(),
      password: Joi.string().regex(/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/, { name: 'password' }).required(),
      name: Joi.string().regex(/^[^ ]([a-zA-Z '.-]{1,32})(, )?([a-zA-Z '.-]{1,32})$/, { name: 'name' }).required(),
      dob: Joi.string().regex(/^((?:19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }).required(),
      sex: Joi.string().valid('m', 'f').regex(/^[mf]$/, { name: 'sex' }).required(),
      phone: Joi.string().regex(/^[0-9]{3}\.[0-9]{3}\.[0-9]{4}$/, { name: 'phone' }).required(),
      cfc: Joi.string().regex(/^\d{6}$/, { name: 'cfc' }).optional().allow(''),
      address: Joi.string().regex(/^[a-zA-Z0-9 #'.\-]{2,32}$/, { name: 'address' }).required(),
      city: Joi.string().regex(/^([a-zA-Z '.-]{2,32})$/, { name: 'city' }).required(),
      province: Joi.string().regex(/^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/, { name: 'province' }).required(),
      postal_code: Joi.string().regex(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} \d{1}[A-Z]{1}\d{1}$/, { name: 'postal_code' }).required(),
      country: Joi.string().regex(/^[A-Z]{3}$/, { name: 'country' }).required()
    }),


    user: Joi.object().keys({
      email: Joi.string().regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' }).optional(),
      dob: Joi.string().regex(/^((?:19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }).required(),
      sex: Joi.string().valid('m', 'f').regex(/^[mf]$/, { name: 'sex' }).required(),
      phone: Joi.string().regex(/^[0-9]{3}\.[0-9]{3}\.[0-9]{4}$/, { name: 'phone' }).required(),
      cfc: Joi.string().regex(/^\d{6}$/, { name: 'cfc' }).optional().allow(''),
      name: Joi.string().regex(/^[^ ]([a-zA-Z '.-]{1,32})(, )?([a-zA-Z '.-]{1,32})$/, { name: 'name' }).required(),
      address: Joi.string().regex(/^[a-zA-Z0-9 #'.\-]{2,32}$/, { name: 'address' }).required(),
      city: Joi.string().regex(/^([a-zA-Z '.-]{2,32})$/, { name: 'city' }).required(),
      province: Joi.string().regex(/^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/, { name: 'province' }).required(),
      postal_code: Joi.string().regex(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} \d{1}[A-Z]{1}\d{1}$/, { name: 'postal_code' }).required(),
      country: Joi.string().regex(/^[A-Z]{3}$/, { name: 'country' }).required()
    }),


    change: Joi.object().keys({
      email: Joi.string().regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' }).required(),
      password: Joi.string().regex(/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/, { name: 'password' }).required(),
      pw: Joi.string().regex(/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/, { name: 'password' }).required()
    }),


    login: Joi.object().keys({
      email: Joi.string().regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' }).required(),
      password: Joi.string().regex(/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/, { name: 'password' }).required()
    }),


    reset: Joi.object().keys({
      email: Joi.string().regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' }).required()
    }),


    token: Joi.object().keys({
      t: Joi.string().regex(/^[A-Za-z0-9$./]{60}$/, { name: 'hash' })
    }),


    jobs: Joi.object().keys({
      jobs: Joi.string().valid('ics', 'cfc', 'fide', 'export', 'import').regex(/^[a-z]{3,6}$/, { name: 'jobs' }).required()
    }),


    bson: Joi.object().keys({
      m: Joi.string().regex(/^[a-z0-9]{24}$/, { name: 'bson' })
    }),


    classid: Joi.object().keys({
      id: Joi.string().regex(/^20[0-9]{2}[c]{1}[0-9]{3}$/, { name: 'id' })
    }),


    eventid: Joi.object().keys({
      id: Joi.string().regex(/^20[0-9]{2}[e]{1}[0-9]{3}$/, { name: 'id' })
    }),


    cfc: Joi.object().keys({
      cfcid: Joi.string().optional().allow('').regex(/^\d{6}$/, { name: 'cfc' }),
      cfcexpiry: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
      elo_classical: Joi.string().optional().allow('').regex(/^(0|[2-9]\d{2}|[12]\d{3})$/, { name: 'elo' }),
      elo_rapid: Joi.string().optional().allow('').regex(/^(0|[2-9]\d{2}|[12]\d{3})$/, { name: 'elo' }),
      fideid: Joi.string().optional().allow('').regex(/^\d{6,9}$/, { name: 'fide' })
    }),


    archives: Joi.object().keys({
      a: Joi.string().optional().allow('').regex(/^a-[0-9]{8}$/, { name: 'archive' }),
      t: Joi.string().optional().allow('').regex(/^[a-z]{3,20}$/, { name: 'tag' })
    }),


    archive: Joi.object().keys({
      path: Joi.string().length(14).regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\.zip$/, 'path')
    }),


    member: Joi.object().keys({
      _id: Joi.string().optional().allow('').regex(/^[a-z0-9]{24}$/, { name: 'bson' }),
      id: Joi.string().optional().allow('').regex(/^\d+$/, { name: 'id' }),
      password: Joi.string().optional().allow('').regex(/^[A-Za-z0-9$./]{60}$/, { name: 'hash' }),
      scope: Joi.array().min(0).items(Joi.string().valid('user', 'staff', 'admin', 'root').regex(/^[a-z]{4,5}$/, { name: 'scope' })),
      personal: Joi.object().keys({
        name: Joi.object().keys({
          last: Joi.string().optional().allow('').regex(/^([a-zA-Z '.-]{1,32})$/, { name: 'last' }),
          first: Joi.string().optional().allow('').regex(/^([a-zA-Z '.-]{1,32})$/, { name: 'first' })
        }),
        dob: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
        sex: Joi.string().optional().allow('').valid('m', 'f').regex(/^[mf]$/, { name: 'sex' }),
        contact: Joi.object().keys({
          address: Joi.string().optional().allow('').regex(/^[a-zA-Z0-9 #'.\-]{2,48}$/, { name: 'address' }),
          city: Joi.string().optional().allow('').regex(/^([a-zA-Z '.-]{2,32})$/, { name: 'city' }),
          province: Joi.string().optional().allow('').regex(/^(AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)$/, { name: 'province' }),
          postal_code: Joi.string().optional().allow('').regex(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} \d{1}[A-Z]{1}\d{1}$/, { name: 'postal_code' }),
          country: Joi.string().optional().allow('').regex(/^[A-Z]{3}$/, { name: 'country' }),
          phone: Joi.string().optional().allow('').regex(/^[0-9]{3}\.[0-9]{3}\.[0-9]{4}$/, { name: 'phone' }),
          email: Joi.string().optional().allow('').regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' })
        })
      }),
      data: Joi.object().keys({
        fide: Joi.object().keys({
          id: Joi.string().optional().allow('').regex(/^\d{6,9}$/, { name: 'id' }),
          expiry: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
          title: Joi.string().optional().allow('').valid('GM', 'IM', 'FM', 'CM', 'NM', 'WGM', 'WIM', 'WFM', 'WCM').regex(/^[CFGIMNW]{2,3}$/, { name: 'title' }),
          elo: Joi.object().keys({
            classical: Joi.string().optional().allow('').regex(/^([2-9]\d{2}|[12]\d{3})$/, { name: 'elo' }),
            rapid: Joi.string().optional().allow('').regex(/^([2-9]\d{2}|[12]\d{3})$/, { name: 'elo' }),
            blitz: Joi.string().optional().allow('').regex(/^([2-9]\d{2}|[12]\d{3})$/, { name: 'elo' })
          })
        }),
        cfc: Joi.object().keys({
          id: Joi.string().optional().allow('').regex(/^\d{6}$/, { name: 'cfc' }),
          expiry: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
          title: Joi.string().optional().allow('').valid('CM', 'NM').regex(/^[CNM]{2}$/, { name: 'title' }),
          elo: Joi.object().keys({
            classical: Joi.string().optional().allow('').regex(/^([2-9]\d{2}|[12]\d{3})$/, { name: 'elo' }),
            rapid: Joi.string().optional().allow('').regex(/^([2-9]\d{2}|[12]\d{3})$/, { name: 'elo' })
          })
        }),
        ccc: Joi.object().keys({
          id: Joi.string().optional().allow('').regex(/^\d+$/, { name: 'id' }),
          expiry: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' })
        }),
        transactions: Joi.object().keys({
          events: Joi.array().min(0).items(Joi.string().regex(/^20[0-9]{2}[e][0-9]{3}$/, { name: 'events' })),
          classes: Joi.array().min(0).items(Joi.string().regex(/^20[0-9]{2}[c][0-9]{3}$/, { name: 'classes' }))
        })
      })
    }),


    event: Joi.object().keys({
      _id: Joi.string().optional().allow('').regex(/^[a-z0-9]{24}$/, { name: 'bson' }),
      id: Joi.string().regex(/^20[0-9]{2}[e]{1}[0-9]{3}$/, { name: 'id' }),
      active: Joi.string().optional().allow('').regex(/^[yn]$/, { name: 'yesno' }),
      name: Joi.string().optional().allow('').regex(/^([a-zA-Z0-9 #'.-]{1,32})$/, { name: 'name' }),
      start: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
      end: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
      location: Joi.object().keys({
        venue: Joi.string().optional().allow('').regex(/^([a-zA-Z0-9 '.-]{1,32})$/, { name: 'venue' }),
        address: Joi.string().optional().allow('').regex(/^[a-zA-Z0-9 #'.\-]{2,48}$/, { name: 'address' }),
        city: Joi.string().optional().allow('').regex(/^([a-zA-Z '.-]{2,32})$/, { name: 'city' }),
        province: Joi.string().optional().allow('').regex(/^(AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)$/, { name: 'province' }),
        postal_code: Joi.string().optional().allow('').regex(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} \d{1}[A-Z]{1}\d{1}$/, { name: 'postal_code' }),
        country: Joi.string().optional().allow('').regex(/^[A-Z]{3}$/, { name: 'country' }),
        phone: Joi.string().optional().allow('').regex(/^[0-9]{3}\.[0-9]{3}\.[0-9]{4}$/, { name: 'phone' }),
        email: Joi.string().optional().allow('').regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' })
      }),
      organizer: Joi.array().min(1).items(Joi.object().keys({
        name: Joi.object().keys({
          last: Joi.string().optional().allow('').regex(/^([a-zA-Z '.-]{1,32})$/, { name: 'last' }),
          first: Joi.string().optional().allow('').regex(/^([a-zA-Z '.-]{1,32})$/, { name: 'first' })
        }),
        email: Joi.string().optional().allow('').regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' })
      })),
      tournament_director: Joi.array().min(1).items(Joi.object().keys({
        name: Joi.object().keys({
          last: Joi.string().optional().allow('').regex(/^([a-zA-Z '.-]{1,32})$/, { name: 'last' }),
          first: Joi.string().optional().allow('').regex(/^([a-zA-Z '.-]{1,32})$/, { name: 'first' })
        }),
        email: Joi.string().optional().allow('').regex(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, { name: 'email' })
      })),
      format: Joi.object().keys({
        type: Joi.string().optional().allow('').valid('ch', 'inv', 'm', 'op', 'rr', 'tt').regex(/^[CFGIMNW]{2,3}$/, { name: 'type' }),
        sections: Joi.string().optional().allow('').regex(/^[yn]$/, { name: 'yesno' }),
        players: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
        time_control: Joi.string().optional().allow('').regex(/[0-9G/+, ]{1,16}/, { name: 'tc' }),
        rated: Joi.object().keys({
          fide: Joi.string().optional().allow('').regex(/^[yn]$/, { name: 'yesno' }),
          cfc: Joi.string().optional().allow('').regex(/^[yn]$/, { name: 'yesno' })
        })
      }),
      schedule: Joi.array().min(1).items(Joi.object().keys({
        date: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
        time: Joi.string().optional().allow('').regex(/^(2[0-3]|[01][0-9]):[0-5][0-9]$/, { name: 'time' })
      })),
      registration: Joi.object().keys({
        deadline: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
        refund: Joi.string().optional().allow('').regex(/^((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, { name: 'date' }),
        on_site: Joi.string().optional().allow('').regex(/^[yn]$/, { name: 'yesno' }),
        memberships: Joi.object().keys({
          cfc: Joi.string().optional().allow('').regex(/^[yn]$/, { name: 'yesno' }),
          ccc: Joi.string().optional().allow('').regex(/^[yn]$/, { name: 'yesno' })
        }),
        entry_fee: Joi.object().keys({
          adult: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
          junior: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
          senior: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
          titled: Joi.object().keys({
            gm: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
            wgm: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
            im: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
            wim: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
            fm: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
            cm: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' }),
            nm: Joi.string().optional().allow('').regex(/[0-9]{1,2}/, { name: 'number' })
          })
        })
      }),
      prize_fund: Joi.object().keys({
        entries: Joi.string().optional().allow('').regex(/[0-9]{3}/, { name: 'number' }),
        expenses: Joi.string().optional().allow('').regex(/[0-9]{1,5}/, { name: 'number' })
      }),
      notes: Joi.string().optional().allow('').regex(/[a-zA-Z0-9 '.-]{1,256}/, { name: 'text' })
    })

  }

};
