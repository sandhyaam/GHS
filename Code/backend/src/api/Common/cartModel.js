import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
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
const cartModel = mongoose.model('carts', cartSchema)

export default cartModel