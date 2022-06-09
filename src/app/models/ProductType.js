const { mongoose } = require("mongoose");

const Schema = mongoose.Schema

const ProductType = new Schema({ 
    name: { type: Number },  
}, {
    timestamps: true, // tu dong tao createdAt, updatedAt
});

module.exports = mongoose.model('ProductType', ProductType)    // collections name: courses