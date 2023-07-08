import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
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


mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected!");
})
mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected!");
})



app.get('/', (req,res)=>{
    res.send('<h1>Hello, homepage!</h1>'); 
})
app.get('/users', (req,res)=>{
    res.send('<h1>Hello, users!</h1>'); 
})



app.listen(8800, ()=>{
    connect();
    console.log("connected to backend, on port 8800");
}); 