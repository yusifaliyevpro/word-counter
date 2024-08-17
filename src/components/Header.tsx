import { Divider } from "@nextui-org/react";
import HeaderStat from "./HeaderStat";
import { WordCalculator } from "./utils";

export default function HeaderStats({ text }: { text: string }) {
  const { words, characters, sentences, paragraphs, all } =
    WordCalculator(text);

  return (
    <header className="flex w-full flex-row items-center justify-center border-b-1 border-divider px-7 py-5 transition-all">
      <HeaderStat label="Words" number={words} />
      <Divider orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat
        label="Characters"
        tooltipContent="Without Space"
        number={characters}
      />
      <Divider orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="Sentences" number={sentences} />
      <Divider orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="Paragraphs" number={paragraphs} />
      <Divider orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="All" tooltipContent="With Space" number={all} />
    </header>
  );
}
