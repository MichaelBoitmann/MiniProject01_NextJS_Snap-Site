import OpenAi from 'openai'

new OpenAi({
  apiKey: process.env.OPENAI_API_KEY
})


export async function POST() {
  await openai.chat.completions.create({
    
  })
}