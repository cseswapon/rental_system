import { Pool } from "pg";
import config from "..";

export const pool = new Pool({
  connectionString: config.DB_URL,
  connectionTimeoutMillis: 10000,
});

const init = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(70) UNIQUE CHECK(email = LOWER(email)) NOT NULL,
        password TEXT NOT NULL,
        phone VARCHAR(255) NOT NULL,
        role TEXT CHECK (role IN ('admin','customer')) DEFAULT 'customer',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS vehicles(
        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(255) NOT NULL,
        type TEXT CHECK (type IN ('car','bike','van','SUV')),
        registration_number VARCHAR(50) UNIQUE NOT NULL,
        daily_rent_price NUMERIC CHECK(daily_rent_price > 0) NOT NULL,
        availability_status TEXT CHECK (availability_status IN ('available','booked')),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS bookings(
        id SERIAL PRIMARY KEY,
        customer_id INT REFERENCES users(id) ON DELETE CASCADE,
        vehicle_id INT REFERENCES vehicles(id) ON DELETE CASCADE,
        rent_start_date DATE NOT NULL,
        rent_end_date DATE NOT NULL,
        total_price NUMERIC CHECK(total_price > 0) NOT NULL,
        status TEXT CHECK (status IN ('active','cancelled','returned')),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        CHECK(rent_end_date > rent_start_date)
    );
  `);
};


export default init;
