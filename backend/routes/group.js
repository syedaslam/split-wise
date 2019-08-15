const express = require('express');

// const groupData = require('../models/groupdata');

const router = express.Router();


router.post('', (req, res, next) => {
  console.log(req);
  const data = {
    groupName: req.body.groupName,
    friendsList: req.body.friendsList
  };
  data.save().then( userCreated => {
    res.status(200).json({message: 'added successfully', status: 'success'});
  })
})
