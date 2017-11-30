const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const app = express()
const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__DB_PROJECT__')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  name: '__PROJECT__',
  secret: '111',
  secure: false
}))

app.use(require('./config/error-handler'))

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
