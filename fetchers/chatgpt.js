require('dotenv').config()

const OpenAI = require("openai")

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = {
  query: async (e, prompt) => {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1,
      });

      return (completion.choices[0]);
    } catch (err) {
      console.log(`Error [${err.error.code}]: ${err.error.message}`)
      return `Error [${err.error.code}]: ${err.error.message}`
    }
  }
}