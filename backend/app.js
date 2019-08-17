const express = require('express');

const apiRouters = require('./routes/apis');
// const groupRouter = require('./routes/group');
const mongoose = require('mongoose');


const app = express();

//  mongo credencials here...............
mongoose
  .connect(
    'mongodb+srv://max:5N7MGCWtNU6isy3I@cluster0-8dont.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('connection filed');
  });

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
