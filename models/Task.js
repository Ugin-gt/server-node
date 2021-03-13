const db = new Map()

class Task {
  constructor ({ userName, task, isDone }) {
    this.userName = userName
    this.task = task
    this.isDone = isDone
    this.createAt = new Date()
    this.id = `${db.size}`

    db.set(this.id, this)
    return Promise.resolve(this)
  }

  async update ({ userName, task, isDone }) {
    db.set(this.id, {
      userName,
      task,
      isDone
    })
    return db.get(this.id)
  }
  async delete () {
    return db.set(this.id)
  }
}

Task.findAll = async () => {
  return [...db.values()]
}

Task.findOne = async id => {
  return db.get(id)
}

module.exports = Task
