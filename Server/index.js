// Required imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');

// Import your TodoModel
const TodoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mdfirdoushali1776:wRpJ9OmlwU587pJ1@cluster0.k0w25.mongodb.net/')
console.log("Db connected Successfully");

// Existing API routes (get, post, put, delete)
app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { done, priority, category, date, note } = req.body;
    TodoModel.findByIdAndUpdate(
        { _id: id },
        { 
            done: done, 
            priority: priority,
            category: category,
            date: date,
            note: note 
        }
    )
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({ _id: id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.post('/add', (req, res) => {
    const { task, priority, category, date, note } = req.body;
    TodoModel.create({
        task: task,
        priority: priority,
        category: category,
        date: date,
        note: note
    }).then(result => res.json(result))
    .catch(err => res.json(err));
});

// Cron job to run every hour and check for tasks due in the next 12 hours
cron.schedule('0 * * * *', () => {
    const now = new Date();
    const twelveHoursLater = new Date(now.getTime() + 12 * 60 * 60 * 1000);

    TodoModel.find({ date: { $lte: twelveHoursLater, $gte: now }, done: false })
    .then(tasks => {
        tasks.forEach(task => {
            console.log(`Reminder: The task "${task.task}" is due soon! Note: ${task.note}`);
            // You can trigger in-app notifications or any other action here
        });
    })
    .catch(err => console.log(err));
});

// Start your server
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
