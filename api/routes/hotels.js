import express from 'express';
import Hotel from '../models/Hotel.js';
import { countbyType, countbycity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyJWT.js';

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createHotel)

// UPDATE
router.put('/:id' , verifyAdmin,  updateHotel)

// DELETE
router.delete('/:id', verifyAdmin, deleteHotel);



// GET
router.get('/find/:id', getHotel)



// GET ALL
router.get('/', getHotels)
router.get('/countbycity', countbycity)
router.get('/countbytype', countbyType)




export default router