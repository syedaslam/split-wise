const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const createUser = new Schema({
  name: {type: String, require: true},
  phone: {type: Number, require: true}
})

module.exports = mongoose.model('apidata', createUser);
