import { XIcon } from "lucide-react"
import PreviewTab from "@/components/PreviewTab"

type Props = {
  html: string;
  closeModal: () => void
}

export default function PreviewModal({ html. closeModal }: Props) {
  return (
    <dialog className="fixed inset-0 flex justify-center items-center z-[2000] bg-black/50 h-screen w-screen">
      <div className="bg-white roudned-lg shadow-xl flex flex-col h-[calc(100%-100px)] w-[calc(100%-100px)]">
        <header className="relative p-3 border-b">
          <div className="flex justify-center space-x-2">
            <PreviewTab>Preview</PreviewTab>
            <PreviewTab>Code</PreviewTab>
          </div>
          <button onClick={closeModal} 
                  className="absolute right-3 top-3 rounded-lg hover:bg-gray-200 p-2">
            <XIcon className="w-6 h-6 text-gray-600" />
          </button>
        </header>
        <iframe srcDoc={html} className="w-full h-full" />
      </div>
    </dialog>    
  )
}
