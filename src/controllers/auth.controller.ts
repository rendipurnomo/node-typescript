import { type Request, type Response } from 'express'
import { createSessionValidation, createUserValidation, refreshSessionValidation } from '../validations/user.validation'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger'
import { createUserDB, getUserByEmailDB } from '../services/auth.service'
import { compare, hashing } from '../utils/hashing'
import { signJWT, verifyJWT } from '../utils/jwt'

export const registerUser = async (req: Request, res: Response) => {
  req.body.user_id = uuidv4()
  const { error, value } = createUserValidation(req.body)

  if (error) {
    logger.error('Error create user', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message
    })
  }

  try {
    value.password = await hashing(value.password)
    await createUserDB(value)
    logger.info('Success create user')
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: 'Success create user'
    })
  } catch (error) {
    logger.error('Error create user', error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'Failed to create user'
    })
  }
}

export const createSession = async (req: Request, res: Response) => {
  const { error, value } = createSessionValidation(req.body)
  if (error) {
    logger.error('Error create session', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message
    })
  }

  try {
    const user: any = await getUserByEmailDB(value.email)
    const isPasswordMatch = await compare(value.password, user.password)
    if (!user) {
      logger.error('Error create session', 'User not found')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'User not found'
      })
    }

    if (!isPasswordMatch) {
      logger.error('Error create session', 'Password not match')
      return res.status(401).send({
        status: false,
        statusCode: 401,
        message: 'Password not match'
      })
    }

    const accesToken = signJWT({ ...user }, { expiresIn: '1d' })
    const refreshToken = signJWT({ ...user }, { expiresIn: '1y' })
    logger.info('Success create session')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Login success',
      data: {
        accesToken,
        refreshToken
      }
    })
  } catch (error: any) {
    logger.error('Error create session', error.message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.message
    })
  }
}

export const refreshSession = async (req: Request, res: Response) => {
  const { error, value } = refreshSessionValidation(req.body)
  if (error) {
    logger.error('Error refresh session', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message
    })
  }
  try {
    const { decoded }: any = verifyJWT(value.refreshToken)
    const user = await getUserByEmailDB(decoded._doc.email)
    if (!user) {
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'User not found'
      })
    }
    const accesToken = signJWT({ ...user }, { expiresIn: '1d' })
    logger.info('Success refresh session')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Refresh session success',
      data: {
        token: accesToken
      }
    })
  } catch (error: any) {
    logger.error('Error refresh session', error.message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.message
    })
  }
}
