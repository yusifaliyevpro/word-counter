"use client";

import FooterStats from "@/components/Footer";
import HeaderStats from "@/components/Header";
import Keywords from "@/components/Keywords";
import { TextArea } from "@heroui/react";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  if (text === "YusifAliyevPro")
    return (
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-56 transition-all">
        <embed
          src="/1.pdf#toolbar=0&navpanes=0"
          width="770"
          height="560"
          type="application/pdf"
          className="border-none"
        ></embed>
      </main>
    );
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500 px-56 transition-all">
      <div className="shadow-medium flex min-h-96 w-full flex-col rounded-xl bg-white/80 backdrop-blur-sm">
        <HeaderStats text={text} />
        <div className="flex w-full flex-row">
          <TextArea
            placeholder="Start typing or paste your text here..."
            rows={15}
            color="default"
            className="font-poppins rounded-none bg-transparent p-4 text-base text-pretty ring-0 placeholder:text-slate-500"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Keywords text={text} />
        </div>
        <FooterStats text={text} />
      </div>
    </main>
  );
}
