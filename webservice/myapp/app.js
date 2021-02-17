//The code below is from https://expressjs.com/en/starter/hello-world.html and was an attempt to spin up
//a Web Server displaying Hello World.  First attempt failed.  Will try again.  Will focus on Pseudode items
//below first.

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//Main TODOs:
//Pseudocode main method to start an embedded server
//  Recommendation to define the API specs first using Postman
//Pseudocode back end service call to TMDB API 
//Pseudocode return of results from back end to web service through REST API 
//Pseudocode unit tests using Mocha


