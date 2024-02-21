import express from 'express';
import Vehicle from 'src/models/Vehicle';
import vehicleRepository from '../repositories/VehiclesRepository';

const vehiclesRouter = express.Router()

vehiclesRouter.post('/', (req, res) => {
    const vehicle: Vehicle = req.body
    vehicleRepository.create(vehicle, (id) => {
        if (id) {
            res.status(201).location(`/vehicles/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
})

vehiclesRouter.get('/', (req, res) => {
    vehicleRepository.getAll((vehicles) => res.json(vehicles))

})

vehiclesRouter.get('/:id', (req, res) => {
    const id: number = +req.params.id;
    vehicleRepository.get(id, (vehicle) => {
        if (vehicle) {
            res.json(vehicle)
        } else {
            res.status(404).send()
        }
    })
})

vehiclesRouter.delete('/:id', (req, res) => {
    const id = +req.params.id
    vehicleRepository.delete(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(200).send()
        }
    })
})

export default vehiclesRouter;