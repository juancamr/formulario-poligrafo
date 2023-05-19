require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const port = 3000

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('../client/build/'))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD_DB || '',
    database: 'prueba'
})

connection.connect(function(err) {
    if (!err) console.log('Connected to mysql!');
    else console.log('Something went wrong');
})

app.post('/submit', (req, res) => {
    connection.query('INSERT INTO ...');
})

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/success.html')
})

app.get('/*', (req, res) => {
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})