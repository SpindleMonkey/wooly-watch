let mongoose = require('mongoose'),
Schema = mongoose.Schema;

let FestivalSchema = new Schema({
  name: String,
  aliases: [String],
  location: String,
  address: String,
  state: String,
  region: String,
  when: String,
  url: String,
  workshops: Boolean,
  ravelryGroup: String,   // TODO: not implemented
  nearestAirport: String, // TODO: not implemented
  animalShows: [String],  // TODO: not implemented
});

let Festival = mongoose.model('Festival', FestivalSchema);

module.exports = Festival;
