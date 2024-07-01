"use client";

import { Tldraw } from "@tldraw/tldraw"
import GenerateButton from './../components/GenerateButton';
import PreviewModal from "@/components/PreviewMOdal";

export default function Home() {
  return (
    <>
      <PreviewModal />
      <main className="h-screen w-screen">
        <Tldraw persistenceKey="snapsite">
          <GenerateButton />
        </Tldraw>
      </main>
    </>
  )
}
