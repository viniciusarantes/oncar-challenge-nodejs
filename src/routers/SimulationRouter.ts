import express from 'express'
import { simulationService } from '../services/SimulationService'

const simulationRouter = express.Router()

simulationRouter.post('/', (req, res) => {
    const { simulate } = simulationService()
    const result = simulate()
    res.json(result)
})

export default simulationRouter;