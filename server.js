const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || '3000'

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

        server.get('/about', (req, res) => {
            return app.render(req, res, '/about', req.query)
        })

        server.get('/blinky', (req, res) => {
            return app.render(req, res, '/blinky', req.query)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })


        server.listen(port, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:' + port)
        })
    })
