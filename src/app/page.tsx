"use client";
import FooterStats from "@/components/Footer";
import HeaderStats from "@/components/Header";
import Keywords from "@/components/Keywords";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 px-56 transition-all">
      <div className="flex min-h-96 w-full flex-col rounded-xl bg-white bg-opacity-80 shadow-medium backdrop-blur-sm">
        <HeaderStats text={text} />
        <div className="flex w-full flex-row">
          <Textarea
            placeholder="Start typing or paste your text here..."
            minRows={15}
            maxRows={15}
            radius="none"
            color="default"
            className="bg-transparent font-poppins"
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
