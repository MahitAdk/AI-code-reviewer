import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });


const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Initialize the AI client
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const reviewCode = async () => {
  try {
    // Check if API key exists
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set in environment variables');
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash',
      systemInstruction:'You are a helpful AI assistant that reviews code for bugs, style issues, and improvement suggestions.'
     });

    const prompt = `Please review the following code for bugs, style issues, and improvement suggestions:`;
    
    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return response.text();
    
  } catch (error) {
    console.error('Error in reviewCode service:', error);
    
  }
};

export default reviewCode;