import express from 'express';
import reviewCode from '../services/ai.service.js';

const AIresponse=async (req,res)=>{
    const prompt=req.query.prompt;//POST vayera req.body
    //GET=req.query

    if(!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const response=await reviewCode(prompt)

    return res.json({data: response}); // Return the AI's response as JSON
}

export default AIresponse;