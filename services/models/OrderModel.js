const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    orderID: {type: String, required: 'true'},
    customerEmail: {type: String,required:'true'},
    items: [{type: String }],
    pickUp: {},
    dropOff: {},
})

module.exports = mongoose.model('OrderSchema',OrderSchema)