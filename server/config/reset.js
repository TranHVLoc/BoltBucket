import { pool } from './database.js'
import './dotenv.js'

import carData from '../data/cars.js'
import exteriorData from '../data/exteriors.js'
import interiorData from '../data/interiors.js'
import roofData from '../data/roofs.js'
import wheelData from '../data/wheels.js'


/**
 * Reset the cars table
 */
const createCarsTable = async () => {
    const createTabQuery = `
        DROP TABLE IF EXISTS cars;

        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            isconvertible BOOLEAN NOT NULL,
            exterior INTEGER NOT NULL,
            roof INTEGER NOT NULL,
            wheels INTEGER NOT NULL,
            interior INTEGER NOT NULL,
            price INTEGER NOT NULL
        );
    `;

    try {
        const res = await pool.query(createTabQuery);
        console.log('🎉 Cars table created successfully');
    } catch (error) {
        console.error('⚠️ Error creating cars table', error);
    }
}

/**
 * Seed the locations table with the exteriorData
 */
const seedCarsTable = async () => {
    await createCarsTable();

    // Traverse the exteriorData array and insert each exterior object into the locations table
    carData.forEach((car) => {
        const insertQuery = {
            text: `
                INSERT INTO cars (name, isconvertible, exterior, roof, wheels, interior, price)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
            `
        }
        // Define an array of values for the exterior object
        const values = [
            car.name,
            car.isconvertible,
            car.exterior,
            car.roof,
            car.wheels,
            car.interior,
            car.price
        ];
    
        // Execute the query
        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ Error inserting car', error);
                return;
            }
            
            console.log(`✅ Cars: ${car.name} added successfully`);
        })
    })
}


/**
 * Reset the exteriors table and populate it with the exteriorData
 */
const createExteriorsTable = async () => {
    const createTabQuery = `
        DROP TABLE IF EXISTS exteriors;

        CREATE TABLE IF NOT EXISTS exteriors (
            id SERIAL PRIMARY KEY,
            color VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price INTEGER NOT NULL
        );
    `;

    try {
        const res = await pool.query(createTabQuery);
        console.log('🎉 Exteriors table created successfully');
    } catch (error) {
        console.error('⚠️ Error creating exteriors table', error);
    }
}

/**
 * Seed the locations table with the exteriorData
 */
const seedExteriorsTable = async () => {
    await createExteriorsTable();

    // Traverse the exteriorData array and insert each exterior object into the locations table
    exteriorData.forEach((exterior) => {
        const insertQuery = {
            text: `
                INSERT INTO exteriors (color, image, price)
                VALUES ($1, $2, $3)
            `
        }
        // Define an array of values for the exterior object
        const values = [
            exterior.color,
            exterior.image,
            exterior.price
        ];
    
        // Execute the query
        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ Error inserting exterior', error);
                return;
            }
            
            console.log(`✅ Exteriors: ${exterior.color} added successfully`);
        })
    })
}


/**
 * Reset the interiors table and populate it with the exteriorData
 */
const createInteriorsTable = async () => {
    const createTabQuery = `
        DROP TABLE IF EXISTS interiors;

        CREATE TABLE IF NOT EXISTS interiors (
            id SERIAL PRIMARY KEY,
            color VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price INTEGER NOT NULL,
            iscombo BOOLEAN
        );
    `;

    try {
        const res = await pool.query(createTabQuery);
        console.log('🎉 Interiors table created successfully');
    } catch (error) {
        console.error('⚠️ Error creating interiors table', error);
    }
}


/**
 * Seed the locations table with the exteriorData
 */
const seedInteriorsTable = async () => {
    await createInteriorsTable();

    // Traverse the exteriorData array and insert each exterior object into the locations table
    interiorData.forEach((interior) => {
        const insertQuery = {
            text: `
                INSERT INTO interiors (color, image, price, iscombo)
                VALUES ($1, $2, $3, $4)
            `
        }
        // Define an array of values for the exterior object
        const values = [
            interior.color,
            interior.image,
            interior.price,
            interior.iscombo
        ];
    
        // Execute the query
        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ Error inserting interior', error);
                return;
            }
            
            console.log(`✅ Interiors: ${interior.color} added successfully`);
        })
    })
}


/**
 * Reset the wheels table and populate it with the wheelsData
 */
const createWheelsTable = async () => {
    const createTabQuery = `
        DROP TABLE IF EXISTS wheels;

        CREATE TABLE IF NOT EXISTS wheels (
            id SERIAL PRIMARY KEY,
            color VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price INTEGER NOT NULL
        );
    `;

    try {
        const res = await pool.query(createTabQuery);
        console.log('🎉 Wheels table created successfully');
    } catch (error) {
        console.error('⚠️ Error creating wheels table', error);
    }
}

/**
 * Seed the wheels table with the wheelsData
 */
const seedWheelsTable = async () => {
    await createWheelsTable();

    // Traverse the wheelsData array and insert each wheel object into the wheels table
    wheelData.forEach((wheel) => {
        const insertQuery = {
            text: `
                INSERT INTO wheels (color, image, price)
                VALUES ($1, $2, $3)
            `
        }
        // Define an array of values for the wheel object
        const values = [
            wheel.color,
            wheel.image,
            wheel.price
        ];
    
        // Execute the query
        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ Error inserting wheel', error);
                return;
            }
            
            console.log(`✅ Wheels: ${wheel.color} added successfully`);
        })
    })
}


/**
 * Reset the roofs table and populate it with the roofsData
 */
const createRoofsTable = async () => {
    const createTabQuery = `
        DROP TABLE IF EXISTS roofs;

        CREATE TABLE IF NOT EXISTS roofs (
            id SERIAL PRIMARY KEY,
            color VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price INTEGER NOT NULL,
            isconvertible BOOLEAN NOT NULL
        );
    `;

    try {
        const res = await pool.query(createTabQuery);
        console.log('🎉 Roofs table created successfully');
    } catch (error) {
        console.error('⚠️ Error creating roofs table', error);
    }
}

/**
 * Seed the roofs table with the roofsData
 */
const seedRoofsTable = async () => {
    await createRoofsTable();

    // Traverse the roofsData array and insert each roof object into the roofs table
    roofData.forEach((roof) => {
        const insertQuery = {
            text: `
                INSERT INTO roofs (color, image, price, isconvertible)
                VALUES ($1, $2, $3, $4)
            `
        }
        // Define an array of values for the roof object
        const values = [
            roof.color,
            roof.image,
            roof.price,
            roof.isconvertible
        ];
    
        // Execute the query
        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ Error inserting roof', error);
                return;
            }
            
            console.log(`✅ Roofs: ${roof.color} added successfully`);
        })
    })

}

// Invoke the seedCarsTable function
seedCarsTable();

// Invoke the seedExteriorsTable function
seedExteriorsTable();

// Invoke the seedInteriorsTable function
seedInteriorsTable();

// Invoke the seedWheelsTable function
seedWheelsTable();

// Invoke the seedRoofsTable function
seedRoofsTable();

