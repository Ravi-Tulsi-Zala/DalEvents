const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user_login = require('../model/user_login');

router.get('/',(req,res,next) =>{
    user_login.find().then((todos) =>{
        res.send(todos);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/',(req,res,next)=>{
    const login = new user_login({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
    login.save().then((docs)=>{
        res.send(docs);

    }).catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /login',
        createdPet: login
    });
});

module.exports = router;