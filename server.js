// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
// Callback to debug
const port = 3000;
const server = app.listen(port,()=>{
    console.log(`running on port ${port}`);
});
// Callback function to complete GET '/all'
app.get('/all',(req, res) => {
  res.send(projectData);
});
// Post Route
app.post('/add', (req, res) => {
    projectData.date = res.body.date;
    projectData.temp = res.body.temp;
    projectData.feelings = res.body.feelings;
 
    res.send(projectData);
});
















