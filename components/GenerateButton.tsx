import { CogIcon } from "lucide-react"
import { useState } from "react"

export default function GenerateButton() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleGenerateHTML() {
    try {
      setIsLoading(true)
    } catch (error) {
      
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
