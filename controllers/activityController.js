const Activity = require('../models/activityModel');

const activityController = {
    getActivitiesByItineraryId: async (req, res) => {
        const itineraryId = req.params.itineraryId; 
        const activities = await Activity.find({itineraryId: itineraryId})
        .catch(error => res.json(error));

        res.json({"activities": activities});
    }
}

module.exports = activityController;