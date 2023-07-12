import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';    
import roomsRoute from './routes/rooms.js';
const app = express();
dotenv.config()


const connect = async () =>{
try{
    await mongoose.connect(process.env.MONGO);
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

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);





// listening port 
app.listen(8800, ()=>{
    connect();
    console.log("connected to backend, on port 8800");
}); 