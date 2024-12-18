const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    address: {state: {type: String}, city: {type: String},zipcode: {type: Number} },
    orders: []
})

module.exports = mongoose.model('CustomerSchema',CustomerSchema)