const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const events = require('../model/event')

router.get('/:id', (req, res, next) => {
    let a = req.params.id;
    console.log(a);
    events.findById(a).then((todos) => {
        res.status(200).json({ todos });
    }).catch(err => {
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

router.post('/', (req, res, next) => {
    const event = new events({
        _id: new mongoose.Types.ObjectId(),
        eventid: req.body.eventid,
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
    res.status(201).json({
        message: 'Handling POST requests to /event',
        createdPet: event
    });
});

module.exports = router;