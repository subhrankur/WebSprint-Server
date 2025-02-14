require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro-exp-02-05" });

const prompt = "Explain how AI works";

(async () => {
    const result = await model.generateContentStream(prompt);
    for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        process.stdout.write(chunkText);
    }
})();