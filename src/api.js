/*
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

module.exports.handler - serverless(app);

router.get('/', (req, res) => {
    res.json({
        'hello': 'hi'
    });
});

app.use('/.netlify/functions/api', router)
*/

const app = require('express')();

app.get('/', (req, res) => {
    res.send('<p style="font-family: Arial; font-size: 3rem;">Hello, World!</p>')
});

app.listen(5000, ()=> {
    console.log('Server aberto na porta 5000');
})