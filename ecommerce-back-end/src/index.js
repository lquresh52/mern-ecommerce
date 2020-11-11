const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


// routes
const userRoutes = require('./routes/user.js');

// ENV variables 
env.config();

// mongodb+srv://root:<password>@cluster0.vwee2.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vwee2.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log("DATABSE CONNECTED.")
    });

// to acces the data send through post method
app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started at port : ${process.env.PORT}`);
});
