const express = require('express')
const validateTask = require('./middleware/')
const { createTask } = require('./controller/user.controller')
const app = express()

const bodyParser = express.json()

app.post('/createTask', bodyParser, validateTask, createTask)

app.delete('/', (req, res) => {
  console.log('Delete Method')
  res.send('Delete Query')
})

app.listen(7000, () => {console.log('Server started')})
