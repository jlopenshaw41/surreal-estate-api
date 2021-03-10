const mongoose = require('mongoose');

const PropertyListingSchema = new mongoose.Schema({
  title: { type: String, require: true },
  image: { type: String, require: true},
  type: { type: String, require: true },
  bedrooms: { type: String, require: true },
  bathrooms: { type: String, require: true },
  price: { type: Number, require: true },
  region: { type: String, require: true },
  email: { type: String, require: true },
});

const PropertyListingModel = mongoose.model('PropertyListing', PropertyListingSchema);

module.exports = PropertyListingModel;
