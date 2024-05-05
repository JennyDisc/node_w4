const express = require('express');
const router = express.Router();
const PostController = require("../controller/postController");

router.get('/', function (req, res, next) {
  PostController.getPosts(req, res);
});

// 縮寫
// router.get('/', PostController.getPosts) 

router.post('/', function (req, res, next) {
  PostController.postPosts(req, res);
});

router.delete('/', function (req, res, next) {
    PostController.deleteAllPosts(req, res);
});

router.delete('/:id', function (req, res, next) {
  PostController.deletePosts(req, res);
});

router.patch('/:id', function (req, res, next) {
  PostController.patchPosts(req, res);
});

module.exports = router;
