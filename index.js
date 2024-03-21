import express from "express";
import { config } from 'dotenv';
import pg from 'pg';

config();

const app = express();
const pool = new pg.Pool({
 connectionString: process.env.DATABASE_URL,
 ssl: false
});

app.get('/', (req, res) => {
 res.send('Hola Hola');
});

app.get('/ping', async (req, res) => {
 try {
    const result = await pool.query('SELECT NOW()');
    return res.json(result.rows[0]);
 } catch (error) {
    console.error('Error al realizar la consulta:', error);
    return res.status(500).json({ error: 'Error al realizar la consulta' });
 }
});

app.listen(3000, () => {
 console.log('Server on port', 3000);
});
