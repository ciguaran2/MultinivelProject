import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";
import { getArtisans, getArtisan, createArtisan, updateArtisan, deleteArtisan } from '../controllers/artisan.controller'
import {validateSchema} from '../middlewares/validator.middleware'
import {createArtisanSchema, updateArtisanSchema} from '../schemas/artisan.schema'

const router = Router()

router.get('/artisans', authRequired, getArtisans)
router.get('/artisans/:id', authRequired, getArtisan)
router.post('/artisans', authRequired, validateSchema(createArtisanSchema), createArtisan)
router.delete('/artisans/:id', authRequired, deleteArtisan)
router.put('/artisans/:id', authRequired, validateSchema(updateArtisanSchema), updateArtisan)

export default router