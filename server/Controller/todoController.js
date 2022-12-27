const TodoList = require('../Model/todoModel');
const mongoose = require('mongoose');

const addTodo = (req, res) => {
    const newTodo = new TodoList(req.body);
    newTodo.save()

    TodoList.find()
        .then((results) => {
            res.json(results);
        }).catch((error) => {
        res.json(error.message)
    })
}

const getAllTodos = (req, res) => {
    TodoList.find().sort({ createdAt: -1 })
        .then((results) => {
        res.json(results)
        }).catch((error) => {
        res.json(error.message)
    })
}  


const getSingle = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    TodoList.findById(id)
        .then((results) => {
        res.json(results)
        }).catch((error) => {
            res.json(error.message)
    })
}


const deleteTodos = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    TodoList.findByIdAndRemove(id)
        .then((results) => {
            res.json((results) => {
            res.json(results)
            }).catch((error) => {
            res.json(error.message)
        })
    })
}



const updateTodo = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    const newTodo = 
    {
        content: req.body.content
    }

    TodoList.findByIdAndUpdate(id, newTodo)
        .then((results) => {
        res.json(results)
        }).catch((error) => {
        res.json(error.message)
    })
} 


module.exports = 
{
    addTodo,
    getAllTodos,
    getSingle,
    deleteTodos,
    updateTodo
}