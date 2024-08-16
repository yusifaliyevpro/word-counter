"use client";
import FooterStats from "@/components/Footer";
import HeaderStats from "@/components/Header";
import Keywords from "@/components/Keywords";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const handleText = () => {
    setText(
      text
        .split(/\s+/)
        .join(" ")
        .replace(/\s*([.,!?])\s*/g, "$1 ")
        .replace(/\s+([.,!?])/g, "$1"),
    );
  };
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-tr from-blue-600 to-blue-400 px-56 transition-all">
      <div className="flex min-h-96 w-full flex-col rounded-xl bg-white/80 shadow-medium backdrop-blur-lg">
        <HeaderStats text={text} />
        <div className="flex w-full flex-row">
          <Textarea
            placeholder="Start typing or paste your text here..."
            minRows={15}
            maxRows={15}
            radius="none"
            color="default"
            className="font-poppins bg-transparent"
            classNames={{
              inputWrapper:
                "bg-transparent p-4  group-data-[focus=true]:bg-transparent  data-[hover=true]:bg-transparent",
              input:
                "px-3 bg-transparent min-h-[22.5rem] leading-relaxed text-pretty text-base   placeholder:text-slate-500",
            }}
            fullWidth
            value={text}
            onValueChange={setText}
          />
          <Keywords text={text} />
        </div>
        <FooterStats text={text} />
      </div>
    </main>
  );
}
