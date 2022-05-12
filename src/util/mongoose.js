module.exports = {
    mongoosesToObject: function(mongooses) {
        return mongooses.map( mongoose => {
            return mongoose.toObject()
        });
    },

    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : ""// mongoose
    }
}