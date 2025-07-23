import express from 'express';
import AIresponse from '../controllers/ai.controller.js';

const AIrouter=express.Router()

AIrouter.post('/get-review',AIresponse);


export default AIrouter;