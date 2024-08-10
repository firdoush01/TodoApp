const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    },
    // **Added priority field**
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'], // Set possible values
        default: 'Medium' // Set default value
    }
})

const TodoModel = mongoose.model("TodoModel", todoSchema)
module.exports = TodoModel;
