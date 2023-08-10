import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

// create room
export const createRoom =  async (req,res,next) =>{

    const hotelID = req.params.hotelID;
    const newRoom = req.Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelID, {
                $push : {rooms: savedRoom._id}
            })
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom)
    }catch(err){
        next(err);
    }
}


// update room
export const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next(err);
    }
  };


//  delete room
  export const deleteRoom = async (req, res, next) => {
    const hotelID = req.params.hotelID;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try{
        await Hotel.findByIdAndUpdate(hotelID, {
            $pull: {rooms: req.params.id}
        })
      }catch(err){}
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  }; 

//   get single hotel
  export const getRoom = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  };

//   get all rooms
  export const getRooms = async (req, res, next) => {

    try {
      const rooms = await Room.find()
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  };