import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import ProductType from '../types/product.type'

export const createProductDB = async (payload: ProductType) => {
  try {
    const createdProduct = await productModel.create(payload)
    return createdProduct
  } catch (error) {
    logger.error('Error create product', error)
  }
}

export const getProductsDB = async () => {
  try {
    const products = await productModel.find()
    return products
  } catch (error) {
    logger.error('Error get product', error)
  }
}

export const updateProductByIdDB = async (id: string, payload: ProductType) => {
  try {
    return await productModel.findOneAndUpdate({ product_id: id }, { $set: payload })
  } catch (error) {
    logger.error('Error update product', error)
  }
}

export const deleteProductByIdDB = async (id: string) => {
  try {
    return await productModel.findOneAndDelete({ product_id: id })
  } catch (error) {
    logger.error('Error delete product', error)
  }
}
