import express from 'express';
import { createUser, updateUser , deleteUser, getUser, getUsers} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyJWT.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req,res,next) => {
    res.send("hello user")
})

router.get('/checkuser/:id', verifyUser)


// get simgle user
router.get('/:id', verifyToken, getUser)

// get users
router.get('/', verifyAdmin, getUsers)

// create user
router.post('/', createUser)

// update user
router.put('/:id', verifyUser, updateUser)

// delete user
router.delete('/:id', verifyUser, deleteUser)



export default router