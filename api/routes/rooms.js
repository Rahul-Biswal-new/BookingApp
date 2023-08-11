import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyJWT.js';

const router = express.Router();



// CREATE
router.post('/:hotelID' , createRoom)

// UPDATE
router.put('/:id' , updateRoom)

// DELETE
router.delete('/:id/:hotelID' ,  deleteRoom);



// GET
router.get('/:id', getRoom)



// GET ALL
router.get('/', getRooms)

export default router