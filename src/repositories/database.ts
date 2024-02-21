import sqlite3 from 'sqlite3';

const DBSOURCE = 'db.sqlite'

const SQL_CREATE_VEHICLE = `
    CREATE TABLE vehicle (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand CHAR(50) NOT NULL,
        model CHAR(50) NOT NULL,
        color CHAR(20) NOT NULL,
        year INTEGER NOT NULL,
        km BIGINT NOT NULL
    )
`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err;
    } else {
        console.log(`${DBSOURCE} connected.`)
        database.run(SQL_CREATE_VEHICLE, (_err) => {
            if (!_err) {
                console.log("Table 'vehicle' created.")
            }
        })
    }
})

export default database;