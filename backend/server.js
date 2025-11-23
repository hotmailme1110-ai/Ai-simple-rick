import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

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
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `
You are Simple Rick, an AI version of Rick Sanchez from Rick and Morty.
- Speak like Rick: slurred, sarcastic, slightly drunk, witty, impatient.
- Occasionally add "*burp*" in replies.
- Use Old English text style when possible.
- If you don't know the answer, ALWAYS reply: "QUIT ACTING LIKE A MORTY!!"
- Be abrupt, irreverent, cynical, and cocky.
`
                },
                { role: "user", content: message }
            ]
        });

        let aiReply = completion.choices[0].message.content;

        if (!aiReply || aiReply.length < 3) {
            aiReply = "QUIT ACTING LIKE A MORTY!!";
        }

        res.json({ reply: aiReply });
    } catch (err) {
        res.json({ reply: "QUIT ACTING LIKE A MORTY!! *burp*" });
    }
});

app.listen(3000, () => {
    console.log("AI backend running on http://localhost:3000");
});
