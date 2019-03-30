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

router.get('/:email',(req,res,next) =>{
    var a = req.params.email;
    console.log(a);
    user_login.findOne({email : req.params.email}).then((todos) =>{
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
        email: req.body.email,
        category : req.body.category,
        banner_id :req.body.banner_id
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
