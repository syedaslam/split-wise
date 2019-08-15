const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const createGroup = new Schema({
  groupName: {type: String, require: true},
  friendsList: {type: new Array(), require: true}
})

module.exports = mongoose.model('groupdata', createGroup);
