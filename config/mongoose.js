// this is the mongoose connection 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerse_data');
db=mongoose.connection;

db.on('error',console.error.bind(console,'Error in connectiong to the mongoodb'));
db.once('open',() => {
      console.log('Connected to Database :: MongoDB');
});


module.exports =db;