import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
})

export const runtime = "edge"

const systemPrompt = `You are an expert TailwindCSS developer. A user will be provide you with a low-fidelity wireframe of an application and you will return a single HTML file that uses TailwindCSS to create the website. Use of creative license to make the applicaton more complete. If you need to insert an image, use the service placehold to create a placeholder image. Respond only with the HTML file.`


export async function POST(request: Request) {
  try {
    const { image } = await request.json()

    if (!image) {
      return NextResponse.json("No image provided", { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      max_tokens: 4096,
      model: "gpt-4-vision-preview",
      //provide a prompt to "system" (instructions)
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: [{ type: "image_url", image_url: image }] },
      ],
    });

    return NextResponse.json(completion);
    } catch (error) {
      return NextResponse.json("Internal server error", { status: 500 });
    }
}