import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';    
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config()


const connect = async () =>{
try{
    const DB_OPTION = {
        dbName : 'HotelBookingDB'
    }
    await mongoose.connect(process.env.MONGO, DB_OPTION);
    console.log("connected to backend mongodb");
} catch(err){
    throw err;
}
};

// mongodb connection
mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected!");
})
mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected!");
})



// middlewares

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      status: errorStatus,
      message: errorMessage,
    });
  });




// listening port 
app.listen(8800, ()=>{
    connect();
    console.log("connected to backend, on port 8800");
}); 