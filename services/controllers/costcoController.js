const { getFurnitureDetails } = require('../helpers/costcoHelper')
const FurnitureSchema = require('../models/FurnitureModel')

module.exports = {
    getFurniture: async(req,res) => {
        const id = req.query.id
        try {
            const furnitureData = req.query.id ? await FurnitureSchema.findOne({itemID: id}).then((result,error) => {
                let returnedFurniture = result
                if (error) {console.log(error)}
                if (result.dimensions.length == 0 && result.weight.length == 0) { 
                    returnedFurniture = getFurnitureDetails(result).then(updatedFurniture => {
                        FurnitureSchema.collection.findOneAndUpdate({itemID:id},{$set: {dimensions: updatedFurniture.dimensions, weight: updatedFurniture.weight}}).then((updatedFurniture,err) => res.status(200).send(updatedFurniture))
                    })
                } else {
                    res.status(200).send(result)
                }
            }): await FurnitureSchema.find().then((found) => res.status(200).send(found))
            // res.status(200).send(furnitureData)
        } catch (e) {
            res.status(500).send(e)
            console.log(e)
        }
    }
}
