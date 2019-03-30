const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const events = require('../model/event')


//This function is used to get a specific event
router.get('/:eventid',(req,res,next) =>{
    var a = req.params.eventid;
    console.log(a);
    events.findOne({eventId : req.params.eventid}).then((todos) =>{
        res.send(todos);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/search/:searchString', (req, res, next) => {
    let a = req.params.searchString;
    console.log(a);
    events.find({
        title: {$regex : new RegExp(a), $options: 'i'}
    }).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/searchByTag/:searchCategory', (req, res, next) => {
    let a = req.params.searchCategory;
    console.log("hhdhd");
    console.log(a);
    events.find({
        category: {$regex : new RegExp(a), $options: 'i'}
    }).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

//This function gets all events within the DB
router.get('/', (req, res, next) => {
    events.find().then((todos) => {
        res.send(todos);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

//This function add an event to the DB
router.post('/', (req, res, next) => {
    const event = new events({
        _id: new mongoose.Types.ObjectId(),
        eventId: req.body.eventId,
        imageUrl: req.body.imageUrl,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        host: req.body.host,
        price: req.body.price,
        category: req.body.category,
        location: req.body.location,
        interested: req.body.interested,
        disinterested: req.body.disinterested
    });
    event.save().then((docs) => {
        res.send(docs);
    }).catch(err => console.log(err));
});

module.exports = router;