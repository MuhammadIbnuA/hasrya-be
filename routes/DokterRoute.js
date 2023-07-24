import express from 'express';
import { getDokters, getDokterById, saveDokter, updateDokter, deleteDokter } from '../controllers/DokterController.js';

const router = express.Router();

router.get('/dokters', getDokters);
router.get('/dokters/:id', getDokterById);
router.post('/dokters', saveDokter);
router.patch('/dokters/:id', updateDokter);
router.delete('/dokters/:id', deleteDokter);

export default router;
