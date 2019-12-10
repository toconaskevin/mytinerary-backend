const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.route('/users/login')
.post(userController.getUser)

router.route('/users/register')
.post(userController.addUser)

module.exports = router;