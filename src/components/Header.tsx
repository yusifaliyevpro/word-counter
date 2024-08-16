import { Divider } from "@nextui-org/react";
import HeaderStat from "./HeaderStat";

export default function HeaderStats({ text }: { text: string }) {
  const numberOfWords = text ? text.split(/\s+/).length : 0;
  const numberOfCharacters = text
    .split("")
    .filter((letter) => letter !== " " && letter !== "\n").length;
  const numberOfSentences = (text.match(/([.!?]+)(?!\s*\1)/g) || []).length;
  const numberOfParagraphs = text.split("\n").filter(Boolean).length;
  const numberOfAllCharacters = text
    .split("")
    .filter((letter) => letter !== "\n").length;

  return (
    <header className="flex w-full flex-row items-center justify-center border-b-1 border-divider px-7 py-5 transition-all">
      <HeaderStat label="Words" number={numberOfWords} />
      <Divider orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat
        label="Characters"
        tooltipContent="Without Space"
        number={numberOfCharacters}
      />
      <Divider orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="Sentences" number={numberOfSentences} />
      <Divider orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat label="Paragraphs" number={numberOfParagraphs} />
      <Divider orientation="vertical" className="mx-1 min-h-full py-6" />
      <HeaderStat
        label="All"
        tooltipContent="With Space"
        number={numberOfAllCharacters}
      />
    </header>
  );
}
