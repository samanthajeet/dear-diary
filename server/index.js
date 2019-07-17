require('dotenv').config()
const express = require('express'),
      massive = require('massive')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then( db => {
  app.set('db',db);
  app.listen(SERVER_PORT,() => console.log(`bingpot on port ${SERVER_PORT}`))
})


// Endpoints
const ctrl = require('./controller')
app.get(`/api/diary/getPosts`, ctrl.getPosts)