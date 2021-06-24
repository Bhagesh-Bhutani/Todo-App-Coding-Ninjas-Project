const mongoose = require('mongoose');

const db = mongoose.connection;

db.on('error', function(err){
    console.log("Error while connecting to Database");
    console.log(err);
});

db.once('open', function(){
    console.log("Successfully connected to the Database");
});

mongoose.connect('mongodb://localhost/todo-db', {useNewUrlParser: true, useUnifiedTopology: true})
.catch(err => {
    console.log("Initial error in connecting to the Database");
    console.log(err);
});

module.exports = db;