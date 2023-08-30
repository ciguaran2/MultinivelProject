import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";
import { getProduct, createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/products.controller'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {createProductSchema, updateProductSchema} from '../schemas/product.schema.js'
const router = Router()

router.get('/products', authRequired, getProducts)
router.get('/products/:id', authRequired, getProduct)
router.post('/products', authRequired, validateSchema(createProductSchema), createProduct)
router.delete('/products/:id', authRequired, deleteProduct)
router.put('/products/:id', authRequired, validateSchema(updateProductSchema), updateProduct)

export default router