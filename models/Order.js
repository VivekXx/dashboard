//naming convention for models

import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please enter name"]
    },
    phone: {
        type: Number,
        required: [true, "Please enter phone number"]
    },
    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: [true, "Please Enter amount"]
    }
})

export default mongoose.model('Order',OrderSchema)