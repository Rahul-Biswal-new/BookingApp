import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
  
    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (err) {
      next(err);
    }
  };
  export const updateHotel = async (req, res, next) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedHotel);
    } catch (err) {
      next(err);
    }
  };
  export const deleteHotel = async (req, res, next) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  export const getHotel = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  };
  export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };

export const countbycity = async (req,res,next) =>{
  const cities =  req.query.cities.split(',')
  console.log(cities);
    try{
      const list = await Promise.all(cities.map(city=> {
        // return Hotel.find({city: city}).length
        return Hotel.countDocuments({city: city}) 
      }))
      console.log(list);

      res.status(200).json(list)
    }catch(err){
      next(err);
    }
}

export const countbyType = async (req,res,next) =>{

  try{
      const hotelCount =  await Hotel.countDocuments({type: 'hotel'})
      const apartmentCount = await  Hotel.countDocuments({type: 'apartment'})
      const resortCount =  await Hotel.countDocuments({type: 'resort'})
      const villaCount = await Hotel.countDocuments({type: 'villa'})
      
       res.status(200).json([
        {type: "hotel", count: hotelCount},
        {type: "apartment", count: apartmentCount},
        {type: "resort", count: resortCount},
        {type: "villa", count: villaCount}
       ])

    }catch(err){
      next(err);
    }
}