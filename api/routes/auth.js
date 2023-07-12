import express from 'express';

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('<h1>hello this is auth endpoint</h1>')
})

router.get('/register', (req,res)=>{
    res.send('<h1>hello this is auth register endpoint</h1>')
})

export default router       