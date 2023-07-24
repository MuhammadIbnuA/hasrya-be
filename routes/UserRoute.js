import express from 'express';
import { getUsers, registerUser, loginUser } from '../controllers/UserController.js';

const router2 = express.Router();

router2.get('/users', getUsers);
router2.post('/register', registerUser);
router2.post('/login', loginUser);

export default router2;
