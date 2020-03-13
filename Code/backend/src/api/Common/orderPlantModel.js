import mongoose from 'mongoose'

const orderPlantSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    nursary: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "nursarys"
    },
    plant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "plants"
    },
    orderId: {
        type: String
    },
    quantity: {
        type: Number
    },
    amount: {
        type: Number
    }
},
    {
        timestamps: true
    });

const orderPlants = mongoose.model('orderPlants', orderPlantSchema)

export default orderPlants