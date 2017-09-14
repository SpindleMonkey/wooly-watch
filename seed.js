// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

let db = require('./src/models');


let festivalList = [ 
{
  name: 'Maryland Sheep & Wool Festival',
  aliases: 'Maryland, MDS&W',
  location: 'Howard County Fairgrounds',
  address: '2210 Fairgrounds Road, West Friendship, MD 21794-9604 USA',
  state: 'MD',
  region: 'New England (Northeast)',
  when: 'May, first weekend',
  url: 'http://sheepandwool.org/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Estes Park Wool Market & Fiber Festival',
  aliases: 'Estes, Estes Park, Wool Market',
  location: 'Estes Park Events Complex',
  address: '1125 Rooftop Way, Estes Park, Colorado, 80517',
  state: 'CO',
  region: 'Mountain West (West)',
  when: 'June',
  url: 'http://www.visitestespark.com/events-calendar/special-events/wool-market/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'New York State Sheep & Wool Festival',
  aliases: 'Rhinebeck',
  location: 'The Dutchess County Fairgrounds',
  address: '6636 U.S. 9, Rhinebeck, NY 12572',
  state: 'NY',
  region: 'Middle Atlantic (Northeast)',
  when: 'October',
  url: 'http://sheepandwool.com/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Black Sheep Gathering',
  aliases: 'Black Sheep, BSG',
  location: 'Lane Events Center at the Fairgrounds',
  address: '796 W. 13th Avenue, Eugene, OR 97402',
  state: 'OR',
  region: 'Pacific West (West)',
  when: 'June',
  url: 'http://www.blacksheepgathering.org/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Oregon Flock & Fiber Festival',
  aliases: 'OFFF',
  location: 'Clackamas County Event Center',
  address: '694 NE 4th Avenue, Canby, OR 97013',
  state: 'OR',
  region: 'Pacific West (West)',
  when: 'September',
  url: 'http://flockandfiberfestival.com/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Massachusetts Sheep & Woolcraft Fair',
  aliases: '',
  location: 'Cummington Fairgrounds',
  address: '97 Fairgrounds Road, Cummington, Massachusetts 01026',
  state: 'MA',
  region: 'New England (Northeast)',
  when: 'May',
  url: 'http://www.masheepwool.org/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Maine Fiber Frolic',
  aliases: '',
  location: 'Windsor Fairgrounds',
  address: '82 Ridge Road, Windsor, Maine',
  state: 'ME',
  region: 'New England (Northeast)',
  when: 'June',
  url: 'http://www.fiberfrolic.com/',
  workshops: false,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Iowa Sheep & Wool Festival',
  aliases: '',
  location: 'Hansen Agriculture Student Learning Center',
  address: '2508 Mortensen Road, Ames, IA 50011',
  state: 'IA',
  region: 'West North Central (Midwest)',
  when: 'June',
  url: 'http://www.iowasheepandwoolfestival.com/index.html',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Michigan Fiber Festival',
  aliases: '',
  location: 'Allegan County Fairgrounds',
  address: '150 Douglas St, Allegan, MI 49010',
  state: 'MI',
  region: 'East North Central (Midwest)',
  when: 'August',
  url: 'https://www.michiganfiberfestival.info/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Taos Wool Festival',
  aliases: 'Taos',
  location: 'Kit Carson Park',
  address: '211 Paseo Del Pueblo Norte, Taos, New Mexico',
  state: 'NM',
  region: 'Mountain West (West)',
  when: 'October, first full weekend',
  url: 'http://taos.org/events/taos-wool-festival/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
{
  name: 'Shepherd\'s Harvest Sheep & Wool Festival',
  aliases: '',
  location: 'Washington County Fairgrounds',
  address: '12300 N. 40th St., Lake Elmo, MN 55042',
  state: 'MN',
  region: 'West North Central (Midwest)',
  when: 'May',
  url: 'http://shepherdsharvestfestival.org/',
  workshops: true,
  ravelryGroup: '',
  nearestAirport: '',
  animalShows: '',
},
];


// remove all documents from the current Breed collection 
// and repopulate with the list of breeds in breedList
db.Festival.remove({}, function(err, festivals){
  console.log('after Festival.remove');
  if (err) { return console.log('ERROR::' + err); }
  festivalList.forEach(function(festivalName) {
    console.log('inside forEach');

    db.Festival.create(festivalName, function(err, theFestival) {
       if (err) { return console.log('ERROR::' + err); }
       console.log('saved ' + theFestival);
     });
  });
});
