const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'Medium'
    },
    category: {
        type: String,
        enum: ['Academics', 'Workout', 'Shopping', 'Work', 'Health', 'Hobbies', 'Household', 'Finance', 'Social', 'Personal Development', 'Other'],
        default: 'Other'
    },
    // **Added date field**
    date: {
        type: Date,
        required: true
    },
    // **Added note field**
    note: {
        type: String,
        default: ''
    }
})

const TodoModel = mongoose.model("TodoModel", todoSchema)
module.exports = TodoModel;
