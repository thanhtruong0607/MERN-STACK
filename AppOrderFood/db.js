const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://truong1120:060700@cluster0.pawil.mongodb.net/mern-stack'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', () => {
    console.log('MongoDb Connection Successful');
})

db.on('error', () => {
    console.log('MongoDb Connection Failed');
})

module.exports = mongoose