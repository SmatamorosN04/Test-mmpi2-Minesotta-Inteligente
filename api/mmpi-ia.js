// api/gemini.js
import dotenv from "dotenv";
dotenv.config();
const GEMINI_KEY = process.env.GEMINI_KEY;
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // ← IMPORTANTE para permitir que tu frontend llame
console.log("API Key leída:", process.env.GEMINI_KEY ? "OK" : "No encontrada");

app.post("/mmpi-ia", async (req, res) => {
    try {
        const body = req.body;

        const resp = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + process.env.GEMINI_KEY,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }
        );

        const data = await resp.json();
        console.log("Respuesta de Gemini:", data); // <--- Esto
        res.json(data);

    } catch (err) {
        console.error("Error en backend Gemini:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.listen(3000, () => console.log("API segura activa en http://localhost:3000"));
