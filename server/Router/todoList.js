const express = require('express');
const router = express.Router();
const controller = require('../Controller/todoController');


// Add the list
router.post('/', controller.addTodo);

// Get the list 
router.get('/', controller.getAllTodos);


// Get single List 
router.get('/:id', controller.getSingle);

// Delete single List
router.delete('/:id', controller.deleteTodos);

// Update single list 
router.patch('/:id', controller.updateTodo);




module.exports = router;