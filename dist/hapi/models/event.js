'use strict';


function event() {

  // this._id = '',
  this.id = '',
  this.active = '',
  this.name = '',
  this.start = '',
  this.end = '',
  this.location = {
    venue: 'Calgary Chess Club',
    address: '#274 - 3359 27th Street NE',
    city: 'Calgary',
    province: 'AB',
    postal_code: 'T1Y 5E4',
    country: 'CAN',
    phone: '',
    email: ''
  },
  this.organizer = [{
    name: {
      last: '',
      first: ''
    },
    email: ''
  }],
  this.tournament_director = [{
    name: {
      last: '',
      first: ''
    },
    email: ''
  }],
  this.format = {
    type: '',
    sections: '',
    players: '',
    time_control: '',
    rated: {
      fide: '',
      cfc: ''
    }
  },
  this.schedule = [
    {
      date: '',
      time: ''
    }
  ],
  this.registration = {
    deadline: '',
    refund: '',
    on_site: '',
    memberships: {
      cfc: '',
      ccc: ''
    },
    entry_fee: {
      adult: '',
      junior: '',
      senior: '',
      titled: {
        gm: '',
        wgm: '',
        im: '',
        wim: '',
        fm: '',
        cm: '',
        nm: ''
      }
    }
  },
  this.prize_fund = {
    entries: '',
    expenses: ''
  },
  this.notes = '';
}




module.exports = event;
