import { type Application, type Router, type Request, type Response } from 'express'
import { AuthRouter } from './users.route.'
import { ProductRouter } from './products.route.'

const _routes: Array<[string, Router]> = [
  ['/auth', AuthRouter],
  ['/products', ProductRouter]
]

export const routes = (app: Application) => {
  app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
      message: 'Welcome'
    })
  })
  _routes.forEach(([path, router]) => {
    app.use(path, router)
  })
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: 'Not found'
    })
  })
}
