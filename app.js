const express = require('express')
const app = express()

const index = require('./routes/index')

app.use('/', index)

module.exports = app
