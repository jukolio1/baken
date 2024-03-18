import  express  from "express";
import {config} from 'dotenv'
import pg  from 'pg'

config()

const app =  express()
  const pool =  new pg.Pool({
connectionString: process.env.DATABASE_URL,
ssl: false

})
app.get('/',(req,res) => {
    res.send('Hola Hola')
})

app.get('/ping', async (req,res) => {
    const result = await pool.query( 'SELEC NOW()')
    return res.jason(result.rows[0])
})

app.listen(3000)
console.log('Server on port',3000)