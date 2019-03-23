const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const categories = require('../model/category_model');

router.get('/', (req, res, next) => {
    categories.find().then((todos) => {
        res.send(todos);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const category = new categories({
        _id: new mongoose.Types.ObjectId(),
        category: req.body.category
    });
    category.save().then((docs) => {
        res.send(docs);

    }).catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /category',
        createdPet: category
    });
});

module.exports = router;