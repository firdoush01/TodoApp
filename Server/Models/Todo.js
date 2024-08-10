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
    // Added category field
    category: {
        type: String,
        enum: ['Academics', 'Workout', 'Shopping', 'Work', 'Health', 'Hobbies', 'Household', 'Finance', 'Social', 'Personal Development', 'Other'], // List of categories
        default: 'Other' // Default category
    }
})

const TodoModel = mongoose.model("TodoModel", todoSchema)
module.exports = TodoModel;
