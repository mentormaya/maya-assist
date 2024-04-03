const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

module.exports = {
  query: async (e, prompt) => {
    try {
      // prompt = "Write a story about a magic backpack."
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return (response.text());
    } catch (err) {
      console.log(err)
      return err
    }
  }
}