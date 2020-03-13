import mongoose from 'mongoose'

const nursarySchema = new mongoose.Schema({
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
        type: String
    },
    email: {
        type: String
    },
    nursary: {
        type: String,
        unique: true
    },
    contactNo: {
        type: String
    },
    address: {
        type: String
    },
    status: {
        type: String
    }
},
    {
        timestamps: true
    });
const nursaryModel = mongoose.model('nursarys', nursarySchema)

export default nursaryModel