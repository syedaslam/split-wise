const express = require('express');

const apiData = require('../models/apidata');
const groupData = require('../models/groupdata');

const router = express.Router();


router.post('', (req, res, next) => {
  console.log(req);
  const data = new apiData({
    name: req.body.name,
    phone: req.body.phone
  });
  data.save().then( userCreated => {
    res.status(200).json({message: 'added successfully', status: 'success'});
  })
})

router.post('/group', (req, res, next) => {
  console.log(req);
  const data = new groupData({
    groupName: req.body.groupName,
    friendsList: req.body.friendsList
  });
  data.save().then( userCreated => {
    res.status(200).json({message: 'added successfully', status: 'success'});
  })
})


router.get('', (req, res, next) => {
  apiData.find().then( obj => {
    res.status(200).json({
      message: 'post fetched sucessfully',
      users: obj
    });
  })
})

router.get('/group', (req, res, next) => {
  groupData.find().then( obj => {
    res.status(200).json({
      message: 'post fetched sucessfully',
      group: obj
    });
  })
})

router.delete('/:id', (req, res, next) => {
  apiData.deleteOne({_id: req.params.id}).then( result => {
    console.log('deleting posts');
    console.log(result);
    res.status(200).json({message: 'Post Deleted!'});
  })
})

router.put('/:id', (req, res, next) => {
  const data = {
    _id: req.body._id,
    name: req.body.name,
    phone: req.body.phone
  };
  console.log(data);
  apiData.updateOne({_id: req.body._id}, data).then( result => {
    res.status(200).json({message: 'updated successsfully'});
  });
})




module.exports = router;
