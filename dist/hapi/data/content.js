'use strict';


const content =
  [
    {
      archive: 'a-20190112',
      date: '2019-01-12',
      category: 'reports',
      title: '2018 World Seniors Championship',
      author: 'Haessel, Dale',
      pgn: ['a20190112.pgn'],
      img: ['a20190112.jpg'],
      tags: ['report', 'international', 'senior', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190211',
      date: '2019-02-11',
      category: 'reports',
      title: '2018 Banff Open Armageddon Playoff',
      author: 'Findlay, Ian',
      pgn: ['a20190211.pgn'],
      img: ['a20190211.jpg'],
      tags: ['report', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190212',
      date: '2019-03-20',
      category: 'reports',
      title: 'Grand Prix Leg #2',
      author: 'Sklenka, Steve',
      pgn: ['a20190212.pgn'],
      img: ['a20190212.jpg'],
      tags: ['report', 'ccc', 'grandprix', 'pgn', 'photos']
    },

    {
      archive: 'a-20190213',
      date: '2019-02-13',
      category: 'news',
      title: 'The Calgary Chess Club Players',
      author: 'Evans, Blaise',
      pgn: [],
      img: [],
      tags: ['news', 'ccc']
    },

    {
      archive: 'a-20190301',
      date: '2019-03-01',
      category: 'articles',
      title: 'Attacking the Scheveningen',
      author: 'Neven, Knut',
      pgn: ['a20190301.pgn'],
      img: [],
      tags: ['article', 'openings', 'tactics', 'pgn', 'annotated']
    },

    {
      archive: 'a-20190304',
      date: '2019-03-04',
      category: 'columns',
      title: 'Early History 1930 to 1971',
      author: 'Brebrich, Branimir',
      pgn: ['a20190304.pgn'],
      img: ['a20190304.jpg'],
      tags: ['column', 'history', 'ccc', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190307',
      date: '2019-03-07',
      category: 'news',
      title: 'Welcome Players, Enthusiasts and Chess Friends',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['news', 'ccc']
    },

    {
      archive: 'a-20190309',
      date: '2019-03-13',
      category: 'reports',
      title: 'Steinitz Menchik Classic',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['report', 'ccc', 'photos']
    },

    {
      archive: 'a-20190312',
      date: '2019-03-15',
      category: 'reports',
      title: 'Tournament Of Legends Blitz',
      author: 'Neven, Knut',
      pgn: ['a20190312.pgn'],
      img: ['a20190312.jpg'],
      tags: ['report', 'ccc', 'senior', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190323',
      date: '2019-03-25',
      category: 'reports',
      title: 'Calgary Seniors Championship',
      author: 'Sklenka, Steve',
      pgn: ['a20190323.pgn'],
      img: [],
      tags: ['report', 'ccc', 'senior', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190326',
      date: '2019-04-16',
      category: 'reports',
      title: 'Grand Prix Leg #3',
      author: 'Sklenka, Steve',
      pgn: ['a20190326.pgn'],
      img: [],
      tags: ['report', 'ccc', 'grandprix', 'pgn', 'photos']
    },

    {
      archive: 'a-20190409',
      date: '2019-07-03',
      category: 'reports',
      title: 'Kings vs Princes',
      author: 'Sklenka, Steve',
      pgn: ['a20190409a.pgn', 'a20190409b.pgn'],
      img: ['a20190409.jpg'],
      tags: ['report', 'ccc', 'junior', 'senior', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190419',
      date: '2019-04-21',
      category: 'reports',
      title: 'Alberta Closed',
      author: 'Sklenka, Steve',
      pgn: ['a20190419a.pgn', 'a20190419b.pgn', 'a20190419c.pgn'],
      img: [],
      tags: ['report', 'ccc', 'xtable', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190420',
      date: '2019-04-22',
      category: 'reports',
      title: 'Alberta Reserves',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['report', 'ccc', 'photos']
    },

    {
      archive: 'a-20190423',
      date: '2019-05-21',
      category: 'reports',
      title: 'Grand Prix Leg #4',
      author: 'Sklenka, Steve',
      pgn: ['a20190423.pgn'],
      img: [],
      tags: ['report', 'ccc', 'grandprix', 'pgn', 'photos']
    },

    {
      archive: 'a-20190514',
      date: '2019-05-14',
      category: 'columns',
      title: 'Diary of a Woodpusher - Chapter 1 Pins and Kisses',
      author: 'Perron, Sean',
      pgn: ['a20190514a.pgn', 'a20190514b.pgn'],
      img: ['a20190514.jpg'],
      tags: ['column', 'tactics', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190520',
      date: '2019-05-20',
      category: 'reports',
      title: 'Canadian Chess Challenge',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['report', 'canada', 'junior', 'photos']
    },

    {
      archive: 'a-20190604',
      date: '2019-07-02',
      category: 'reports',
      title: 'Calgary Chess Club Championship',
      author: 'Yam, Alex',
      pgn: ['a20190604.pgn'],
      img: [],
      tags: ['report', 'ccc', 'pgn', 'photos']
    },

    {
      archive: 'a-20190608',
      date: '2019-06-17',
      category: 'reports',
      title: 'Calgary International Qualifier',
      author: 'Sklenka, Steve',
      pgn: ['a20190608.pgn'],
      img: [],
      tags: ['report', 'ccc', 'pgn', 'photos']
    },

    {
      archive: 'a-20190616',
      date: '2019-06-16',
      category: 'news',
      title: 'National Arbiter Seminar',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['news', 'ccc']
    },

    {
      archive: 'a-20190618',
      date: '2019-06-23',
      category: 'reports',
      title: 'Edmonton International GM',
      author: 'Sklenka, Steve',
      pgn: ['a20190618a.pgn', 'a20190618b.pgn', 'a20190618c.pgn'],
      img: [],
      tags: ['report', 'ecc', 'international', 'xtable', 'pgn', 'annotated']
    },

    {
      archive: 'a-20190707',
      date: '2019-07-20',
      category: 'reports',
      title: 'Canadian Youth Championship',
      author: 'Chandra, Vikas',
      pgn: ['20190707.pgn'],
      img: [],
      tags: ['report', 'canada', 'junior', 'pgn', 'annotated']
    },

    {
      archive: 'a-20190709',
      date: '2019-08-07',
      category: 'reports',
      title: 'Bobby Fischer Memorial',
      author: 'Collins, Jacob',
      pgn: ['20190709.pgn'],
      img: [],
      tags: ['report', 'ccc', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190731',
      date: '2019-08-01',
      category: 'reports',
      title: 'Calgary International IM',
      author: 'Sklenka, Steve',
      pgn: ['20190731.pgn'],
      img: [],
      tags: ['report', 'ccc', 'international', 'xtable', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190802',
      date: '2019-08-10',
      category: 'reports',
      title: 'Canadian Seniors Championship',
      author: 'Findlay, Ian',
      pgn: ['20190802.pgn'],
      img: ['20190802.jpg'],
      tags: ['report', 'canada', 'senior', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190803',
      date: '2019-08-05',
      category: 'reports',
      title: 'Calgary International Open',
      author: 'Yam, Alex',
      pgn: ['20190731.pgn'],
      img: [],
      tags: ['report', 'ccc', 'pgn', 'photos']
    },

    {
      archive: 'a-20190813',
      date: '2019-08-13',
      category: 'report',
      title: 'Eric Hansen Classic',
      author: 'Sklenka, Steve',
      pgn: ['a20190813.pgn'],
      img: [],
      tags: ['report', 'ccc', 'pgn', 'photos']
    },

    {
      archive: 'a-20190814',
      date: '2019-08-14',
      category: 'columns',
      title: 'Diary of a Woodpusher - Chapter 2 Pawn Song',
      author: 'Perron, Sean',
      pgn: ['a20190814.pgn'],
      img: ['a20190514.jpg'],
      tags: ['column', 'strategy', 'endgame', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190817',
      date: '2019-08-22',
      category: 'report',
      title: 'Alberta Over/Under 1800',
      author: 'Sklenka, Steve',
      pgn: ['a20190817.pgn'],
      img: [],
      tags: ['report', 'ccc', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190903',
      date: '2019-09-03',
      category: 'news',
      title: 'Annual General Meeting',
      author: 'Campbell, Gordon',
      pgn: [],
      img: [],
      tags: ['news', 'ccc']
    },

    {
      archive: 'a-20190910',
      date: '2019-09-10',
      category: 'report',
      title: 'Chicago Illinois Open',
      author: 'Findlay, Ian',
      pgn: ['a20190910.pgn'],
      img: [],
      tags: ['report', 'international', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190911',
      date: '2019-09-11',
      category: 'report',
      title: 'Battle of Alberta',
      author: 'Sklenka, Steve',
      pgn: ['a20190911.pgn'],
      img: ['a20190911.jpg'],
      tags: ['report', 'ccc', 'ecc', 'pgn', 'photos']
    },

    {
      archive: 'a-20190912',
      date: '2019-09-12',
      category: 'news',
      title: 'From Amateur to Master',
      author: 'Sklenka, Steve',
      pgn: ['a20190912.pgn'],
      img: ['a20190912.jpg'],
      tags: ['news', 'ccc', 'classes', 'photos']
    },

    {
      archive: 'a-20190918',
      date: '2019-09-18',
      category: 'report',
      title: 'Grand Tour Leg #1',
      author: 'Sklenka, Steve',
      pgn: ['a20190918.pgn'],
      img: [],
      tags: ['report', 'ccc', 'grandtour', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20190925',
      date: '2019-09-25',
      category: 'news',
      title: 'Calgary Chess Club Annual General Meeting Results',
      author: 'Sklenka, Steve',
      pgn: [],
      img: ['a20190925.jpg'],
      tags: ['news', 'ccc', 'photos']
    },

    {
      archive: 'a-20190928',
      date: '2019-10-12',
      category: 'report',
      title: 'Junior Battle of Alberta',
      author: 'Sklenka, Steve',
      pgn: ['a20190928.pgn'],
      img: [],
      tags: ['report', 'ccc', 'ecc', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20191014',
      date: '2019-10-14',
      category: 'news',
      title: 'Calgary Chess Club Christmas Party',
      author: 'Sklenka, Steve',
      pgn: [],
      img: ['a20191014.jpg'],
      tags: ['news', 'ccc', 'photos']
    },

    {
      archive: 'a-20191022',
      date: '2019-11-24',
      category: 'report',
      title: 'Grand Tour Leg #2',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['report', 'ccc', 'grandtour', 'photos']
    },

    {
      archive: 'a-20191111',
      date: '2019-11-19',
      category: 'reports',
      title: 'Banff Open',
      author: 'Findlay, Ian',
      pgn: ['a20191111a.pgn', 'a20191111b.pgn'],
      img: ['a20191111a.jpg', 'a20191111b.jpg'],
      tags: ['report', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20191123',
      date: '2019-11-25',
      category: 'report',
      title: 'Southern Alberta Open',
      author: 'Sklenka, Steve',
      pgn: ['a20911123.pgn'],
      img: [],
      tags: ['report', 'ccc', 'pgn', 'photos']
    },

    {
      archive: 'a-20191126',
      date: '2019-11-30',
      category: 'report',
      title: 'Grand Tour Leg #3',
      author: 'Sklenka, Steve',
      pgn: ['a20191126.pgn'],
      img: [],
      tags: ['report', 'ccc', 'grandtour', 'pgn', 'photos']
    },

    {
      archive: 'a-20191214',
      date: '2019-12-21',
      category: 'report',
      title: 'Edmonton WBX',
      author: 'Srinivasan, Hemant',
      pgn: ['a20191214.pgn'],
      img: [],
      tags: ['report', 'pgn', 'annotated']
    },

    {
      archive: 'a-20200103',
      date: '2020-01-10',
      category: 'report',
      title: 'Schleinich Memorial',
      author: 'Sklenka, Steve',
      pgn: ['a20200103.pgn'],
      img: [],
      tags: ['report', 'ccc', 'pgn', 'annotated', 'photos']
    },

    {
      archive: 'a-20200107',
      date: '2020-01-30',
      category: 'reports',
      title: 'Grand Prix Leg #1',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['report', 'ccc', 'grandprix', 'pgn', 'photos']
    },

    {
      archive: 'a-20200202',
      date: '2020-02-02',
      category: 'news',
      title: 'Historical 1954 Chess Set Returns Home',
      author: 'Slenka, Steve',
      pgn: [],
      img: ['a20200202a.jpg', 'a20200202b.jpg'],
      tags: ['news', 'ccc', 'history', 'photos']
    },

    {
      archive: 'a-20200208',
      date: '2020-02-08',
      category: 'news',
      title: 'Chess Library Donation Month',
      author: 'Slenka, Steve',
      pgn: [],
      img: ['a20200208.jpg'],
      tags: ['news', 'ccc', 'photos']
    },

    {
      archive: 'a-20200211',
      date: '2020-02-12',
      category: 'reports',
      title: 'Grand Prix Leg #2',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['report', 'ccc', 'grandprix']
    },

    {
      archive: 'a-20200218',
      date: '2020-02-18',
      category: 'news',
      title: 'Casino Fundraiser',
      author: 'Slenka, Steve',
      pgn: [],
      img: [],
      tags: ['news', 'ccc']
    },

    {
      archive: 'a-20200410',
      date: '2020-02-28',
      category: 'reports',
      title: 'Steinitz Menchik Classic',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['report', 'ccc', 'photos']
    },

    {
      archive: 'a-20200307',
      date: '2020-03-08',
      category: 'reports',
      title: 'Alberta Rapid Championship',
      author: 'Sklenka, Steve',
      pgn: [],
      img: [],
      tags: ['report', 'ccc']
    },

    {
      archive: 'a-20200308',
      date: '2020-03-09',
      category: 'reports',
      title: 'Alberta Blitz Championship',
      author: 'Sklenka, Steve',
      pgn: [],
      img: ['a2020e031.jpg'],
      tags: ['report', 'ccc', 'photos']
    },

    {
      archive: 'a-20200319',
      date: '2020-03-19',
      category: 'news',
      title: 'COVID-19',
      author: 'Slenka, Steve',
      pgn: [],
      img: [],
      tags: ['news', 'ccc']
    }
  ];




module.exports = content;
