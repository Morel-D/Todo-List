require('dotenv').config();
const express = require('express');
const todoList = require('./Router/todoList');
const mongoose = require('mongoose');

// Express App
const app = express();


// MiddleWare 
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Databse Connection
mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connection Established');
            console.log('Listening on port ', process.env.PORT);
        })
    }).catch((error) => {
        console.log(error)
})

app.use('/Todo', todoList);