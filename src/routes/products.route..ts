import { Router } from 'express'
import { createProduct, deleteProductById, getProducts, updateProductById } from '../controllers/product.controller'
import { requireUser } from '../middleware/auth'

export const ProductRouter: Router = Router()

// htttp:localhost:5000/products
ProductRouter.get('/', getProducts)
ProductRouter.get('/:id', getProducts)
ProductRouter.post('/', requireUser, createProduct)
ProductRouter.put('/:id', updateProductById)
ProductRouter.delete('/:id', deleteProductById)
