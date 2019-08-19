const express = require('express');

const apiData = require('../models/apidata');
const groupData = require('../models/groupdata');

const router = express.Router();


router.post('', (req, res, next) => {
    if (req.body.search === '') {
      apiData.find().then( result => {
        res.status(200).json({
          message: 'friends fetched sucessfully',
          users: result
        })
      })
    } else if (req.body.search) {
    apiData.find({name: { $regex: req.body.search, $options: 'i' }}).then( result => {
      res.status(200).json({
        message: 'friends fetched sucessfully',
        users: result
      })
    })
  } else if (req.body.name) {
  const data = new apiData({
    name: req.body.name,
    phone: req.body.phone
  });
  data.save().then( userCreated => {
    res.status(200).json({message: 'added successfully', status: 'success'});
  })
  }
})

router.post('/group', (req, res, next) => {
  if (req.body.search === '') {
    groupData.find().then( result => {
      res.status(200).json({
        message: 'groups fetched sucessfully',
        group: result
      })
    })
  } else if (req.body.search) {
  groupData.find({groupName: { $regex: req.body.search, $options: 'i' }}).then( result => {
    res.status(200).json({
      message: 'groups fetched sucessfully',
      group: result
    })
  })
} else if (req.body.name) {
  const data = new groupData({
    groupName: req.body.groupName,
    friendsList: req.body.friendsList
  });
  data.save().then( userCreated => {
    res.status(200).json({message: 'added successfully', status: 'success'});
  })
}
})


router.get('', (req, res, next) => {
  apiData.find().then( obj => {
    res.status(200).json({
      message: 'friends fetched sucessfully',
      friendsList: obj
    });
  })
})

router.get('/group', (req, res, next) => {
  groupData.find().then( obj => {
    res.status(200).json({
      message: 'groups fetched sucessfully',
      group: obj
    });
  })
})

router.delete('/:id', (req, res, next) => {
  apiData.deleteOne({_id: req.params.id}).then( result => {
    res.status(200).json({message: 'Deleted successfully!'});
  })
})

router.delete('/group/:id', (req, res, next) => {
  console.log(req.params);
  groupData.deleteOne({_id: req.params.id}).then( result => {
    res.status(200).json({message: 'Deleted successfully!'});
  })
})

router.put('/:id', (req, res, next) => {
  const data = {
    _id: req.body._id,
    name: req.body.name,
    phone: req.body.phone
  };
  apiData.updateOne({_id: req.body._id}, data).then( result => {
    res.status(200).json({message: 'updated successsfully'});
  });
})




module.exports = router;
