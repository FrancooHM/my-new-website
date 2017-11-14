// const express = require('express')
// const next = require('next')
//
// const dev = process.env.NODE_ENV !== 'production'
// const port = process.env.PORT || 3000
// const host = process.env.HOST || '0.0.0.0'
//
// console.log("Getting env.PORT: " + port)
// const app = next({
//   dev
// })
// const handle = app.getRequestHandler()
// const swPath = path.join(__dirname, 'static', 'sw.js')
// const corePath = path.join(__dirname, 'static', 'core.js')
// const manifestPath = path.join(__dirname, 'static', 'manifest.json')
//
// app.prepare()
//   .then(() => {
//     const server = express()
//
//     server.get('/', (req, res) => {
//       return app.render(req, res, '/index', req.query)
//     })
//
//     server.get('/contact', (req, res) => {
//       return app.render(req, res, '/contact', req.query)
//     })
//
//     server.get('/goodbye', (req, res) => {
//       return app.render(req, res, '/goodbye', req.query)
//     })
//
//     server.get('/sw.js', (req, res) => {
//       res.setHeader('Cache-Control', 'no-cache')
//       return res.sendFile(swPath)
//     })
//
//     server.get('/core.js', (req, res) => {
//       res.setHeader('Cache-Control', 'no-cache')
//       return res.sendFile(corePath)
//     })
//
//     server.get('/manifest.json', (req, res) => {
//       res.setHeader('Cache-Control', 'no-cache')
//       return res.sendFile(manifestPath)
//     })
//
//     server.get('*', (req, res) => {
//       handle(req, res)
//     })
//
//     server.listen(port, host, (err) => {
//       if (err) throw err
//       console.log('Ready on http://localhost:' + port)
//     })
//   })
