import express from 'express';
import cors from 'cors';
import vehiclesRouter from './routers/VehiclesRouter';
import simulationRouter from './routers/SimulationRouter';

const PORT = process.env.PORT || 3000
const API_URL = process.env.API_URL || 'http://localhost'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ['http://localhost:3000']
}))

// ROUTES
app.use('/vehicles', vehiclesRouter)
app.use('/simulation', simulationRouter)
app.use((req, res) => {
    res.status(404)
})

app.listen(PORT, () => {
    console.log(`Server running ${API_URL}:${PORT}`)
})