import mongoose from 'mongoose'

const RegistrationSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    phoneNo: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
},
    {
        timestamps: true
    });

const userModel = mongoose.model('users', RegistrationSchema)

export default userModel