const express = require('express');
const router = express.Router();

const cityController = require('../controllers/cityController');

router.route('/cities')
.get(cityController.getCities)
.post(cityController.postCity)

router.route('/cities/:id')
.delete(cityController.deleteCity)
.put(cityController.putCity)

module.exports = router;