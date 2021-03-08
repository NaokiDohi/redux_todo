const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.listen(8080, () => console.log('OK!'))