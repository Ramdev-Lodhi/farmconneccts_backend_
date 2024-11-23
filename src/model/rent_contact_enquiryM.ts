import mongoose, { Schema } from 'mongoose'

const rentContactSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userM'
    },
    name: {
        type: String,
        trim: true
    },
    mobile: {
        type: String
    },
    location: {
        type: String,
        trim: true
    },
    budget: {
        type: String,
        trim: true
    },

    renterInfo: {
        renterID: {
            type: String
        },
        rent_image: {
            type: String,
            trim: true
        },
        rentserviceName: {
            type: String,
            trim: true
        }
        // rentBrand: {
        //     type: String,
        //     trim: true
        // }
    }
})
const rentContact = mongoose.model('Sell_contact_enquiry', rentContactSchema)
export { rentContact }
