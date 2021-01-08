// empty JS object act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server n Callback to debug
const port = 3000;
const server = app.listen(port,()=>{
    console.log(`running on port ${port}`);
});

// GET '/all' Route
app.get('/all',(req, res) => {
  res.send(projectData);
});

// Post '/add' Route
app.post('/add', (req, res) => {
    projectData.date = req.body.date;
    projectData.temp = req.body.temp;
    projectData.feelings = req.body.feelings;
 
    res.send(projectData);
});















