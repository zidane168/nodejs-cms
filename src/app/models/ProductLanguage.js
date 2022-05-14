const { mongoose } = require("mongoose");
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)   // add slug plugin

const Schema = mongoose.Schema

const ProductLanguage = new Schema({ 
    name: { type: String, maxLength: 255 },    
    description: { type: String, maxLength: 600},    
    alias: { type:String, maxLength: 10},   // english, zh_HK
});

module.exports = mongoose.model('Product', ProductLanguage)    // collection name: ProductLanguage