import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [{ role: "user", content: message }]
        });

        res.json({ reply: completion.choices[0].message.content });
    } catch (err) {
        res.json({ reply: "Error contacting AI backend." });
    }
});

app.listen(3000, () => {
    console.log("AI backend running on http://localhost:3000");
});
