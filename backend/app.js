const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const loginRoutes = require('./routes/test');
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/events');
const categoryRoutes = require('./routes/category_route');
const cors = require('cors');

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
app.use(cors());

// Routing
app.use('/test', loginRoutes);
app.use('/login', userRoutes);
app.use('/events', eventRoutes);
app.use('/categories',categoryRoutes);
module.exports = app;
