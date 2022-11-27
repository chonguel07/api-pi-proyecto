import { Router } from "express";
import {getDenuncias, createDenuncias, updateDenuncias, deleteDenuncias, getDenuncia}
    from '../controllers/denuncias.controller.js'

const router = Router()

router.get('/denuncias',getDenuncias)

router.get('/denuncias/:id',getDenuncia)

router.post('/denuncias',createDenuncias)

router.patch('/denuncias/:id',updateDenuncias)

router.delete('/denuncias/:id',deleteDenuncias)

export default router