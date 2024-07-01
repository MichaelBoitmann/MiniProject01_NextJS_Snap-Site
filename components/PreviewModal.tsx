import { XIcon } from "lucide-react"

export default function PreviewModal() {
  return (
    <dialog className="fixed inset-0 flex justify-center items-center z-[2000] bg-black/50 h-screen w-screen">
      <div className="bg-white roudned-lg shadow-xl flex flex-col h-[calc(100%-100px)] w-[calc(100%-100px)]">
        <header className="relative p-3 border-b">
          <div className="flex justify-center space-x-2">
            <span>Preview</span>
            <span>Code</span>
          </div>
          <button className="absolute right-3 top-3 rounded-lg hover:bg-gray-200">
            <XIcon className="w-6 h-6 text-gray-600" />
          </button>
        </header>
        <iframe srcDoc="" className="w-full h-full" />
      </div>
    </dialog>    
  )
}
