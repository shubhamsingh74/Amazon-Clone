const express = require("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post('/api/signup', async (req,res)=>{
    //get the data from the client
    const {name , email, password } = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({msg:"User with same email already exists!"})
    }

   let user = new User({
    email,
    password,
    name,
   })

   user = await user.save();
   res.json(user);
    //post the data in the database

    //return the data to the user


});

module.exports = authRouter; // making this to global and use it anywhere in project
