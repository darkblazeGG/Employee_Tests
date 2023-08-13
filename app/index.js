const express = require('express');

const app = express();

app.get('/balance', (req, res) => {
    res.json({
        amount: 500,
    })
})

app.get('/friends', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Mikhail Semin'
        },
        {
            id: 2,
            name: 'Ivan Ivanov'
        }
    ])
})

app.get('/status', (req, res) => {
    res.json({
        text: 'Thinking...'
    })
})

app.listen(process.env.PORT)