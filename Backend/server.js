const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/Post');
const postRegister = require('./routes/register');
//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(postRegister);

const PORT = 8080;
const DB_URL = 'mongodb+srv://Pavani:pavani@helpnature.td9rjdp.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("Mongodb connection success!")
});


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

