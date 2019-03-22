const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const loginRoutes = require('./routes/test');
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/events');

//mongoose connection 
mongoose
  .connect('mongodb+srv://dalevents:dalevents@dalevents-evire.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

// Routing
app.use('/test', loginRoutes);
app.use('/login', userRoutes);
app.use('/events', eventRoutes);
module.exports = app;
