const { mongoose } = require("mongoose");

const Schema = mongoose.Schema

const ProductType = new Schema({ 
    name: { 
        eng: {
            type: String,
            default: '',
        },
        zhHK: {
            type: String,
            default: '',
        }
    },  
}, {
    timestamps: true, // tu dong tao createdAt, updatedAt
});

module.exports = mongoose.model('ProductType', ProductType)    // collections name: courses