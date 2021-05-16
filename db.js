const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://danfell:Yomamma123@cluster0.j4jz6.mongodb.net/mern-pizza"

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected', ()=> {
    console.log('Mongo DB Connection Successful');
})

db.on('error', ()=> {
    console.log('Mongo DB Connection Failed');
});

module.exports = mongoose;