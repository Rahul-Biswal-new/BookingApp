import express from 'express';
import { createUser, updateUser , deleteUser, getUser, getUsers} from '../controllers/user.js';
import { verifyToken } from '../utils/verifyJWT.js';

const router = express.Router();

// get simgle user
router.get('/:id', verifyToken, getUser)

// get users
router.get('/', getUsers)

// create user
router.post('/', createUser)

// update user
router.put('/:id', updateUser)

// delete user
router.delete('/:id', deleteUser)



export default router