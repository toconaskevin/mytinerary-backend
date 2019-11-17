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
        var hashtag = req.body.hashtag;

        const newItinerary = new Itinerary({
          author: author,
          rating: rating,
          duration: duration,
          cost: cost,
          hashtag: hashtag
        });
    
        await newItinerary.save()
        .catch(error => res.json(error));

        res.json({"response": "SAVED"});
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
        var hashtag = req.body.hashtag;

        await Itinerary.findOneAndUpdate(
            {_id: id},
            {
              author: author,
              rating: rating,
              duration: duration,
              cost: cost,
              hashtag: hashtag
            })
        .catch(error => res.json(error));
        
        res.json({"response": "UPDATED"});
    }
}

module.exports = itineraryController;