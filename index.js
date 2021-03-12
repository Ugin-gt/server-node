const external = require('./utils/math')
console.log(external)

async function primitive () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ready!'), 2000)
  })
  const result = await promise
  console.log(result)

  const bool = true
  const number = 3
  const string = 'Lets Start Async'
  return [bool, number, string]
}
const resolve = primitive()

resolve.then(console.log)
