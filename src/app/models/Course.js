const { mongoose } = require("mongoose");
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)   // add slug plugin

const Schema = mongoose.Schema

const Course = new Schema({ 
    name: { type: String, maxLength: 255 },    
    description: { type: String, maxLength: 600 },    
    image: { type: String, maxLength: 255 },   
    slug: { type: String, slug: 'name', unique: true}   // use name to generator
    
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true, // tu dong tao createdAt, updatedAt
});

module.exports = mongoose.model('Course', Course)    // collections name: courses