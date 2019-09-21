const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRouters = require('./routes/posts');

const app = express();

//  mongo credencials here...............

// ..............................................


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/images', express.static(path.join('../backend/images')));

app.use(bodyParser.json());

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

app.use('/api/posts', postsRouters);

module.exports = app;
