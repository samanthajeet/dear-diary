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

// Auth Endpoints
const authCtrl = require('./auth_controller');
app.get(`/auth/login`, authCtrl.login)


// Post Endpoints
const postCtrl = require('./posts_controllers')
app.get(`/api/diary/:id`, postCtrl.getPost)
app.get(`/api/diary/`, postCtrl.getPosts)
app.post(`/api/diary`, postCtrl.createPost)
app.delete(`/api/diary/:id`, postCtrl.deletePost)