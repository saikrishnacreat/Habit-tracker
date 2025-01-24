const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
require('dotenv').config();
const app = express();

app.use(cors()); // cross origin Resource sharing
app.use(bodyParser.json()); 

const { mongoURI } = require('./config/dev');
//connect to MongoDB
console.log(mongoURI);
mongoose.connect(mongoURI, { useNewUrlParser : true, useUnifiedTopology: true })
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err) );

const habitRoutes = require('./routes/habits');
app.use('/api/habits',habitRoutes);
PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
