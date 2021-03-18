const express = require('express')
const destinations = require('./destinations-model')

const router = express.Router()

router.get('/', async ( req, res, next ) => {
    try {
        res.status(200).json(await destinations.find())
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async ( req, res, next ) => {
    try {
        const destination = await destinations.findById(req.params.id)
        if(!destination){
            return res.status(404).json({
                message: "destination not found"
            })
        }
        res.status(200).json(destination)
    } catch (err) {
        next(err)
    }
})

router.post('/', async ( req, res, next ) => {
    try{
        const result = await destinations.create(req.body)
        res.status(201).json(result)
    } catch(err){
        next(err)
    }
})

router.delete('/:id', async ( req, res, next ) => {
    try {
        const result = await destinations.remove(req.params.id)
        res.status(200).json(result)
    } catch(err) {
        next(err)
    }
})

module.exports = router