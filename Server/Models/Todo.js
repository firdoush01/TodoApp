const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
    


})

const TodoModel = mongoose.model("TodoModel",todoSchema)
module.exports = TodoModel;