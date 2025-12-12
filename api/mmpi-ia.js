import fetch from "node-fetch";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

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

        return res.status(200).json(data);

    } catch (err) {
        console.error("Error en backend Gemini:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}
