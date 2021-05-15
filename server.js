import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import routes from './routes/customers.js'
import connectDB from './config/db.js'
import cors from 'cors'

dotenv.config({ path:'./config/config.env'})
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/customers',routes)
 
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))