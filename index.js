const { rmSync } = require('fs');
// this is the express server setup

const express = require('express');

// this is the port number
const port = 8000;
// this is the mongoose data controlle
const db=require('./config/mongoose');
const app= express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));
// the bellow  urlencoded is used for to decode the url
app.use(express.urlencoded({ extended: true }));
// the below middle ware is used for routes
app.use('/',require('./routes'));





// the below app.listen is to use the server is running on the particular 
app.listen(port, (err) => {
    if(err){console.log('error in connecting the server');
    }
    console.log(`Server running at http://localhost:${port}/`);
  });