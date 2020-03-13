import mongoose from 'mongoose'

const plantSchema = new mongoose.Schema({
    nursary: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "nursarys"
    },
    plantType: {
        type: String
    },
    plantName: {
        type: String
    },
    rate: {
        type: Number
    },
    image: {
        type: String
    }
},
    {
        timestamps: true
    })

const plantModel = mongoose.model('plants',plantSchema)

export default plantModel