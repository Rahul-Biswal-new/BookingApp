import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

// create room
export const createRoom =  async (req,res,next) =>{

    const hotelID = req.params.hotelID;
    const newRoom = new Room(req.body);
  
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


// update room availability
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne({"roomNumbers._id": req.params.id}, {
      $push:{
        "roomNumbers.$.unavailableDates": req.body.dates
      }
    })
  } catch (err) {
    next(err);
  }
};


//  delete room
  export const deleteRoom = async (req, res, next) => {
    const hotelID = req.params.hotelID;
    try {
      await Room.findByIdAndDelete(req.params.roomID);
      try{
        await Hotel.findByIdAndUpdate(hotelID, {
            $pull: {rooms: req.params.roomID}
        })
      }catch(err){}
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  }; 

//   get single room
  export const getRoom = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.roomID);
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