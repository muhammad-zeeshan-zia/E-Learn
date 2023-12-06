const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose=require('mongoose');
const authRoute = require('./routes/auth');
const postRoute=require('./routes/post');
dotenv.config();  // TO USE .env
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
app.use(cors());
// CONNECT A SERVER
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(console.log("Databse Connected")).catch((err)=>{
    console.log(err);
})

//Use Router

app.use('/api/auth/',authRoute);
app.use('/api/post/',postRoute);


//Server Listen
app.listen("5000",()=>{
    console.log("Backend is running at server 5000");
})