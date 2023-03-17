const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8080;
const DB_URL = 'mongodb+srv://it21066016:vathila143@helpnature.td9rjdp.mongodb.net/?retryWrites=true&w=majority';

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

