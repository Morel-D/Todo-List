

const addTodo = (req, res) => {
    res.json({"Message": "Todo hes been created"})
}

const getAllTodos = (req, res) => {
    res.json({ "Message" :"All Data has been display"})
} 


const getSingle = (req, res) => {
    res.json({"Message" : "Single data selected"})
}


const deleteTodos = (req, res) => {
    res.json({"Message" : "Single data deleted"})
}

const updateTodo = (req, res) => {
    res.json({"Message" : "Single data Update"})
} 

module.exports = 
{
    addTodo,
    getAllTodos,
    getSingle,
    deleteTodos,
    updateTodo
}