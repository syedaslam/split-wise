const express = require('express');
const multer = require('multer');

const Post = require('../models/post');

const router = express.Router();

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../backend/images');
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null;
    }
  },
  filename: (req, file, cb) => {
     const name = file.originalname.toLowerCase().split(' ').join('-');
     const ext = MIME_TYPE_MAP[file.mimetype];
     cb(null, name + '-' + Date.now() + '.' + ext);
  }
})

router.post('', multer({storage: storage}).single('image'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + '/images/' + req.file.filename
  });
  post.save().then( createdPost => {
    console.log(post);
    res.status(201).json({
      message: 'post added successfully',
      post: {
        ...createdPost,
        _id:  createdPost._id,
        // title: createdPost.title,
        // content: createdPost.content,
        // imagePath: createdPost.imagePath
      }
    })
  });
})

router.get('', (req, res, next) => {
  Post.find().then( obj => {
    res.status(200).json({
      message: 'post fetched sucessfully',
      posts: obj
    });
  })
})

router.delete('/:id', (req, res, next) => {
  console.log('deleting posts');
  Post.deleteOne({_id: req.params.id}).then( result => {
    console.log(result);
    res.status(200).json({message: 'Post Deleted!'});
  })
})

router.put('/:id', (req, res, next) => {
  const post = {
    _id: req.params._id,
    title: req.params.title,
    content: req.params.content
  }
  Post.updateOne({_id: req.params.id}, post).then( result => {
    res.status(200).json({message: 'updated successsfully'});
  });
})


module.exports = router;
