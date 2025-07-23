import express from 'express';
import reviewCode from '../services/ai.service.js';

const AIresponse=async (req,res)=>{
    const code=req.body.code;//POST vayera req.body
    //GET=req.query

    if(!code) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const response=await reviewCode(code)

    return response; // Return the AI's response as JSON
}

//http://localhost:3000/ai/get-review 

export default AIresponse;