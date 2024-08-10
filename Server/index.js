const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://firdoush_ali:8676mongo@cluster0.e4kc6xb.mongodb.net')
console.log("Db connected Successfully");


app.get('/get', (req,res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { done, priority } = req.body; // **Destructure done and priority from req.body**
    TodoModel.findByIdAndUpdate(
        { _id: id }, 
        { 
            done: done, 
            priority: priority // **Include priority in the update**
        }
    )
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.delete('/delete/:id', (req,res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const { task, priority } = req.body; // **Destructure priority from req.body**
    TodoModel.create({
        task: task,
        priority: priority // **Include priority when creating a new task**
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is running");
    
})