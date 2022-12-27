require('dotenv').config();
const express = require('express');
const todoList = require('./Router/todoList');

// Express App
const app = express();


// MiddleWare 
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT);
})

app.use('/Todo', todoList);