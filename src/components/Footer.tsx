import FooterStat from "./FooterStat";
import { timeCalculator } from "./utils";

export default function FooterStats({ text }: { text: string }) {
  const { readingTime, speakingTime, handwritingTime } = timeCalculator(text);
  return (
    <footer className="border-divider flex min-h-12 w-full items-center gap-x-10 border-t border-gray-400 px-4 font-sans text-sm">
      <FooterStat
        label="Reading Time"
        minutes={readingTime.minutes}
        seconds={readingTime.seconds}
        tooltipContent="200 words per minute"
      />
      <FooterStat
        label="Speaking time"
        minutes={speakingTime.minutes}
        seconds={speakingTime.seconds}
        tooltipContent="180 words per minute"
      />
      <FooterStat
        label="Handwriting time"
        minutes={handwritingTime.minutes}
        seconds={handwritingTime.seconds}
        tooltipContent="68 letters per minute"
      />
    </footer>
  );
}
