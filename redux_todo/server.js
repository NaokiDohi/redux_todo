const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Todo = require('./models/todo')

const app = express()

mongoose.connect('mongodb://localhost:27017/redux-todo')

app.use(bodyParser.json())

app.get('/api/todos', (req, res) => {
    Todo.find({}, (err, todos) => {
        if(err) {
            res.send(err)
        }

        res.json(todos)
    })
})

app.post('api/todo', (req, res) => {
    const record = new Todo()

    record.text = req.body.text

    record.save((err, record) => {
        if(err) {
            res.send(err)
        }

        res.json(record)
    })
})

app.listen(8080, () => console.log('OK!'))