import {Pool }from "pg"
import config from "."
export const pool = new Pool({
    connectionString: `${config.connection_str}`
})
const initDb = async() => {
 await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password TEXT,
    phone VARCHAR(15),
    role VARCHAR(50) NOT NULL
    )
    `)
    await pool.query(`
        CREATE TABLE IF NOT EXISTS vehicles(
        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(150) NOT NULL,
        type VARCHAR(20) NOT NULL CHECK (type IN ('car', 'bike', 'SUV')),
        registration_number TEXT UNIQUE,
        daily_rent_price INT NOT NULL CHECK (daily_rent_price >= 0),
        availability_status VARCHAR(30) NOT NULL CHECK (availability_status IN ('available', 'booked'))
        )
        `)
}
export default initDb