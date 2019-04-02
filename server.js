const express = require('express');
const app = express();
const path = require('path');
const {syncAndSeed, User} = require('./db/index')

const port = process.env.PORT || 3000;

syncAndSeed()

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/users', (req, res, next) => {
    //res.send('hi')
    User.findAll()
        .then(resp => res.send(resp))
})

app.post('/api/users', (req, res, next) => {
    User.create(req.body)
        .catch(next)
})

app.listen(port, ()=> console.log(`listening on port ${port}`))
