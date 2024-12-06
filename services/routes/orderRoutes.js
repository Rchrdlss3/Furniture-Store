const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/get',orderController.getOrders)
router.post('/getCart',orderController.createCart)
router.post('/create',orderController.createOrder)

module.exports = router