const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const {urlencoded} = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/users', {useUnifiedTopology: true, useNewUrlParser: true});
    mongoose.connection.on('error', (error)=> {
        console.error('error')
    });
    mongoose.connection.once('open', (err)=>{
        console.log('db on')
    });

app.use(authRouter);
app.use(cors({}));
app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('test success');
})

app.post('/test', (req, res)=>{
    console.log(req.body);
})

app.listen('5000', (req, res)=>{
    console.log('server is on')
})