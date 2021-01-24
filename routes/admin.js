const express = require('express');

const router = express.Router();

const PostController = require('../controllers/PostController');

//return empty home
router.get('/', (req, res) => {
    res.render('home');
});
//API:create post and return the created one
router.post('/post',PostController.createPost);//user [POST]http://localhost:3000/post

//API:return all posts
router.get('/posts',PostController.getPosts);

//API:Delete post by ID
router.delete('/post/:postID',PostController.deletePost);
//API:Update post by ID
router.patch('/post/:postID',PostController.updatePost);

router.get('/post/:postID',PostController.getOnePost);
  
module.exports = router; //export to public