'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');

const fs = require('fs');
const ics = require('ics');
const { v1: uuidv4 } = require('uuid');


// SERVER INTERNALS
//




async function printICS(request, events) {

  try {
    const url = 'calgarychess.com';

    // iterate over events
    for (let i = 0; i < events.length; ++i) {

      // only process events that are active
      if (events[i].active !== 'n') {
        const startDate = request.server.methods.getDateParts(events[i].start);
        const endDate = request.server.methods.getDateParts(events[i].end);
        const startTime = request.server.methods.getTimeParts(events[i].schedule[0].time);

        const event = {
          startType: 'local', // must be set to 'local', otherwise utc offset
          productId: url,
          // uid default generates unique string based on RFC822 spec
          uid: `${uuidv4()}@${url}`,
          // timestamp auto generated
          // timestamp: Date.now(),
          start: [startDate.year, startDate.month, startDate.day, startTime.hours, startTime.minutes],
          end: [endDate.year, endDate.month, endDate.day],
          // end | duration, but not both
          // duration: {
          //   // before: true,
          //   weeks: 0,
          //   days: 0,
          //   hours: 3,
          //   minutes: 15,
          //   seconds: 0
          // },
          status: 'CONFIRMED', // TENTATIVE | CONFIRMED | CANCELLED
          categories: ['CCC', 'Calgary Chess Club', 'Event', 'Tournament'],
          organizer: {
            name: `${events[i].organizer[0].name.first} ${events[i].organizer[0].name.last}`,
            email: `${events[i].organizer[0].email}`
          },
          title: `${events[i].name}`,
          description: 'Calgary Chess Club Tournament',
          location: `${events[i].location.venue}`,
          url: `http://${url}`,
          geo: {
            lat: 51.083067,
            lon: -113.995535
          },
          attendees: [
            { name: 'organizer', email: `${events[i].organizer[0].email}`, rsvp: false }
          ],
          // action: audio | display | email
          alarms: [
            { action: 'display', description: `${events[i].name}`, summary: 'START', trigger: { days: 1, before: true } }
            // { action: 'email', description: `${events[i].name}`, summary: 'START', attendee: { name: 'info', email: `email` }, trigger: { days: 1, hours: 2, before: true } }
          ]
        };


        ics.createEvent(event, (error, value) => {

          if (error) {
            request.log(['error', 'cron', 'ics'], error);
          }

          const outfile = `${__dirname}/../../../../assets/ics/${events[i].id}.ics`;
          fs.writeFileSync(outfile, value);
        });
      }
    }

    request.log(['info', 'cron', 'ics'], `${events.length} ics files written`);

    return await true;
  }

  catch (error) {
    return Boom.badImplementation('cron error: ics', error);
  }
}




module.exports = printICS;
