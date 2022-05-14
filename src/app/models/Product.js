const { mongoose } = require("mongoose");

const Schema = mongoose.Schema

const Product = new Schema({ 
    price: { type: Number },  
    quantity: { type: Number },  
    inventory: { type: Number },    //tonkho
    expiredDate: { type: Date },
    publishDate: { type: Date },   
}, {
    timestamps: true, // tu dong tao createdAt, updatedAt
});

module.exports = mongoose.model('Product', Product)    // collections name: courses