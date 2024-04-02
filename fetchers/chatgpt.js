require('dotenv').config()

const OpenAI = require("openai")

const openai = new OpenAI();

module.exports = {
  query: async (e, prompt) => {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "assistant", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      return (completion.choices[0]);
    } catch (err) {
      console.log(`Error [${err.error.code}]: ${err.error.message}`)
      return `Error [${err.error.code}]: ${err.error.message}`
    }
  }
}