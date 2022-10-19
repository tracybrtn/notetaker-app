const express = require('express');

// Heroku port || local port
const PORT = process.env.PORT || 3001;
const app = express();

//import routes 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//include files in public folder
app.use(express.static('public'));

// Routes for notes and index
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listen for connection 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});