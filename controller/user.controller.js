const { Task } = require('../models')

module.exports.createTask = async (req, res, next) => {
  const { body } = req
  const newTask = await new Task(body)

  res.send(newTask)
}
