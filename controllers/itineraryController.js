const Itinerary = require('../models/itineraryModel');

const itineraryController = {
    getItineraries: async (req, res) => {
        const itineraries = await Itinerary.find()
        .catch(error => res.json(error))

        res.json({"itineraries": itineraries})
    },
    postItinerary: async (req, res) => {
        var author = req.body.author;
        var rating = req.body.rating;
        var duration = req.body.duration;
        var cost = req.body.cost;
        var hashtags = req.body.hashtags;
	    var cityId = req.body.cityId;

        const newItinerary = new Itinerary({
          author: author,
          rating: rating,
          duration: duration,
          cost: cost,
          hashtags: hashtags,
	      cityId: cityId
        });
    
        await newItinerary.save()
        .catch(error => res.json(error));

        res.json({"response": "SAVED"});
    },
    findItinerariesByCityId: async (req, res) => {
        var cityId = req.params.cityId;
        const itineraries = await Itinerary.find({cityId: cityId})
        .catch(error => res.json(error));

        res.json({"itineraries": itineraries})
    },
    deleteItinerary: async (req, res) => {
        var id = req.params.id;
        await Itinerary.findOneAndDelete({_id: id})
        .catch(error => res.json(error));

        res.json({"response": "DELETED"});
    },
    putItinerary: async (req, res) => {
        var id = req.params.id;
        var author = req.body.author;
        var rating = req.body.rating;
        var duration = req.body.duration;
        var cost = req.body.cost;
        var hashtags = req.body.hashtags;
	    var cityId = req.body.cityId;

        await Itinerary.findOneAndUpdate(
            {_id: id},
            {
              author: author,
              rating: rating,
              duration: duration,
              cost: cost,
              hashtags: hashtags,
	          cityId: cityId
            })
        .catch(error => res.json(error));
        
        res.json({"response": "UPDATED"});
    }
}

module.exports = itineraryController;
