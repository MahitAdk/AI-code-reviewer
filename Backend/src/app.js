import express from 'express';
import AIrouter from './routes/ai.routes.js';
import dotenv from 'dotenv';

dotenv.config(
  {
    path:'./.env'
  }
)

const app=express()

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/',(req,res)=>{
    res.send('Hello World!')    
})

app.use('/ai',AIrouter);

export default app;