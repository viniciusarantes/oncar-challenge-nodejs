import express from 'express';

const vehiclesRouter = express.Router()

vehiclesRouter.post('/', (req, res) => {
    res.status(201).send()
})

vehiclesRouter.get('/', (req, res) => {
    res.json([])
})

vehiclesRouter.get('/:id', (req, res) => {
    res.json({})
})

vehiclesRouter.delete('/:id', (req, res) => {
    res.status(200).send()
})

export default vehiclesRouter;