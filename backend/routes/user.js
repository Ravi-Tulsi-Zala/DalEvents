//This Routes will handle the login flow
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user_login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Post request from Login page
router.post('/login',(req,res,next)=>{
    let fetchedUser;
    User.findOne({
        email: req.body.email
    }).then(user =>{
        if(!user){
            return res.status(401).json({
                message: "Invalid Username and Password"
            });
        }
        fetchedUser = user; // fetches the user details with the emailid
        return bcrypt.compare(req.body.password , user.password); // decrypting the password and comparing it
        }).then(result =>{
            if(!result){
                return res.status(401).json({
                    message:"Auth Failed"
                });
            }
            // assigning session token for the logged in user
            const token = jwt.sign(
                {email:fetchedUser.email,userId:fetchedUser._Id},
                'secretthisisshouldbelonger',
                {expiresIn:"1h"}
            );
            res.status(200).json({
                token:token,
                expiresIn: 3600,
                fname: fetchedUser.firstname   
            });
        }).catch(err =>{
            console.log(err);
            return res.status(401).json({
                message:"Invalid Username and Password"
            })
        });

});

module.exports = router;