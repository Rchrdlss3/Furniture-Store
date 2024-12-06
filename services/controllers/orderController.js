const { createOrderID } = require('../helpers/customerHelper');
const orderSchema = require('../models/OrderModel');
const FurnitureSchema = require('../models/FurnitureModel');

module.exports = {
    createCart: async(req,res) => {
        const cart = req.body.items; 
        try {
            const items = await Promise.all(cart.map(item => {
                return FurnitureSchema.findOne({itemID: item}).then((result,error) => {return result})
            }))
            res.status(200).send(items)
        } catch (e) {
            res.status(500).send(e)
        }
    },
    createOrder: async(req,res) => {
        const body = req.body
        console.log(body)
        try {
            const createdOrderID = createOrderID(body.customerEmail);
            // orderSchema.collection.insertMany(body)
            orderSchema.create({
                orderID: createdOrderID,
                customerEmail: body.customerEmail,
                items: body.items,
                pickUp: body.pickUp,
                dropOff: body.dropOff,
            }).then((orderCreated) => {if (orderCreated) {res.status(201).send({orderID: orderCreated.orderID})}})
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    getOrders: async(req,res) => {
        const email = req.query.email
        try {
            orderSchema.find({customerEmail: email}).then((result,error) => {
                res.status(200).send(result)
            })
        } catch (e) {
            res.status(500).send(e)
        }
    }
}