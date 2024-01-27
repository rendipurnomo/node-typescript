/* eslint-disable import/no-duplicates */
import joi from 'joi'
import type UserType from '../types/user.type'

export const createUserValidation = (payload: UserType) => {
  const schema = joi.object({
    user_id: joi.string().required(),
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().allow('', null)
  })
  return schema.validate(payload)
}

export const createSessionValidation = (payload: UserType) => {
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
  })
  return schema.validate(payload)
}

export const refreshSessionValidation = (payload: UserType) => {
  const schema = joi.object({
    refreshToken: joi.string().required()
  })
  return schema.validate(payload)
}
