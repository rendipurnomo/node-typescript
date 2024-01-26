import joi from 'joi'
import ProductType from '../types/product.type'

export const createProductValidation = (payload: ProductType) => {
  const schema = joi.object({
    product_id: joi.string().required(),
    name: joi.string().required(),
    price: joi.number().allow('', null),
    size: joi.string().allow('', null)
  })
  return schema.validate(payload)
}

export const updateProductValidation = (payload: ProductType) => {
  const schema = joi.object({
    name: joi.string().allow('', null),
    price: joi.number().allow('', null),
    size: joi.string().allow('', null)
  })
  return schema.validate(payload)
}

export const deleteProductValidation = (payload: ProductType) => {
  const schema = joi.object({
    product_id: joi.string().required()
  })
  return schema.validate(payload)
}
