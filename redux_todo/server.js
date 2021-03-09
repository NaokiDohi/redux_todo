const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Todo = require('./models/todo')
const cors = require('cors');// #1

const app = express()
app.use(cors()); // #2

mongoose.connect('mongodb://mongo-db:27017/redux-todo') //mongo-dbはlocalhostの代わり

// #1と#2の代わりに下記でも可能
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

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

app.post('/api/todo', (req, res) => {
    const record = new Todo()

    record.text = req.body.text

    record.save((err, record) => {
        if(err) {
            res.send(err)
        }

        // res.json(record) // これはシンプルなので下記に変更
        Todo.find({}, (err, todos) => {
            if(err) {
                res.send(err)
            }
    
            res.json(todos)
        })
    })
})

app.listen(8080, () => console.log('OK!'))