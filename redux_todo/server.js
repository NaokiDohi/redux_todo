const express = require('express')
const mongose = require('mongose')
const bodyParser = require('bodyParser')

const app = express()

app.listen(8080, () => console.log('OK!'))