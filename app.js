const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', (req, res) => {
  console.log('Hello, you requested')
  fs.readFile('./view/index.html', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.send('Oops .. error happend')
    }
    res.send(data)
  })
})
app.post('/', (req, res) => {
  console.log('Post Method')
  res.send('Post Query')
})

app.delete('/', (req, res) => {
  console.log('Delete Method')
  res.send('Delete Query')
})

app.listen(7000, () => {
  console.log('Server started')
})
