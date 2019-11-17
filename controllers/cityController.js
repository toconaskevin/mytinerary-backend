const City = require('../models/cityModel');

const cityController = {
    getCities: async (req, res) => {
        const cities = await City.find()
        .catch(error => res.json(error))

        res.json({"cities": cities})
    },
    postCity: async (req, res) => {
        var name = req.body.name;
        var country = req.body.country;
        var img = req.body.img;

        const newCity = new City({
            name: name,
            country: country,
            img: img
        });
    
        await newCity.save()
        .catch(error => res.json(error));

        res.json({"response": "SAVED"});
    },
    deleteCity: async (req, res) => {
        var id = req.params.id;
        await City.findOneAndDelete({_id: id})
        .catch(error => res.json(error));

        res.json({"response": "DELETED"});
    },
    putCity: async (req, res) => {
        var id = req.params.id;
        var name = req.body.name;
        var country = req.body.country;
        var img = req.body.img;

        await City.findOneAndUpdate(
            {_id: id},
            {name: name, country: country, img: img})
        .catch(error => res.json(error));
        
        res.json({"response": "UPDATED"});
    }
}

module.exports = cityController;