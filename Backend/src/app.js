import express from 'express';
import AIrouter from './routes/ai.routes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(
  {
    path:'./.env'
  }
)

const app=express()

app.use(cors())
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/',(req,res)=>{
    res.send('Hello World!')    
})

app.use('/ai',AIrouter);

export default app;