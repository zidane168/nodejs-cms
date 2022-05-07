const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    let a = 10;
    let b = 20;
    let c = a + b;
  res.send('Hello World! Zidane')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
