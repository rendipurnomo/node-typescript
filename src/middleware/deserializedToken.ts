import { type Request, type Response, type NextFunction } from 'express'
import { verifyJWT } from '../utils/jwt'

const deserializedToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.split(' ')[1]
  if (!accessToken) {
    return next()
  }
  const { expired, decoded } = verifyJWT(accessToken)

  if (decoded) {
    res.locals.user = decoded
    return next()
  }

  if (expired) {
    return next()
  }

  return next()
}

export default deserializedToken
