const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    details: [{title: {type: String, require: true}, activityIm: {type: String, require: true}}],
    comments: [{type: String, require: false}],
    itineraryId: {type: String, require: true}
})

const Activity = mongoose.model('activities', activitySchema);

module.exports = Activity;