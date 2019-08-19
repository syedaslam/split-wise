const express = require('express');

const apiRouters = require('./routes/apis');
// const groupRouter = require('./routes/group');
const mongoose = require('mongoose');


const app = express();

//  mongo credencials here...............

// ..............................................


// To parse the json data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// To access corss origen domain....
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});



app.use('/api/split', apiRouters);
// app.use('/api/split/group', groupRouter);
module.exports = app;
