import { Separator } from "@heroui/react";
import HeaderStat from "./HeaderStat";
import { WordCalculator } from "./utils";

export default function HeaderStats({ text }: { text: string }) {
  const { words, characters, sentences, paragraphs, all } = WordCalculator(text);

  return (
    <header className="flex w-full flex-row items-center justify-center border-b border-gray-400 px-7 py-5 transition-all">
      <HeaderStat label="Words" number={words} />
      <Separator orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="Characters" tooltipContent="Without Space" number={characters} />
      <Separator orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="Sentences" number={sentences} />
      <Separator orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="Paragraphs" number={paragraphs} />
      <Separator orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="All" tooltipContent="With Space" number={all} />
    </header>
  );
}
