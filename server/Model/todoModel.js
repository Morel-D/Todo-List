const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        content: { type: String, required: true }
    }, { timestamps: true }
)

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;