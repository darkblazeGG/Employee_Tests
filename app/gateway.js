const Gateway = require('micromq/gateway')

const app = new Gateway({
    microservices: ['M1', 'M2'],
    rabbit: {
        url: process.env.RABBIT_URL
    }
})

app.get(['/friends', '/status'], async (req, res) => {
    await res.delegate('users')
})

app.listen(process.env.PORT)

