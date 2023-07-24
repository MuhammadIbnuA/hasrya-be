import express from 'express';
import { getPasiens, getPasienById, savePasien, updatePasien, deletePasien } from '../controllers/PasienController.js';

const router1 = express.Router();

router1.get('/pasiens', getPasiens);
router1.get('/pasiens/:id', getPasienById);
router1.post('/pasiens', savePasien);
router1.patch('/pasiens/:id', updatePasien);
router1.delete('/pasiens/:id', deletePasien);

export default router1;
