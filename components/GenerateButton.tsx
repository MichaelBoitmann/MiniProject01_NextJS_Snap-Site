import { blobToBase64 } from "@/lib/blobToBase64"
import { getSvgAsImage } from "@/lib/getSvgAsImage"
import { useEditor } from "@tldraw/tldraw"
import { CogIcon } from "lucide-react"
import OpenAI from "openai"
import { useState } from "react"
import toast from "react-hot-toast"

export default function GenerateButton() {
  const [isLoading, setIsLoading] = useState(false)
  const editor = useEditor()

  async function handleGenerateHTML() {
    try {
      setIsLoading(true)

      // Get the image from tldraw
      const svg = await editor.getSvg(Array.from(editor.currentPageShapeIds))

      if (!svg) {
        throw new Error("No image selected")
      }

      // Convert the svg to a base64 image
      const png = await getSvgAsImage(svg!, {
        type: "png",
        quality: 1, 
        scale: 1,
      })

      const base64Image = await blobToBase64(png!)

      // Send image to API endpoint
      const response = await fetch('/api/generate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ image: base64Image })
      })

      if (!response.ok) {
        const error: string = await response.json()
        throw new Error(error)
      }


      const data: OpenAI.Chat.ChatCompletion = await response.json()
      const message = data.choices[0].message.content
      // throwing an error when image is not available
      // throw new Error("No image selected")
      if (!message) {
        throw new Error("No response");
      }

      const html = messageToHTML(message)
      // toast.success("Success")
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button onClick={handleGenerateHTML}
      className="bg-blue-500 text-white font-semibold rounded-lg 
      text-lg z-[1000] absolute top-4 left-1/2 -translate-x-1/2 py-2 
      px-4 shadow-md shadow-blue-800/50 hover:bg-blue-600">
      {isLoading ? (
        <span className="flex justify-center intems-center">
          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center">
          <CogIcon className="w-4 h-4 mr-1" />
          <span>Generate</span>
        </span>
      )}  
    </button>
  )
}
