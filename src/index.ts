import express, { type Application, type NextFunction, type Request, type Response } from 'express'

const app: Application = express()
const port: number = 5000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ data: 'Hello World!' })
})

app.listen(port, () => { console.log(`Server running on port ${port}`) })
