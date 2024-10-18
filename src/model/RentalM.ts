import mongoose, { Schema } from 'mongoose'

const rentalSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userM'
    },
    modelName: {
        type: String,
        require: true,
        trim: true
    },
    brand: {
        type: String,
        require: true,
        trim: true
    },
    category: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        require: true,
        trim: true
    },
    timeDuration: {
        startTime: {
            type: Date
        },
        endTime: {
            type: Date
        }
    }
})
const Rental = mongoose.model('Rental', rentalSchema)
export { Rental }
