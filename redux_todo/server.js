const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Todo = require('./models/todo')

const app = express()

mongoose.connect('mongodb://mongo-db:27017/redux-todo') //mongo-dbはlocalhostの代わり

app.use(bodyParser.json())

app.get('/api/todos', (req, res) => {
    // res.json({todo: "todo"})
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