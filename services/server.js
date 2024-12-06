require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const furnitureRoute = require('./routes/furnitureRoutes');
const orderRoute = require('./routes/orderRoutes');
const customerRoute = require('./routes/customerRoutes');
const { getFurniture } = require('./helpers/costcoHelper');
const FurnitureModel = require('./models/FurnitureModel');

async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        // FurnitureModel.collection.insertMany(await getFurniture())
        // console.log(await getFurniture())
    }   catch (e) {
        console.log(e)
    }
}

app.listen(3000)
app.use(cors({origin: ['http://localhost:3000','http://localhost:3001']}))
app.use(express.json())
app.use('/furniture',furnitureRoute)
app.use('/order',orderRoute)
app.use('/customer',customerRoute)
connect();