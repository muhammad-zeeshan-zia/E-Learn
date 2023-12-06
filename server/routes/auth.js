const express=require('express')
const User = require('../models/user');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const Post= require('../models/post');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => 
    cb(null, file.originalname)
  },
)
const upload = multer({ storage });
router.use('/images', express.static('images'));
// REGISTER A USER 
router.post('/register',  async (req, res) => {
  try {
    const { username, email, password,profilePic } = req.body;

    // Check if the username or email already exists in the database
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ message: 'Username or email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profilePic:profilePic
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Return user data without the password
    const { password: _, ...userData } = user._doc;
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//Update User 
router.put('/update/:id',async(req,res)=>{
 
  try{
    const updateduser= await User.findByIdAndUpdate(req.params.id,{
      $set :req.body
  },{new:true});
  res.status(200).json(updateduser);
  }
  catch(err)
  {
    res.status(500).json("OOPS");
  }
})




//Delete User

router.delete('/:id',async(req,res)=>{

  const user_data = await User.findById(req.params.id);
  try{  
    await Post.deleteMany({username:user_data.username});
    await User.findByIdAndDelete(req.params.id);
  }
  catch(err)
  {
    res.status(500).json(err)
  }
})

module.exports = router;
