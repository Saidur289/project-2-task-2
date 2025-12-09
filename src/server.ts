import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import config from './config'
import initDb from './config/db'
import { authRoutes } from './modules/auth/auth.route'
import { vehicleRoutes } from './modules/vehicles/vehicle.routes'


const app = express()
const port = `${config.port}`

// middleware 
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
initDb()
app.get('/', (req:Request, res: Response) => {
  res.send('Hello World!')
})

// auth routes 
app.use("/api/v1/auth", authRoutes)
//vehicle routes
app.use("/api/v1/vehicles", vehicleRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
