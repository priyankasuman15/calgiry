'use strict';


const events =
  [
    {
      id: '2019e001',
      active: 'y',
      name: 'Schleinich Memorial',
      start: '2019-01-04',
      end: '2019-01-06',
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
          fide: 'y',
          cfc: 'y'
        }
      },
      schedule: [
        {
          date: '2019-01-04',
          time: '19:00'
        },
        {
          date: '2019-01-05',
          time: '10:00'
        },
        {
          date: '2019-01-05',
          time: '15:00'
        },
        {
          date: '2019-01-06',
          time: '10:00'
        },
        {
          date: '2019-01-06',
          time: '15:00'
        }
      ],
      registration: {
        deadline: '2019-01-03',
        refund: '2019-01-04',
        on_site: 'n',
        memberships: {
          cfc: 'y',
          ccc: 'n'
        },
        entry_fee: {
          adult: '35',
          junior: '35',
          senior: '35',
          titled: {
            gm: '0',
            wgm: '0',
            im: '0',
            wim: '0',
            fm: '35',
            cm: '35',
            nm: '35'
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
      id: '2019e002',
      active: 'y',
      name: 'Grand Prix Leg #1',
      start: '2019-01-08',
      end: '2019-02-05',
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
          date: '2019-01-08',
          time: '19:00'
        },
        {
          date: '2019-01-15',
          time: '19:00'
        },
        {
          date: '2019-01-22',
          time: '19:00'
        },
        {
          date: '2019-01-29',
          time: '19:00'
        },
        {
          date: '2019-02-05',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-01-07',
        refund: '2019-01-08',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'n'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e003',
      active: 'y',
      name: 'Grand Prix Leg #2',
      start: '2019-02-12',
      end: '2019-03-19',
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
          date: '2019-02-12',
          time: '19:00'
        },
        {
          date: '2019-02-19',
          time: '19:00'
        },
        {
          date: '2019-02-26',
          time: '19:00'
        },
        {
          date: '2019-03-05',
          time: '19:00'
        },
        {
          date: '2019-03-19',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-02-11',
        refund: '2019-02-12',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'n'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e005',
      active: 'y',
      name: 'Steinitz Menchik Classic',
      start: '2019-03-09',
      end: '2019-03-10',
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
          date: '2019-03-09',
          time: '10:00'
        },
        {
          date: '2019-03-09',
          time: '14:00'
        },
        {
          date: '2019-03-09',
          time: '18:00'
        },
        {
          date: '2019-03-10',
          time: '10:00'
        },
        {
          date: '2019-03-10',
          time: '14:00'
        }
      ],
      registration: {
        deadline: '2019-03-08',
        refund: '2019-03-09',
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
      id: '2019e006',
      active: 'y',
      name: 'Grand Prix Leg #3',
      start: '2019-03-26',
      end: '2019-04-16',
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
          date: '2019-03-26',
          time: '19:00'
        },
        {
          date: '2019-03-31',
          time: '14:00'
        },
        {
          date: '2019-04-02',
          time: '19:00'
        },
        {
          date: '2019-04-09',
          time: '19:00'
        },
        {
          date: '2019-04-16',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-03-25',
        refund: '2019-03-26',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'y'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e007',
      active: 'y',
      name: 'Calgary Seniors Championship',
      start: '2019-03-23',
      end: '2019-03-24',
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
          date: '2019-03-23',
          time: '10:00'
        },
        {
          date: '2019-03-23',
          time: '14:00'
        },
        {
          date: '2019-03-23',
          time: '18:00'
        },
        {
          date: '2019-03-24',
          time: '10:00'
        },
        {
          date: '2019-03-24',
          time: '14:00'
        }
      ],
      registration: {
        deadline: '2019-03-22',
        refund: '2019-03-23',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'n'
        },
        entry_fee: {
          adult: '30',
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
        entries: '100',
        expenses: ''
      },
      notes: ''
    },
    {
      id: '2019e008',
      active: 'y',
      name: 'Alberta Closed',
      start: '2019-04-19',
      end: '2019-04-21',
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
          date: '2019-04-19',
          time: '19:00'
        },
        {
          date: '2019-04-20',
          time: '10:00'
        },
        {
          date: '2019-04-20',
          time: '16:00'
        },
        {
          date: '2019-04-21',
          time: '10:00'
        },
        {
          date: '2019-04-21',
          time: '16:00'
        }
      ],
      registration: {
        deadline: '2019-04-18',
        refund: '2019-04-19',
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
      id: '2019e009',
      active: 'y',
      name: 'Alberta Reserves',
      start: '2019-04-20',
      end: '2019-04-21',
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
          date: '2019-04-20',
          time: '10:00'
        },
        {
          date: '2019-04-20',
          time: '14:00'
        },
        {
          date: '2019-04-20',
          time: '18:00'
        },
        {
          date: '2019-04-21',
          time: '10:00'
        },
        {
          date: '2019-04-21',
          time: '14:00'
        }
      ],
      registration: {
        deadline: '2019-04-19',
        refund: '2019-04-20',
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
            fm: '0',
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
      id: '2019e010',
      active: 'y',
      name: 'Grand Prix Leg #4',
      start: '2019-04-23',
      end: '2019-05-21',
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
            last: 'Evans',
            first: 'Blaise'
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
          date: '2019-04-23',
          time: '19:00'
        },
        {
          date: '2019-04-30',
          time: '19:00'
        },
        {
          date: '2019-05-07',
          time: '19:00'
        },
        {
          date: '2019-05-14',
          time: '19:00'
        },
        {
          date: '2019-05-21',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '019-04-22',
        refund: '019-04-23',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'y'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e011',
      active: 'y',
      name: 'Calgary Chess Club Championship',
      start: '2019-06-04',
      end: '2019-07-02',
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
          date: '2019-06-04',
          time: '19:00'
        },
        {
          date: '2019-06-11',
          time: '19:00'
        },
        {
          date: '2019-06-18',
          time: '19:00'
        },
        {
          date: '2019-06-25',
          time: '19:00'
        },
        {
          date: '2019-07-02',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-06-03',
        refund: '2019-06-04',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'y'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e012',
      active: 'y',
      name: 'Calgary International Qualifier',
      start: '2019-06-08',
      end: '2019-06-09',
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
            last: 'Rekhson',
            first: 'Vladislav'
          },
          email: 'vrekhson@yahoo.ca'
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
          date: '2019-06-08',
          time: '10:00'
        },
        {
          date: '2019-06-08',
          time: '14:00'
        },
        {
          date: '2019-06-08',
          time: '18:00'
        },
        {
          date: '2019-06-09',
          time: '10:00'
        },
        {
          date: '2019-06-09',
          time: '14:00'
        }
      ],
      registration: {
        deadline: '2019-06-07',
        refund: '2019-06-08',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'n'
        },
        entry_fee: {
          adult: '35',
          junior: '35',
          senior: '35',
          titled: {
            gm: '35',
            wgm: '35',
            im: '35',
            wim: '35',
            fm: '35',
            cm: '35',
            nm: '35'
          }
        }
      },
      prize_fund: {
        entries: '50',
        expenses: ''
      },
      notes: ''
    },
    {
      id: '2019e013',
      active: 'y',
      name: 'Bobby Fischer Memorial',
      start: '2019-07-09',
      end: '2019-08-06',
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
          date: '2019-07-09',
          time: '19:00'
        },
        {
          date: '2019-07-16',
          time: '19:00'
        },
        {
          date: '2019-07-23',
          time: '19:00'
        },
        {
          date: '2019-07-30',
          time: '19:00'
        },
        {
          date: '2019-08-06',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-07-08',
        refund: '2019-07-09',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'y'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e014',
      active: 'y',
      name: 'Alberta Over/Under 1800',
      start: '2019-08-17',
      end: '2019-08-18',
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
          date: '2019-08-17',
          time: '10:00'
        },
        {
          date: '2019-08-17',
          time: '14:00'
        },
        {
          date: '2019-08-17',
          time: '18:00'
        },
        {
          date: '2019-08-18',
          time: '10:00'
        },
        {
          date: '2019-08-18',
          time: '14:00'
        }
      ],
      registration: {
        deadline: '2019-08-16',
        refund: '2019-08-17',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'n'
        },
        entry_fee: {
          adult: '35',
          junior: '35',
          senior: '35',
          titled: {
            gm: '0',
            wgm: '0',
            im: '0',
            wim: '0',
            fm: '0',
            cm: '35',
            nm: '35'
          }
        }
      },
      prize_fund: {
        entries: '100',
        expenses: ''
      },
      notes: ''
    },
    {
      id: '2019e015',
      active: 'y',
      name: 'Eric Hansen Classic',
      start: '2019-08-13',
      end: '2019-09-10',
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
            last: 'Koneru',
            first: 'Nimai'
          },
          email: 'konerugiridhar@gmail.com'
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
          date: '2019-08-13',
          time: '19:00'
        },
        {
          date: '2019-08-20',
          time: '19:00'
        },
        {
          date: '2019-08-27',
          time: '19:00'
        },
        {
          date: '2019-09-03',
          time: '19:00'
        },
        {
          date: '2019-09-10',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-08-12',
        refund: '2019-08-13',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'y'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e016',
      active: 'y',
      name: 'Calgary International IM',
      start: '2019-07-31',
      end: '2019-08-05',
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
        },
        {
          name: {
            last: 'Eslahpazir',
            first: 'Roham'
          },
          email: 'rohameslahpazir@gmail.com'
        }
      ],
      tournament_director: [
        {
          name: {
            last: 'Rekhson',
            first: 'Vladislav'
          },
          email: 'vrekhson@yahoo.ca'
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
          date: '2019-07-31',
          time: '19:00'
        },
        {
          date: '2019-08-01',
          time: '11:00'
        },
        {
          date: '2019-08-01',
          time: '17:00'
        },
        {
          date: '2019-08-02',
          time: '11:00'
        },
        {
          date: '2019-08-02',
          time: '17:00'
        },
        {
          date: '2019-08-03',
          time: '11:00'
        },
        {
          date: '2019-08-03',
          time: '17:00'
        },
        {
          date: '2019-08-04',
          time: '11:00'
        },
        {
          date: '2019-08-04',
          time: '17:00'
        },
        {
          date: '2019-08-05',
          time: '11:00'
        }
      ],
      registration: {
        deadline: '2019-07-30',
        refund: '2019-07-31',
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
        entries: '100',
        expenses: ''
      },
      notes: ''
    },
    {
      id: '2019e017',
      active: 'y',
      name: 'Calgary International Open',
      start: '2019-08-03',
      end: '2019-08-05',
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
            last: 'Rekhson',
            first: 'Vladislav'
          },
          email: 'vrekhson@yahoo.ca'
        },
        {
          name: {
            last: 'Yam',
            first: 'Alex'
          },
          email: 'backgammer@gmail.com'
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
          date: '2019-08-03',
          time: '10:00'
        },
        {
          date: '2019-08-03',
          time: '14:00'
        },
        {
          date: '2019-08-04',
          time: '11:00'
        },
        {
          date: '2019-08-04',
          time: '15:00'
        },
        {
          date: '2019-08-05',
          time: '11:00'
        }
      ],
      registration: {
        deadline: '2019-08-02',
        refund: '2019-08-03',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'n'
        },
        entry_fee: {
          adult: '40',
          junior: '40',
          senior: '40',
          titled: {
            gm: '40',
            wgm: '40',
            im: '40',
            wim: '40',
            fm: '40',
            cm: '40',
            nm: '40'
          }
        }
      },
      prize_fund: {
        entries: '50',
        expenses: ''
      },
      notes: '2019-08-05 blitz event at 17:00'
    },
    {
      id: '2019e018',
      active: 'y',
      name: 'Grand Tour Leg #1',
      start: '2019-09-17',
      end: '2019-10-15',
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
          date: '2019-09-17',
          time: '19:00'
        },
        {
          date: '2019-09-24',
          time: '19:00'
        },
        {
          date: '2019-10-01',
          time: '19:00'
        },
        {
          date: '2019-10-08',
          time: '19:00'
        },
        {
          date: '2019-10-15',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-09-16',
        refund: '2019-09-17',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'y'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e019',
      active: 'y',
      name: 'Grand Tour Leg #2',
      start: '2019-10-22',
      end: '2019-11-19',
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
          date: '2019-10-22',
          time: '19:00'
        },
        {
          date: '2019-10-29',
          time: '19:00'
        },
        {
          date: '2019-11-05',
          time: '19:00'
        },
        {
          date: '2019-11-12',
          time: '19:00'
        },
        {
          date: '2019-11-19',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-10-22',
        refund: '2019-10-23',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'n'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e020',
      active: 'y',
      name: 'Southern Alberta Open',
      start: '2019-11-23',
      end: '2019-11-24',
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
          date: '2019-11-23',
          time: '10:00'
        },
        {
          date: '2019-11-23',
          time: '14:00'
        },
        {
          date: '2019-11-23',
          time: '18:00'
        },
        {
          date: '2019-11-24',
          time: '10:00'
        },
        {
          date: '2019-11-24',
          time: '14:00'
        }
      ],
      registration: {
        deadline: '2019-11-22',
        refund: '2019-11-23',
        on_site: '10',
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
          titled: {
            gm: '0',
            wgm: '0',
            im: '0',
            wim: '0',
            fm: '0',
            cm: '30',
            nm: '30'
          }
        }
      },
      memberships: {
        cfc: 'y',
        ccc: 'n'
      },
      prize_fund: {
        entries: '100',
        expenses: ''
      },
      notes: ''
    },
    {
      id: '2019e021',
      active: 'y',
      name: 'Grand Tour Leg #3',
      start: '2019-11-26',
      end: '2019-12-18',
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
          date: '2019-11-26',
          time: '19:00'
        },
        {
          date: '2019-12-03',
          time: '19:00'
        },
        {
          date: '2019-12-10',
          time: '19:00'
        },
        {
          date: '2019-12-17',
          time: '19:00'
        },
        {
          date: '2019-12-18',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-11-25',
        refund: '2019-11-26',
        on_site: '10',
        memberships: {
          cfc: 'y',
          ccc: 'y'
        },
        entry_fee: {
          adult: '40',
          junior: '35',
          senior: '35',
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
      id: '2019e022',
      active: 'y',
      name: 'Tournament Of Legends Blitz',
      start: '2019-03-12',
      end: '2019-03-14',
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
          date: '2019-03-12',
          time: '19:00'
        },
        {
          date: '2019-03-12',
          time: '19:15'
        },
        {
          date: '2019-03-12',
          time: '19:30'
        },
        {
          date: '2019-03-12',
          time: '19:45'
        },
        {
          date: '2019-03-12',
          time: '20:00'
        },
        {
          date: '2019-03-12',
          time: '20:15'
        },
        {
          date: '2019-03-12',
          time: '20:30'
        },
        {
          date: '2019-03-12',
          time: '20:45'
        },
        {
          date: '2019-03-12',
          time: '21:00'
        },
        {
          date: '2019-03-12',
          time: '21:15'
        },
        {
          date: '2019-03-12',
          time: '21:30'
        },
        {
          date: '2019-03-14',
          time: '19:00'
        },
        {
          date: '2019-03-14',
          time: '19:15'
        },
        {
          date: '2019-03-14',
          time: '19:30'
        },
        {
          date: '2019-03-14',
          time: '19:45'
        },
        {
          date: '2019-03-14',
          time: '20:00'
        },
        {
          date: '2019-03-14',
          time: '20:15'
        },
        {
          date: '2019-03-14',
          time: '20:30'
        },
        {
          date: '2019-03-14',
          time: '20:45'
        },
        {
          date: '2019-03-14',
          time: '21:00'
        },
        {
          date: '2019-03-14',
          time: '21:15'
        },
        {
          date: '2019-03-14',
          time: '21:30'
        }
      ],
      registration: {
        deadline: '2019-03-11',
        refund: '2019-03-12',
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
      id: '2019e023',
      active: 'y',
      name: 'Kings vs Princes',
      start: '2019-04-09',
      end: '2019-09-04',
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
          date: '2019-04-09',
          time: '19:00'
        },
        {
          date: '2019-04-10',
          time: '19:00'
        },
        {
          date: '2019-04-17',
          time: '19:00'
        },
        {
          date: '2019-04-24',
          time: '19:00'
        },
        {
          date: '2019-05-01',
          time: '19:00'
        },
        {
          date: '2019-05-08',
          time: '19:00'
        },
        {
          date: '2019-05-15',
          time: '19:00'
        },
        {
          date: '2019-05-22',
          time: '19:00'
        },
        {
          date: '2019-05-29',
          time: '19:00'
        },
        {
          date: '2019-06-12',
          time: '19:00'
        },
        {
          date: '2019-06-19',
          time: '19:00'
        },
        {
          date: '2019-06-26',
          time: '19:00'
        },
        {
          date: '2019-07-03',
          time: '19:00'
        },
        {
          date: '2019-07-24',
          time: '19:00'
        },
        {
          date: '2019-07-31',
          time: '19:00'
        },
        {
          date: '2019-08-07',
          time: '19:00'
        },
        {
          date: '2019-08-14',
          time: '19:00'
        },
        {
          date: '2019-08-21',
          time: '19:00'
        },
        {
          date: '2019-08-28',
          time: '19:00'
        },
        {
          date: '2019-09-04',
          time: '19:00'
        }
      ],
      registration: {
        deadline: '2019-04-08',
        refund: '2019-04-09',
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
      id: '2019e025',
      active: 'y',
      name: 'Battle Of Alberta',
      start: '2019-09-07',
      end: '2019-09-07',
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
      organizer: [{
        name: {
          last: 'Malek',
          first: 'Omid'
        },
        email: 'omid.malek87@gmail.com'
      }],
      tournament_director: [{
        name: {
          last: 'Sklenka',
          first: 'Steve'
        },
        email: 'organizer@calgarychess.com'
      }],
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
          date: '2019-09-07',
          time: '11:30'
        },
        {
          date: '2019-09-07',
          time: '15:30'
        }
      ],
      registration: {
        deadline: '2019-09-04',
        refund: '2019-09-04',
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
      id: '2019e026',
      active: 'y',
      name: 'Junior Battle Of Alberta',
      start: '2019-09-28',
      end: '2019-09-28',
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
      organizer: [{
        name: {
          last: 'Tolentino',
          first: 'Angelo'
        },
        email: 'avelangelotolentino@yahoo.com'
      }],
      tournament_director: [{
        name: {
          last: 'Rekhson',
          first: 'Vlad'
        },
        email: 'vrekhson@yahoo.ca'
      }],
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
          date: '2019-09-28',
          time: '11:30'
        },
        {
          date: '2019-09-28',
          time: '15:30'
        }
      ],
      registration: {
        deadline: '2019-09-25',
        refund: '2019-09-25',
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
    }
  ];




module.exports = events;
