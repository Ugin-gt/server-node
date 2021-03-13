const express = require('express')
const validateTask = require('./middleware/validate.mw')
const {
  createTask,
  getTaskList,
  updateTask,
  deleteTask
} = require('./controller/task.controller')
const app = express()

const bodyParser = express.json()

app.get('/taskList', getTaskList)
app.post('/createTask', bodyParser, validateTask, createTask)
app.patch('/updateTask/:id', bodyParser, validateTask, updateTask)
app.delete('/deleteTask/:id', deleteTask)

app.listen(7000, () => {
  console.log('Server started')
})
