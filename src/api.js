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

app.use('/.netlify/functions/api',router)