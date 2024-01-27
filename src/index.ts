/* eslint-disable import/no-duplicates */
import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import { routes } from './routes'
import { logger } from './utils/logger'
import cors from 'cors'
import deserializedToken from './middleware/deserializedToken'

// connect database
import './utils/connectDB'

const app: Application = express()
const port: number = 5000

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handler
app.use(cors())
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use(deserializedToken)
routes(app)

app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})
