import express from 'express'

const simulationRouter = express.Router()

simulationRouter.post('/', (req, res) => {
    // TODO: valor random para simulação
    res.json({})
})

export default simulationRouter;