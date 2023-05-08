const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const images = require('./middleware/imagepro');

const app = express();

//import routes
const postRoutes = require('./routes/volunteer');
const postProject =  require('./routes/project');
const postRegister =  require('./routes/register');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(postProject);
app.use(postRegister);

const PORT = 8080;
const DB_URL = 'mongodb+srv://Anushka:anushka@helpnature.td9rjdp.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("Mongodb connection success!")
});

app.use("/upload/project/:nic", images.single("project"), function (req, res) {
    res.json("Done");   
    });


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});


