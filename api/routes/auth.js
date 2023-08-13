import express from 'express';
import { login, register } from '../controllers/auth.js';
import { handleLogout } from '../controllers/logout.js';

const router = express.Router();

router.get('/logout'  , handleLogout)

router.post('/login', login)

router.post('/register', register)
 
export default router       