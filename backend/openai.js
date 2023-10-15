require('dotenv').config();

const OpenAI = require("openai");

// Your OpenAI API key
const openAIapiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: openAIapiKey });

let openAIResponse = null;

async function makeOpenAICall(inputtext) {
    try {
        console.log(inputtext);
        const response = await openai.completions.create({
            model: "gpt-3.5-turbo-instruct",
            prompt: inputtext,
            max_tokens: 1000,
            temperature: 0,
        });

        openAIResponse = response.choices[0].text;
        console.log(openAIResponse);
        return openAIResponse;
    } catch (error) {
        console.error('OpenAI API call error:', error);
        throw error;
    }
}

module.exports = { makeOpenAICall, openAIResponse };
