const express = require('express');
const router = express.Router();

const activityController = require('../controllers/activityController');

router.route('/activities/:itineraryId')
.get(activityController.getActivitiesByItineraryId)

module.exports = router;