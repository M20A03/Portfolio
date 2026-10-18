import { NextResponse } from "next/server";
import { PORTFOLIO_SYSTEM_PROMPT, synthesizeLocalResponse } from "@/data/chatKnowledge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body?.message?.trim();
    const history = Array.isArray(body?.history) ? body.history : [];

    if (!message) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // If Gemini API Key is available, invoke the official Gemini REST endpoint
    if (geminiKey) {
      try {
        const formattedContents = [
          ...history.slice(-8).map((h: { role: string; text: string }) => ({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.text }]
          })),
          {
            role: "user",
            parts: [{ text: message }]
          }
        ];

        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;

        const res = await fetch(geminiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": geminiKey,
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: PORTFOLIO_SYSTEM_PROMPT }]
            },
            contents: formattedContents,
            generationConfig: {
              temperature: 0.65,
              maxOutputTokens: 800,
            }
          }),
          signal: AbortSignal.timeout(8000), // 8s timeout protection
        });

        if (res.ok) {
          const data = await res.json();
          const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (generatedText) {
            // Find relevant suggestions from the local engine based on query
            const fallbackInfo = synthesizeLocalResponse(message);
            return NextResponse.json({
              reply: generatedText,
              suggestions: fallbackInfo.suggestions,
              source: "gemini"
            });
          }
        }
      } catch (geminiError) {
        console.warn("Gemini API call failed, falling back to local semantic engine:", geminiError);
      }
    }

    // High-precision semantic engine fallback
    const fallbackData = synthesizeLocalResponse(message);
    return NextResponse.json({
      reply: fallbackData.reply,
      suggestions: fallbackData.suggestions,
      source: "semantic_engine"
    });

  } catch (error) {
    console.error("Chat API route error:", error);
    const fallback = synthesizeLocalResponse("overview");
    return NextResponse.json(
      {
        reply: fallback.reply,
        suggestions: fallback.suggestions,
        source: "fallback"
      },
      { status: 200 }
    );
  }
}
