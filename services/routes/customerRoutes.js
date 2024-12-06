const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')

router.post('/create',customerController.createUser)
router.get('/get',customerController.getUser)
module.exports = router