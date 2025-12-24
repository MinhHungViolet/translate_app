const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const translateText = async (sourceText, context, request) => {
    if (!API_KEY) {
        throw new Error("Missing OpenRouter API Key. Please check .env.local");
    }

    const prompt = `
Context: ${context}
Request: ${request}

Source Text:
${sourceText}

---
Please translate the Source Text above according to the Context and Request provided. Output ONLY the translated text.
`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": window.location.origin, // Required by OpenRouter
                "X-Title": "Novel Translator App",     // Optional: App name
            },
            body: JSON.stringify({
                model: "google/gemma-3-27b-it:free",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                temperature: 0.7, // Good balance for creative translation
            }),
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error?.message || `API Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || "Translation failed.";
    } catch (error) {
        console.error("Translation Error:", error);
        throw error;
    }
};
