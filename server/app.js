require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const port = 3000

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('../client/build'))

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD_DB
})

con.connect(function(err) {
    if (!err) console.log('Connected to mysql!');
    else console.log('Something went wrong');
})

app.get('/*', function(req, res) {
    res.sendFile('index.html')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})