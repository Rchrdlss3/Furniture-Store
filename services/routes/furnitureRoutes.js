const express = require('express');
const router = express.Router();
const costcoController = require('../controllers/costcoController');

router.get('/get',costcoController.getFurniture)

module.exports = router