const axios = require('axios');

// Replace YOUR_API_KEY with your actual API key
const API_KEY = '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';
const API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function generateResponse(prompt) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    };

    const data = {
        'prompt': prompt,
        'max_tokens': 60,
        'temperature': 0.7,
        'n': 1,
        'stop': '\n'
    };

    const response = await axios.post(API_ENDPOINT, data, { headers });
    const text = response.data.choices[0].text;

    return text.trim();
}

// Example usage
generateResponse('What should I do next in my quest?').then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});
