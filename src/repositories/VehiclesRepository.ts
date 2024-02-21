import database from './database';
import Vehicle from 'src/models/Vehicle';

const vehicleRepository = {
    create: (vehicle: Vehicle, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO vehicle (brand, model, color, year, km) VALUES (?, ?, ?, ?, ?)';
        const params = [vehicle.brand, vehicle.model, vehicle.color, vehicle.year, vehicle.km];
        database.run(sql, params, function (_err) {
            callback(this?.lastID)
        })
    },
    getAll: (callback: (vehicles: Vehicle[]) => void) => {
        const sql = 'SELECT * FROM vehicle'
        const params: any[] = []
        database.all(sql, params, (_err, row: any[]) => callback(row))
    },
    get: (id: number, callback: (vehicle: Vehicle) => void) => {
        const sql = 'SELECT * FROM vehicle WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row: any) => callback(row))
    },
    delete: (id: number, callback: (notFound: boolean) => void) => {
        const sql = "DELETE FROM vehicle WHERE id = ?"
        const params = [id]
        database.run(sql, params, function (_err) {
            callback(this.changes === 0)
        })
    }
}

export default vehicleRepository;