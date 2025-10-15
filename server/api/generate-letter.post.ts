import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const {
      letterType,
      language,
      reasons,
      customReason,
      yourName,
      position,
      managerName,
      companyName,
      lastDay,
    } = body;

    // Get OpenAI API key from environment
    const config = useRuntimeConfig();
    const apiKey = config.OPENAI_API_KEY;
    const model = config.OPENAI_MODEL;

    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage:
          "OpenAI API key not configured. Please add NUXT_OPENAI_API_KEY to your .env file",
      });
    }

    // Build the prompt based on letter type and reasons
    const prompt = buildPrompt(
      letterType,
      language,
      reasons,
      customReason,
      yourName,
      position,
      managerName,
      companyName,
      lastDay
    );

    // Create OpenAI provider with API key
    const openai = createOpenAI({
      apiKey: apiKey,
    });

    console.log("model: ", model);

    // Generate the letter using OpenAI (using gpt-3.5-turbo for cost efficiency)
    const result = await generateText({
      model: openai(model),
      prompt,
      temperature: 0.7,
    });

    // Log token usage
    console.log("=== AI Generation Stats ===");
    if (result.usage) {
      console.log("Token usage:", JSON.stringify(result.usage, null, 2));
    }
    console.log("Generated letter length:", result.text.length, "characters");
    console.log(
      "Generated letter preview:",
      result.text.substring(0, 100) + "..."
    );
    console.log("==========================");

    return {
      success: true,
      letter: result.text,
    };
  } catch (error: any) {
    console.error("Error generating letter:", error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Failed to generate letter",
    });
  }
});

function buildPrompt(
  letterType: string,
  language: string,
  reasons: string[],
  customReason: string,
  yourName: string,
  position: string,
  managerName: string,
  companyName: string,
  lastDay: string
): string {
  const lastDayFormatted = lastDay
    ? new Date(lastDay).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "[Last Day of Work]";

  let toneInstruction = "";
  let styleGuidelines = "";

  if (letterType === "formal") {
    toneInstruction =
      "highly professional, diplomatic, gracious, and respectful";
    styleGuidelines = `
- Use formal business letter language with proper structure
- Express sincere gratitude for opportunities and growth
- Highlight positive experiences and professional development
- Emphasize smooth transition and willingness to help
- Maintain an appreciative and courteous tone throughout
- Use formal phrases like "I am writing to formally notify", "I sincerely appreciate", "it has been a privilege"
- Show respect for leadership and colleagues
- Focus on future success for the company
- Professional and polished language befitting a corporate environment`;
  } else if (letterType === "casual") {
    toneInstruction =
      "friendly, relaxed, warm, and conversational while remaining professional";
    styleGuidelines = `
- Use natural, conversational language as if talking to a friend
- Be genuine, authentic, and personable
- Keep it upbeat, positive, and optimistic
- Express appreciation in a sincere but casual way
- Use relaxed phrases like "I wanted to let you know", "I've really enjoyed", "It's been awesome"
- Show genuine warmth towards colleagues and experiences
- Keep it light and friendly but not overly informal
- Make it feel human and relatable, not stiff or robotic
- Can include personal touches and memories`;
  } else if (letterType === "angry") {
    toneInstruction =
      "frustrated, direct, brutally honest, and unapologetically critical";
    styleGuidelines = `
- BE ANGRY and express real frustration and disappointment
- Call out specific problems, mismanagement, or toxic behavior directly
- Use strong, assertive language that shows you're fed up
- Don't sugarcoat issues - be blunt and honest about what's wrong
- Express how the situation has negatively impacted you
- Make it clear you're done tolerating unacceptable conditions
- Use phrases like "I can no longer tolerate", "The situation has become unbearable", "I've had enough of", "This environment is unacceptable"
- Show your anger but keep it coherent (not ranting)
- Don't hold back on expressing dissatisfaction and criticism
- Make them understand they're losing an employee because of THEIR failures
- It's okay to burn bridges - this is your moment to speak truth
- Be intense and passionate about your grievances`;
  }

  const reasonsList = [...reasons];
  if (customReason) {
    reasonsList.push(customReason);
  }

  const reasonsText =
    reasonsList.length > 0
      ? `\n\nReasons for leaving:\n${reasonsList
          .map((r) => `- ${r}`)
          .join("\n")}`
      : "";

  // Language instruction
  const languageInstruction =
    language === "tagalog"
      ? "CRITICAL: Write the ENTIRE resignation letter in TAGALOG (Filipino language). Use proper Tagalog grammar and vocabulary."
      : "CRITICAL: Write the ENTIRE resignation letter in ENGLISH. Use proper English grammar and vocabulary.";

  return `You are a professional resignation letter writer. Generate a ${toneInstruction} resignation letter with the following details:

${languageInstruction}

**Letter Details:**
- Employee Name: ${yourName || "[Your Name]"}
- Position: ${position || "[Your Position]"}
- Manager Name: ${managerName || "[Manager's Name]"}
- Company Name: ${companyName || "[Company Name]"}
- Last Day of Work: ${lastDayFormatted}

**Letter Type:** ${letterType}

**Style Guidelines:**${styleGuidelines}
${reasonsText}

**Important Instructions:**
1. Write ONLY the body paragraphs of the letter (no date, addresses, salutation, or closing)
2. Start directly with the opening paragraph
3. Do NOT include "Dear [Manager's Name]" or any greeting
4. Do NOT include closing phrases like "Sincerely" or signature
5. Write 2-3 well-structured paragraphs
6. Incorporate the reasons naturally into the letter
7. CRITICAL: Fully embody the ${letterType} tone - make it ${toneInstruction}
8. Make it sound natural and human, not robotic or generic
9. Keep it concise but emotionally authentic to the letter type
10. ${
    letterType === "angry"
      ? "For ANGRY letters: Be REALLY angry, frustrated, and critical. Don't hold back - express genuine outrage and dissatisfaction."
      : letterType === "formal"
      ? "For FORMAL letters: Be extremely professional, gracious, and diplomatic. Show deep respect and appreciation."
      : "For CASUAL letters: Be warm, friendly, and conversational. Sound like you're talking to a colleague you genuinely like."
  }
11. Use proper grammar, spelling, and punctuation in ${
    language === "tagalog" ? "Tagalog" : "English"
  }
12. Make sure the emotion matches the letter type perfectly - readers should FEEL the ${letterType} tone

Generate the letter body now in ${
    language === "tagalog" ? "TAGALOG" : "ENGLISH"
  }:`;
}
