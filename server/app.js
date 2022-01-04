const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()

// logging middleware
app.use(morgan('dev'))

// body parsing
app.use(express.json())

// api routes
app.use('/api', require('./api'))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})