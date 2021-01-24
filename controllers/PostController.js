const Post = require('../models/post');

exports.createPost = (req,res) =>{
    console.log("createPost is called.");

    const text = req.body.text;
    const postedAt = new Date().toISOString();
    const postedBy = "Kimheng";//user
    const status = req.body.status;

    const post = new Post({
        text : text,
        postedAt : postedAt,
        postedBy : postedBy,
        status : status
    });

    post.save().then(result=>{
        //console.log(result);
        console.log('Post is created.');
        res.json({"message": "success","data":result});
        //res.redirect('/');// localhost:3000
    }).catch(err =>{
        console.log(err);
    });

}
exports.getPosts = (req,res) =>{
    Post.find().then(posts=>{
        res.json(posts)
    }).catch(err=>{
        console.log(err);
    })
}
exports.deletePost = (req,res)=>{
    const postID = req.params.postID;
    Post.findByIdAndRemove(postID)
    .then(()=>{
        res.json({"message":"success!"});
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.updatePost = (req,res)=>{
    const postID = req.params.postID;
    const updateText=req.body.text;
    const updateStatus=req.body.text;
    Post.findById(postID)
    .then(post=>{
        post.text=updateText;
        post.status=updateStatus;
        return post.save();
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.getOnePost=(req,res)=>{
    Post.findById(req.params.postID)
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        console.log(err);
    })
}