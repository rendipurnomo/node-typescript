import jwt from 'jsonwebtoken'
import config from '../config/environment'

export const signJWT = (payload: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(payload, config.jwt_private as string, {
    ...(options && options),
    algorithm: 'RS256'
  })
}

export const verifyJWT = (token: string) => {
  try {
    const decoded = jwt.verify(token, config.jwt_public as string)
    return { valid: true, expired: false, decoded }
  } catch (error: any) {
    return { valid: false, expired: error.message === 'jwt expired', decoded: null }
  }
}
