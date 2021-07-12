'use strict';


const events = [
  {
    id: '2020e001',
    active: 'y',
    name: 'Schleinich Memorial',
    start: '2020-01-03',
    end: '2020-01-05',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'rr',
      sections: 'y',
      players: '6',
      time_control: '40/90+30, G/30+30',
      rated: {
        fide: 'n',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-01-03',
        time: '19:00'
      },
      {
        date: '2020-01-04',
        time: '10:00'
      },
      {
        date: '2020-01-04',
        time: '15:00'
      },
      {
        date: '2020-01-05',
        time: '10:00'
      },
      {
        date: '2020-01-05',
        time: '15:00'
      }
    ],
    registration: {
      deadline: '2020-01-02',
      refund: '2020-01-02',
      on_site: 'n',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '50',
        junior: '40',
        senior: '40',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '50',
          cm: '50',
          nm: '50'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e002',
    active: 'y',
    name: 'Grand Prix Leg #1',
    start: '2020-01-07',
    end: '2020-02-04',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-01-07',
        time: '19:00'
      },
      {
        date: '2020-01-14',
        time: '19:00'
      },
      {
        date: '2020-01-21',
        time: '19:00'
      },
      {
        date: '2020-01-28',
        time: '19:00'
      },
      {
        date: '2020-02-04',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-01-06',
      refund: '2020-01-06',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e003',
    active: 'y',
    name: 'Grand Prix Leg #2',
    start: '2020-02-11',
    end: '2020-03-10',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-02-11',
        time: '19:00'
      },
      {
        date: '2020-02-18',
        time: '19:00'
      },
      {
        date: '2020-02-25',
        time: '19:00'
      },
      {
        date: '2020-03-03',
        time: '19:00'
      },
      {
        date: '2020-03-10',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-02-10',
      refund: '2020-02-10',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e004',
    active: 'n',
    name: 'Calgary Chess Olympiad',
    start: '2020-02-27',
    end: '2020-10-30',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'tt',
      sections: 'n',
      players: '4',
      time_control: '40/90+30, G/30+30',
      rated: {
        fide: 'n',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-02-27',
        time: '19:00'
      },
      {
        date: '2020-03-27',
        time: '19:00'
      },
      {
        date: '2020-04-24',
        time: '19:00'
      },
      {
        date: '2020-05-29',
        time: '19:00'
      },
      {
        date: '2020-06-26',
        time: '19:00'
      },
      {
        date: '2020-07-31',
        time: '19:00'
      },
      {
        date: '2020-08-28',
        time: '19:00'
      },
      {
        date: '2020-09-25',
        time: '19:00'
      },
      {
        date: '2020-10-30',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-02-26',
      refund: '2018-02-26',
      on_site: 'n',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '72',
        junior: '72',
        senior: '72',
        titled: {
          gm: '72',
          wgm: '72',
          im: '72',
          wim: '72',
          fm: '72',
          cm: '72',
          nm: '72'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e005',
    active: 'y',
    name: 'Steinitz Menchik Classic',
    start: '2020-04-10',
    end: '2020-04-12',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-04-10',
        time: '19:00'
      },
      {
        date: '2020-04-11',
        time: '10:00'
      },
      {
        date: '2020-04-11',
        time: '14:00'
      },
      {
        date: '2020-04-11',
        time: '18:00'
      },
      {
        date: '2020-04-12',
        time: '10:00'
      },
      {
        date: '2020-04-12',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-04-09',
      refund: '2020-04-09',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '60',
        junior: '50',
        senior: '50',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '60',
          cm: '60',
          nm: '60'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e006',
    active: 'y',
    name: 'Grand Prix Leg #3',
    start: '2020-03-17',
    end: '2020-04-14',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-03-17',
        time: '19:00'
      },
      {
        date: '2020-03-24',
        time: '14:00'
      },
      {
        date: '2020-03-31',
        time: '19:00'
      },
      {
        date: '2020-04-07',
        time: '19:00'
      },
      {
        date: '2020-04-14',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-03-16',
      refund: '2020-03-16',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e007',
    active: 'n',
    name: 'Calgary Seniors Championship',
    start: '2020-03-21',
    end: '2020-03-22',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-03-21',
        time: '10:00'
      },
      {
        date: '2020-03-21',
        time: '14:00'
      },
      {
        date: '2020-03-21',
        time: '18:00'
      },
      {
        date: '2020-03-22',
        time: '10:00'
      },
      {
        date: '2020-03-22',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-03-20',
      refund: '2020-03-20',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '0',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '30',
          cm: '30',
          nm: '30'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e008',
    active: 'n',
    name: 'Alberta Closed',
    start: '2020-04-19',
    end: '2020-04-21',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'inv',
      sections: 'y',
      players: '6',
      time_control: '40/90+30, G/30+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-04-19',
        time: '19:00'
      },
      {
        date: '2020-04-20',
        time: '10:00'
      },
      {
        date: '2020-04-20',
        time: '16:00'
      },
      {
        date: '2020-04-21',
        time: '10:00'
      },
      {
        date: '2020-04-21',
        time: '16:00'
      }
    ],
    registration: {
      deadline: '2020-04-18',
      refund: '2020-04-18',
      on_site: 'n',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '0',
        senior: '0',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e009',
    active: 'n',
    name: 'Alberta Reserves',
    start: '2020-04-20',
    end: '2020-04-21',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-04-20',
        time: '10:00'
      },
      {
        date: '2020-04-20',
        time: '14:00'
      },
      {
        date: '2020-04-20',
        time: '18:00'
      },
      {
        date: '2020-04-21',
        time: '10:00'
      },
      {
        date: '2020-04-21',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-04-19',
      refund: '2020-04-19',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '40',
          cm: '40',
          nm: '40'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e010',
    active: 'y',
    name: 'Grand Prix Leg #4',
    start: '2020-04-21',
    end: '2020-05-19',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-04-21',
        time: '19:00'
      },
      {
        date: '2020-04-28',
        time: '19:00'
      },
      {
        date: '2020-05-05',
        time: '19:00'
      },
      {
        date: '2020-05-12',
        time: '19:00'
      },
      {
        date: '2020-05-19',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '019-04-20',
      refund: '019-04-20',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e011',
    active: 'y',
    name: 'Calgary Chess Club Championship',
    start: '2020-05-26',
    end: '2020-06-23',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-05-26',
        time: '19:00'
      },
      {
        date: '2020-06-02',
        time: '19:00'
      },
      {
        date: '2020-06-09',
        time: '19:00'
      },
      {
        date: '2020-06-16',
        time: '19:00'
      },
      {
        date: '2020-06-23',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-05-25',
      refund: '2020-05-25',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e012',
    active: 'n',
    name: 'Calgary International Qualifier',
    start: '2020-06-13',
    end: '2020-06-14',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-06-13',
        time: '10:00'
      },
      {
        date: '2020-06-13',
        time: '14:00'
      },
      {
        date: '2020-06-13',
        time: '18:00'
      },
      {
        date: '2020-06-14',
        time: '10:00'
      },
      {
        date: '2020-06-14',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-06-12',
      refund: '2020-06-12',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '50',
        junior: '40',
        senior: '40',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '50',
          cm: '50',
          nm: '50'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e013',
    active: 'y',
    name: 'Bobby Fischer Memorial',
    start: '2020-06-30',
    end: '2020-07-28',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-06-30',
        time: '19:00'
      },
      {
        date: '2020-07-07',
        time: '19:00'
      },
      {
        date: '2020-07-14',
        time: '19:00'
      },
      {
        date: '2020-07-21',
        time: '19:00'
      },
      {
        date: '2020-07-28',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-06-29',
      refund: '2020-06-29',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e014',
    active: 'n',
    name: 'Alberta Over/Under 1800',
    start: '2020-08-17',
    end: '2020-08-18',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Haessel',
          first: 'Dale'
        },
        email: 'dhaessel@hotmail.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Haessel',
          first: 'Dale'
        },
        email: 'dhaessel@hotmail.com'
      }
    ],
    format: {
      type: 'op',
      sections: '',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-08-17',
        time: '10:00'
      },
      {
        date: '2020-08-17',
        time: '14:00'
      },
      {
        date: '2020-08-17',
        time: '18:00'
      },
      {
        date: '2020-08-18',
        time: '10:00'
      },
      {
        date: '2020-08-18',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-08-16',
      refund: '2020-08-16',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '40',
          cm: '40',
          nm: '40'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e015',
    active: 'y',
    name: 'Eric Hansen Classic',
    start: '2020-08-04',
    end: '2020-09-01',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-08-04',
        time: '19:00'
      },
      {
        date: '2020-08-11',
        time: '19:00'
      },
      {
        date: '2020-08-18',
        time: '19:00'
      },
      {
        date: '2020-08-25',
        time: '19:00'
      },
      {
        date: '2020-09-01',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-08-03',
      refund: '2020-08-03',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e016',
    active: 'y',
    name: 'Calgary International IM',
    start: '2020-11-17',
    end: '2020-11-22',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      },
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      }
    ],
    format: {
      type: 'inv',
      sections: 'y',
      players: '6',
      time_control: '40/90+30, G/30+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-11-17',
        time: '19:00'
      },
      {
        date: '2020-11-18',
        time: '11:00'
      },
      {
        date: '2020-11-18',
        time: '17:00'
      },
      {
        date: '2020-11-19',
        time: '11:00'
      },
      {
        date: '2020-11-19',
        time: '17:00'
      },
      {
        date: '2020-11-20',
        time: '11:00'
      },
      {
        date: '2020-11-20',
        time: '17:00'
      },
      {
        date: '2020-11-21',
        time: '11:00'
      },
      {
        date: '2020-11-21',
        time: '17:00'
      },
      {
        date: '2020-11-22',
        time: '11:00'
      }
    ],
    registration: {
      deadline: '2020-11-16',
      refund: '2020-11-16',
      on_site: 'n',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '0',
        senior: '0',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e017',
    active: 'y',
    name: 'Calgary International Open',
    start: '2020-11-19',
    end: '2020-11-21',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      },
      {
        name: {
          last: 'TBA',
          first: ''
        },
        email: ''
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-11-19',
        time: '10:00'
      },
      {
        date: '2020-11-19',
        time: '14:00'
      },
      {
        date: '2020-11-20',
        time: '11:00'
      },
      {
        date: '2020-11-20',
        time: '15:00'
      },
      {
        date: '2020-11-21',
        time: '11:00'
      }
    ],
    registration: {
      deadline: '2020-11-18',
      refund: '2020-11-18',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '50',
        junior: '40',
        senior: '40',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '50',
          cm: '50',
          nm: '50'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: '2020-11-21 blitz event at 17:00'
  },
  {
    id: '2020e018',
    active: 'y',
    name: 'Grand Tour Leg #1',
    start: '2020-09-08',
    end: '2020-10-06',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'n',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-09-08',
        time: '19:00'
      },
      {
        date: '2020-09-15',
        time: '19:00'
      },
      {
        date: '2020-09-22',
        time: '19:00'
      },
      {
        date: '2020-09-29',
        time: '19:00'
      },
      {
        date: '2020-10-06',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-09-07',
      refund: '2020-09-07',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e019',
    active: 'y',
    name: 'Grand Tour Leg #2',
    start: '2020-10-13',
    end: '2020-11-10',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'n',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-10-13',
        time: '19:00'
      },
      {
        date: '2020-10-20',
        time: '19:00'
      },
      {
        date: '2020-10-27',
        time: '19:00'
      },
      {
        date: '2020-11-03',
        time: '19:00'
      },
      {
        date: '2020-11-10',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-10-12',
      refund: '2020-10-12',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e020',
    active: 'y',
    name: 'Southern Alberta Open',
    start: '2020-11-28',
    end: '2020-11-29',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: '',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-11-28',
        time: '10:00'
      },
      {
        date: '2020-11-28',
        time: '14:00'
      },
      {
        date: '2020-11-29',
        time: '18:00'
      },
      {
        date: '2020-11-29',
        time: '10:00'
      },
      {
        date: '2020-11-29',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-11-27',
      refund: '2020-11-27',
      on_site: '10',
      entry_fee: {
        adult: '50',
        junior: '40',
        senior: '40',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '50',
          cm: '50',
          nm: '50'
        }
      }
    },
    memberships: {
      cfc: 'y',
      ccc: 'n'
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e021',
    active: 'y',
    name: 'Grand Tour Leg #3',
    start: '2020-11-17',
    end: '2020-12-15',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'n',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-11-17',
        time: '19:00'
      },
      {
        date: '2020-11-24',
        time: '19:00'
      },
      {
        date: '2020-12-01',
        time: '19:00'
      },
      {
        date: '2020-12-08',
        time: '19:00'
      },
      {
        date: '2020-12-15',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-11-16',
      refund: '2020-11-16',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'y'
      },
      entry_fee: {
        adult: '40',
        junior: '30',
        senior: '30',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e022',
    active: 'y',
    name: 'Tournament Of Legends Blitz',
    start: '2020-04-07',
    end: '2020-04-08',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'inv',
      sections: 'y',
      players: '12',
      time_control: 'G/5+3',
      rated: {
        fide: 'n',
        cfc: 'n'
      }
    },
    schedule: [
      {
        date: '2020-04-07',
        time: '19:00'
      },
      {
        date: '2020-04-07',
        time: '19:15'
      },
      {
        date: '2020-04-07',
        time: '19:30'
      },
      {
        date: '2020-04-07',
        time: '19:45'
      },
      {
        date: '2020-04-07',
        time: '20:00'
      },
      {
        date: '2020-04-07',
        time: '20:15'
      },
      {
        date: '2020-04-07',
        time: '20:30'
      },
      {
        date: '2020-04-07',
        time: '20:45'
      },
      {
        date: '2020-04-07',
        time: '21:00'
      },
      {
        date: '2020-04-07',
        time: '21:15'
      },
      {
        date: '2020-04-07',
        time: '21:30'
      },
      {
        date: '2020-04-08',
        time: '19:00'
      },
      {
        date: '2020-04-08',
        time: '19:15'
      },
      {
        date: '2020-04-08',
        time: '19:30'
      },
      {
        date: '2020-04-08',
        time: '19:45'
      },
      {
        date: '2020-04-08',
        time: '20:00'
      },
      {
        date: '2020-04-08',
        time: '20:15'
      },
      {
        date: '2020-04-08',
        time: '20:30'
      },
      {
        date: '2020-04-08',
        time: '20:45'
      },
      {
        date: '2020-04-08',
        time: '21:00'
      },
      {
        date: '2020-04-08',
        time: '21:15'
      },
      {
        date: '2020-04-08',
        time: '21:30'
      }
    ],
    registration: {
      deadline: '2020-04-06',
      refund: '2020-04-06',
      on_site: 'n',
      memberships: {
        cfc: 'n',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '0',
        senior: '0',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      guaranteed: '',
      entries: ''
    },
    notes: ''
  },
  {
    id: '2020e023',
    active: 'y',
    name: 'Kings vs Princes',
    start: '2020-04-15',
    end: '2020-09-02',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'inv',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'n',
        cfc: 'n'
      }
    },
    schedule: [
      {
        date: '2020-04-15',
        time: '19:00'
      },
      {
        date: '2020-04-16',
        time: '19:00'
      },
      {
        date: '2020-04-22',
        time: '19:00'
      },
      {
        date: '2020-04-29',
        time: '19:00'
      },
      {
        date: '2020-05-06',
        time: '19:00'
      },
      {
        date: '2020-05-13',
        time: '19:00'
      },
      {
        date: '2020-05-20',
        time: '19:00'
      },
      {
        date: '2020-06-03',
        time: '19:00'
      },
      {
        date: '2020-06-10',
        time: '19:00'
      },
      {
        date: '2020-06-17',
        time: '19:00'
      },
      {
        date: '2020-06-24',
        time: '19:00'
      },
      {
        date: '2020-07-01',
        time: '19:00'
      },
      {
        date: '2020-07-08',
        time: '19:00'
      },
      {
        date: '2020-07-15',
        time: '19:00'
      },
      {
        date: '2020-07-22',
        time: '19:00'
      },
      {
        date: '2020-07-29',
        time: '19:00'
      },
      {
        date: '2020-08-05',
        time: '19:00'
      },
      {
        date: '2020-08-12',
        time: '19:00'
      },
      {
        date: '2020-08-19',
        time: '19:00'
      },
      {
        date: '2020-08-26',
        time: '19:00'
      },
      {
        date: '2020-09-02',
        time: '19:00'
      }
    ],
    registration: {
      deadline: '2020-04-14',
      refund: '2020-04-14',
      on_site: 'n',
      memberships: {
        cfc: 'n',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '9',
        senior: '0',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      guaranteed: '',
      entries: ''
    },
    notes: ''
  },
  {
    id: '2020e024',
    active: 'n',
    name: 'Kings vs Princes Summer Classic',
    start: '2020-08-24',
    end: '2020-08-25',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'inv',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'n',
        cfc: 'n'
      }
    },
    schedule: [
      {
        date: '2020-08-24',
        time: '10:00'
      },
      {
        date: '2020-08-24',
        time: '14:00'
      },
      {
        date: '2020-08-24',
        time: '18:00'
      },
      {
        date: '2020-08-25',
        time: '10:00'
      },
      {
        date: '2020-08-25',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-08-23',
      refund: '2020-08-23',
      on_site: 'n',
      memberships: {
        cfc: 'n',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '40',
        senior: '0',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      guaranteed: '',
      entries: ''
    },
    notes: ''
  },
  {
    id: '2020e025',
    active: 'y',
    name: 'Battle Of Alberta',
    start: '2020-09-05',
    end: '2020-09-05',
    location: {
      venue: 'Baymont Inn And Suites',
      address: '4311 - 49 Avenue',
      city: 'Red Deer',
      province: 'AB',
      postal_code: 'T4N 5Y7',
      country: 'CAN',
      phone: '403.346.8841',
      email: ''
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calhgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'tt',
      sections: 'n',
      players: '12',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-09-05',
        time: '11:30'
      },
      {
        date: '2020-09-05',
        time: '15:30'
      }
    ],
    registration: {
      deadline: '2020-09-02',
      refund: '2020-09-02',
      on_site: 'n',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '0',
        senior: '0',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      guaranteed: '',
      entries: ''
    },
    notes: ''
  },
  {
    id: '2020e026',
    active: 'y',
    name: 'Junior Battle Of Alberta',
    start: '2020-09-26',
    end: '2020-09-26',
    location: {
      venue: 'Baymont Inn And Suites',
      address: '4311 - 49 Avenue',
      city: 'Red Deer',
      province: 'AB',
      postal_code: 'T4N 5Y7',
      country: 'CAN',
      phone: '403.346.8841',
      email: ''
    },
    organizer: [
      {
        name: {
          last: 'Tolentino',
          first: 'Angelo'
        },
        email: 'avelangelotolentino@yahoo.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Rekhson',
          first: 'Vlad'
        },
        email: 'vrekhson@yahoo.ca'
      }
    ],
    format: {
      type: 'tt',
      sections: 'n',
      players: '12',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-09-26',
        time: '11:30'
      },
      {
        date: '2020-09-26',
        time: '15:30'
      }
    ],
    registration: {
      deadline: '2020-09-23',
      refund: '2020-09-23',
      on_site: 'n',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '0',
        senior: '0',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '0',
          cm: '0',
          nm: '0'
        }
      }
    },
    prize_fund: {
      guaranteed: '',
      entries: ''
    },
    notes: ''
  },
  {
    id: '2020e027',
    active: 'y',
    name: 'Alberta Open',
    start: '2020-10-10',
    end: '2020-10-12',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-10-10',
        time: '10:00'
      },
      {
        date: '2020-10-10',
        time: '15:00'
      },
      {
        date: '2020-10-11',
        time: '10:00'
      },
      {
        date: '2020-10-11',
        time: '15:00'
      },
      {
        date: '2020-10-12',
        time: '10:00'
      },
      {
        date: '2020-10-12',
        time: '15:00'
      }
    ],
    registration: {
      deadline: '2020-10-09',
      refund: '2020-10-09',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '60',
        junior: '50',
        senior: '50',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '60',
          cm: '60',
          nm: '60'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e028',
    active: 'y',
    name: 'Alberta Seniors Championship',
    start: '2020-05-09',
    end: '2020-05-10',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-05-09',
        time: '10:00'
      },
      {
        date: '2020-05-09',
        time: '14:00'
      },
      {
        date: '2020-05-09',
        time: '18:00'
      },
      {
        date: '2020-05-10',
        time: '10:00'
      },
      {
        date: '2020-05-10',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-05-08',
      refund: '2020-05-08',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '0',
        junior: '0',
        senior: '50',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '50',
          cm: '50',
          nm: '50'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e029',
    active: 'y',
    name: 'Alberta Womens Championship',
    start: '2020-05-09',
    end: '2020-05-10',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/90+30',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-05-09',
        time: '10:00'
      },
      {
        date: '2020-05-09',
        time: '14:00'
      },
      {
        date: '2020-05-09',
        time: '18:00'
      },
      {
        date: '2020-05-10',
        time: '10:00'
      },
      {
        date: '2020-05-10',
        time: '14:00'
      }
    ],
    registration: {
      deadline: '2020-05-08',
      refund: '2020-05-08',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '50',
        junior: '40',
        senior: '40',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '50',
          cm: '50',
          nm: '50'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e030',
    active: 'y',
    name: 'Alberta Rapid Championship',
    start: '2020-03-07',
    end: '2020-03-07',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/15+10',
      rated: {
        fide: 'y',
        cfc: 'y'
      }
    },
    schedule: [
      {
        date: '2020-03-07',
        time: '10:00'
      },
      {
        date: '2020-03-07',
        time: '11:15'
      },
      {
        date: '2020-03-07',
        time: '12:30'
      },
      {
        date: '2020-03-07',
        time: '15:00'
      },
      {
        date: '2020-03-07',
        time: '16:15'
      },
      {
        date: '2020-03-07',
        time: '17:30'
      }
    ],
    registration: {
      deadline: '2020-03-06',
      refund: '2020-03-06',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '30',
        junior: '25',
        senior: '25',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '25',
          cm: '25',
          nm: '25'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  },
  {
    id: '2020e031',
    active: 'y',
    name: 'Alberta Blitz Championship',
    start: '2020-03-08',
    end: '2020-03-08',
    location: {
      venue: 'Calgary Chess Club',
      address: '#274 - 3359 27th Street NE',
      city: 'Calgary',
      province: 'AB',
      postal_code: 'T1Y 5E4',
      country: 'CAN',
      phone: '',
      email: 'info@calgarychess.com'
    },
    organizer: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    tournament_director: [
      {
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }
    ],
    format: {
      type: 'op',
      sections: 'n',
      players: '',
      time_control: 'G/3+2',
      rated: {
        fide: 'n',
        cfc: 'n'
      }
    },
    schedule: [
      {
        date: '2020-03-08',
        time: '10:00'
      },
      {
        date: '2020-03-08',
        time: '10:20'
      },
      {
        date: '2020-03-08',
        time: '10:40'
      },
      {
        date: '2020-03-08',
        time: '11:00'
      },
      {
        date: '2020-03-08',
        time: '11:20'
      },
      {
        date: '2020-03-08',
        time: '11:40'
      },
      {
        date: '2020-03-08',
        time: '12:00'
      },
      {
        date: '2020-03-08',
        time: '12:20'
      },
      {
        date: '2020-03-08',
        time: '12:40'
      },
      {
        date: '2020-03-08',
        time: '13:00'
      },
      {
        date: '2020-03-08',
        time: '13:20'
      },
      {
        date: '2020-03-08',
        time: '13:40'
      },
      {
        date: '2020-03-08',
        time: '15:00'
      },
      {
        date: '2020-03-08',
        time: '15:20'
      },
      {
        date: '2020-03-08',
        time: '15:40'
      },
      {
        date: '2020-03-08',
        time: '16:00'
      },
      {
        date: '2020-03-08',
        time: '16:20'
      },
      {
        date: '2020-03-08',
        time: '16:40'
      }
    ],
    registration: {
      deadline: '2020-03-06',
      refund: '2020-03-06',
      on_site: '10',
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      entry_fee: {
        adult: '30',
        junior: '25',
        senior: '25',
        titled: {
          gm: '0',
          wgm: '0',
          im: '0',
          wim: '0',
          fm: '25',
          cm: '25',
          nm: '25'
        }
      }
    },
    prize_fund: {
      entries: '',
      expenses: ''
    },
    notes: ''
  }
];




module.exports = events;
