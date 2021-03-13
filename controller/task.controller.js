const { Task } = require('../models')

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req
    const newTask = await new Task(body)

    res.status(201).send(newTask)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports.getTaskList = async (req, res, next) => {
  try {
    const taskList = await Task.findAll()

    res.status(200).send(taskList)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports.updateTask = async (req, res, next) => {
  try {
    const { params, body } = req

    const foundTask = await Task.findOne(params.id)
    const updatedTask = await foundTask.update(body)
    const responseTask = JSON.stringify(updatedTask)

    res.status(202).send(responseTask)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports.deleteTask = async (req, res, next) => {
  try {
    const { params } = req

    const foundTask = await Task.findOne(params.id)
    const deletedTask = await foundTask.delete()

    res.status(200).send({ deletedTask })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
