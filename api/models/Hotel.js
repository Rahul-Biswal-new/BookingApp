import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema  = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    type: {
        type: 'string',
        required: true,
    },
    city: {
        type: 'string',
        required: true,
    },
    address: {
        type: 'string',
        required: true,
    },
    distance: {
        type: 'string',
        required: true,
    },
    photos: {
        type: [string],
    },
    desc: {
        type: 'string',
        required: true,
    },  
    rating: {
        type: Number,
        min: 0, 
        max: 5,
    },
    rooms: {
        type: [string],
    },
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
})

export default mongoose.model('Hotel', HotelSchema)