const http = require('http')
const fs = require('fs')

let reqCount = 0

const requestListener = (req, res) => {
  console.log(++reqCount)

  fs.readFile('./view/index.html', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.end('Oops .. error happend')
    }
    res.end(data)
  })
  // res.end(`Hello my new guest, U are ${reqCount}`)
}

const server = http.createServer(requestListener)

server.listen(7000)
