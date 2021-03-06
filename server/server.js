const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const app = express()
const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/MOVIES_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
