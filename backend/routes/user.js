const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user_login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login',(req,res,next)=>{
    let fetchedUser;
    User.findOne({
        email: req.body.email
    }).then(user =>{
        console.log("user:::",user);
        if(!user){
            return res.status(401).json({
                message: "Auth Failed"
            });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password , user.password);
        }).then(result =>{
            console.log("result:::",result);

            if(!result){
                return res.status(401).json({
                    message:"Auth Failed"
                });
            }
            const token = jwt.sign(
                {email:fetchedUser.email,userId:fetchedUser._Id},
                'secretthisisshouldbelonger',
                {expiresIn:"1h"}
            );
            console.log("token:::",token);

            res.status(200).json({
                token:token
            });
        }).catch(err =>{
            console.log(err);
            return res.status(401).json({
                message:"Auth Failed"
            })
        });

});

module.exports = router;