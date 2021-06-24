const express = require('express');
const app = express();

// port on which this server will run
const port = 8000;

// require db from mongoose.js in config
const db = require('./config/mongoose');

// require express-ejs-layouts
const expressLayouts = require('express-ejs-layouts');

// Set up view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static('./assets'));

// Middleware to set up expressLayouts
app.use(expressLayouts);

// To extract the css and js tags from sub pages to layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Middleware to parse the requests body data of post requests
app.use(express.urlencoded({extended: true}));

// Middleware for routes
app.use('/', require('./routes'));


// Listen to the specified port
app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server started successfully at http://localhost:${port}`);
});