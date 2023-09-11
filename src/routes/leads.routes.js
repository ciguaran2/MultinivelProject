import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";
import { getLeads, getLead, createLead, updateLead, deleteLead } from '../controllers/leads.controller'
import {validateSchema} from '../middlewares/validator.middleware'
import {createLeadSchema, updateLeadSchema} from '../schemas/lead.schema'

const router = Router()

router.get('/leads', authRequired, getLeads)
router.get('/leads/:id', authRequired, getLead)
router.post('/leads', authRequired, validateSchema(createLeadSchema), createLead)
router.delete('/leads/:id', authRequired, deleteLead)
router.put('/leads/:id', authRequired, validateSchema(updateLeadSchema), updateLead)

export default router