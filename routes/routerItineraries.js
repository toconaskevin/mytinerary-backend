const express = require('express');
const router = express.Router();

const itineraryController = require('../controllers/itineraryController');

router.route('/itineraries')
.get(itineraryController.getItineraries)
.post(itineraryController.postItinerary)

router.route('/itineraries/:id')
.delete(itineraryController.deleteItinerary)
.put(itineraryController.putItinerary)

module.exports = router;