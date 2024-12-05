import mongoose from "mongoose";

const cafeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    mrt: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    businessHours: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, {
    timestamps: true,
    collection: 'cafe'
});

// 建立地理空間索引
cafeSchema.index({ location: '2dsphere' });

const Cafe = mongoose.model('Cafe', cafeSchema);

export default Cafe; 