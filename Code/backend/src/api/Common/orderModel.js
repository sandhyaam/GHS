import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    orderId: {
        type: String
    },
    amount: {
        type: Number
    },
    date: {
        type: String
    },
    status: {
        type: String
    }
}, {
    timestamps: true
});

const orderModel = mongoose.model('orders', orderSchema)

export default orderModel