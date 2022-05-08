const mongoose = require('mongoose')

async function connect() {

    try {
        await mongoose.connect("mongodb://localhost:27017/cms_dev", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('--> Congratulation, Database connect successfully!!!')

    } catch(error) {
        console.log('connect failure: ', error)
    }
}

module.exports = { connect }