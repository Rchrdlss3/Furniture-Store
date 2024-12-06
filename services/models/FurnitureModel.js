const mongoose = require('mongoose');
const Schema = mongoose.Schema

const FurnitureSchema = new Schema({
    _id: false,
    productSku: {type: String, required: true},
    itemID: {type: String, required: true},
    link: {type: String, required: false},
    image: {type: String, required: false},
    description: {type: String, required: false},
    dimensions: [{type: String,required: false}],
    weight: [{type: Number, required: false}],
    price: {type: String, required: false}
})

module.exports = mongoose.model('FurnitureSchema',FurnitureSchema)