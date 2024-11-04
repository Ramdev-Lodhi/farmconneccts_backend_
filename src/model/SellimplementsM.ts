import mongoose from 'mongoose'

const sellimplementSchema = new mongoose.Schema({
    location: {
        type: String,
        require: true,
        trim: true
    },
    state: {
        type: String,
        require: true,
        trim: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: function (v: string) {
                return /^[0-9]{10}$/.test(v)
            },
            message: (props: { value: string }) => `${props.value} is not a valid mobile number!`
        }
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
    modelName: {
        type: String,
        requuire: true,
        trim: true
    },
    manufacturingYear: {
        type: Number,
        require: true,
        trim: true
    },
    aboutImplement: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        require: true,
        trim: true
    },
    image: {
        type: String
    }
})

const Sellimplement = mongoose.model('Sellimplement', sellimplementSchema)
export { Sellimplement }