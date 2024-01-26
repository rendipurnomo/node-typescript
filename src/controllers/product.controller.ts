import { Request, Response } from 'express'
import { createProductValidation, updateProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'
import { createProductDB, deleteProductByIdDB, getProductsDB, updateProductByIdDB } from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'
import ProductType from '../types/product.type'

export const getProducts = async (req: Request, res: Response) => {
  const products: any = await getProductsDB()
  const {
    params: { id }
  } = req

  if (id) {
    const filteredProduct = products.filter((product: ProductType) => {
      return product.product_id === id
    })
    if (filteredProduct.length === 0) {
      logger.error('Error get product')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Product not found'
      })
    } else {
      logger.info('Success get product')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Success get product',
        data: filteredProduct
      })
    }
  }

  logger.info('Success get all products')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Success get all products',
    data: products
  })
}

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('Error create product', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message
    })
  }
  try {
    await createProductDB(value)
    logger.info('Success create product')
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: 'Success create product'
    })
  } catch (error) {
    logger.error('Error create product', error)
    return res.status(500).send({
      status: false,
      statusCode: 422,
      message: 'Failed to create product'
    })
  }
}

export const updateProductById = async (req: Request, res: Response) => {
  const { id } = req.params
  const { error, value } = updateProductValidation(req.body)

  try {
    const result = await updateProductByIdDB(id, value)
    if (!result) {
      logger.error('Error update product')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Product not found'
      })
    }
    logger.info('Success update product')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Success update product'
    })
  } catch (error) {
    logger.error('Error update product', error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'Failed to update product'
    })
  }
}

export const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await deleteProductByIdDB(id)
    if (!result) {
      logger.error('Error delete product')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Product not found'
      })
    }
    logger.info('Success delete product')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Success delete product'
    })
  } catch (error) {
    logger.error('Error delete product', error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'Failed to delete product'
    })
  }
}
