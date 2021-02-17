//The code below is from https://expressjs.com/en/starter/hello-world.html and was an attempt to spin up
//a Web Server displaying Hello World.  First attempt failed.  Will try again.  Will focus other items instead
//for now.

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//This was my code to make sure I could at least write to the console.  That worked, so it is just loading
//the local host that isn't functioning right. 
console.log('Hello world!') 