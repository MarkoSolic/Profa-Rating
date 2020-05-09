import express, { urlencoded } from 'express';
import cors from 'cors'
import dotenv from 'dotenv'

import connect from './db.js'
import register from './routes/auth'
import predavaci from './routes/predavaci'
const app = express()
const port = 3000

dotenv.config()

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(express.json())


app.use('/home', predavaci)
app.use('/user', register)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))