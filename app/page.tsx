"use client";

import GenerateButton from './../components/GenerateButton';
import PreviewModal from "@/components/PreviewModal";
import { Tldraw } from "@tldraw/tldraw";
import { useState } from "react";


export default function Home() {
  const [html, setHtml] = useState('')

  return (
    <>
      <PreviewModal html={html} />
      <main className="h-screen w-screen">
        <Tldraw persistenceKey="snapsite">
          <GenerateButton setHtml={setHtml}/>
        </Tldraw>
      </main>
    </>
  )
}
