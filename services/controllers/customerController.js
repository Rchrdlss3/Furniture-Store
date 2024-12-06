const customerSchema = require('../models/CustomerModel');

module.exports = {
    createUser: async(req,res) => {
        console.log(req.body)
        const customer = req.body
        try {
            const response = await customerSchema.findOne({email: customer.email}).then((result,error) => {
                if (result == null) {customerSchema.create(req.body).then((newUser) => {if (newUser) {res.status(201).send('created')}})} 
                else (res.status(403).send('User already exists with that Email'))
            })
        } catch(e) {
            res.status(500).send(e)
        }
    },
    getUser: async (req,res) => {
        const customerEmail = req.query.email
        try {
            const response = await customerSchema.findOne({email: customerEmail}).then((result,error) => {
                if (result) {res.status(200).send(result)}
            })
        } catch(e) {
            res.status(500).send(e)
        }
    }
} 