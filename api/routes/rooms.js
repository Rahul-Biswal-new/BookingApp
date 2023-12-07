import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyJWT.js';

const router = express.Router();



// CREATE
router.post('/:hotelID' , verifyAdmin, createRoom)

// UPDATE
router.put('/:id' , verifyAdmin, updateRoom)
router.put('/availability/:id', updateRoomAvailability)

// DELETE
router.delete('/:roomID/:hotelID' , verifyAdmin, deleteRoom);



// GET
router.get('/:roomID', getRoom)



// GET ALL
router.get('/', getRooms)

export default router