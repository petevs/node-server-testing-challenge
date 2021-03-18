const express = require('express')
const destinationsRouter = require('./destinations/destinations-router')

const server = express()

server.use(express.json())
server.use('/destinations', destinationsRouter)

server.get("/", ( req, res ) => {
    res.json({
        message: "Welcome to my API"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
})

module.exports = server