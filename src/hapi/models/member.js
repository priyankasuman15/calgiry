'use strict';


function member() {

  this._id = '',
  this.id = '',
  this.password = '',
  this.scope = [],
  this.personal = {
    name: {
      last: '',
      first: ''
    },
    dob: '',
    sex: '',
    contact: {
      address: '',
      city: '',
      province: '',
      postal_code: '',
      country: '',
      phone: '',
      email: ''
    }
  },
  this.data = {
    fide: {
      id: '',
      expiry: '',
      title: '',
      elo: {
        classical: '',
        rapid: '',
        blitz: ''
      }
    },
    cfc: {
      id: '',
      expiry: '',
      title: '',
      elo: {
        classical: '',
        rapid: ''
      }
    },
    ccc: {
      id: '',
      expiry: ''
    },
    transactions: {
      events: [],
      classes: []
    }
  };
}




module.exports = member;
