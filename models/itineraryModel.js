const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    author: {type: String, required: true},
    rating: {type: Number, required: true},
    duration: {type: Number, required: true},
    cost: {type: Number, required: true},
    hashtags: [{type: Array, required: false}],
    cityId: {type: String, required: true}
});

const Itinerary = mongoose.model('itineraries', itinerarySchema);

module.exports = Itinerary;
