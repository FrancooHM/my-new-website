const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

console.log("Getting env.PORT: " + port);
const app = next({
    dev
})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/', (req, res) => {
            return app.render(req, res, '/index', req.query)
        })

        server.get('/contact', (req, res) => {
            return app.render(req, res, '/contact', req.query)
        })

        server.get('/blinky', (req, res) => {
            return app.render(req, res, '/blinky', req.query)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })


        server.listen(port, host, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:' + port)
        })
    })
