const Post=require('../models/post');

const router = require('express').Router();
const User =require('../models/user');

//CREATE POST

router.post('/',async(req,res)=>{
    const new_post= new Post(req.body);
    try{
        const savePost = await new_post.save();
        res.status(200).json(savePost);
    }
    catch(err)
    {
        res.status(500).json('Can Not create post')
    }
})



//GET SINLE POST 
router.get('/:id', async (req, res) => {

    try {
        const getPost = await Post.findById(req.params.id);
                res.status(200).json(getPost);
       
       
    } 
    catch (err) {
        res.status(500).json(err);
    }
})








 
//GET ALL POSTS
router.get('/',async(req,res)=>{
    let posts;
    const username= req.query.username;
    const catName = req.query.catName;

    try{
        if(username)
        {
            posts = await Post.find({username});
        }
        else if (catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        }
        else{
            posts=await Post.find();
        }
        res.status(200).json(posts)

    }
    catch(err)
    {

    }
  
})



router.delete('/:id',async(req,res)=>{
try{
const deletePost= await Post.findByIdAndDelete(req.params.id);
res.status(200).json("Post deleted")
}
catch(err)
{

}

})

module.exports=router