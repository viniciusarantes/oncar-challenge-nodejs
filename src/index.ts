import express from 'express';
import cors from 'cors';
import vehiclesRouter from './routers/VehiclesRouter';
import simulationRouter from './routers/SimulationRouter';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const PORT = process.env.PORT || 3000
const API_URL = process.env.API_URL || 'http://localhost'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions))

// ROUTES
const mainRouter = express.Router()
mainRouter.get("/", (req, res) => {
    res.end("API works")
})
app.use('/', mainRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/vehicles', vehiclesRouter)
app.use('/simulation', simulationRouter)
app.use((req, res) => {
    res.status(404)
})

app.listen(PORT, () => {
    console.log(`Server running ${API_URL}:${PORT}`)
})