const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const images = require('./middleware/imageProducts');

const app = express();

//import routes
const postRoutes = require('./routes/Products');
//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8080;
const DB_URL = 'mongodb+srv://Abisheka:abisheka@helpnature.td9rjdp.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("Mongodb connection success!")
});
app.use("/upload/products/:nic", images.single("products"), function (req, res) {
    res.json("Done");   
    });

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

