export function timeCalculator(text: string) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const letters = text.split("").filter((letter) => letter !== "\n").length;
  const calculateTime = (wordsPerMinute: number, words: number) => {
    const minutes = Math.floor(words / wordsPerMinute);
    const seconds = Math.ceil(((words % wordsPerMinute) / wordsPerMinute) * 60);
    return { minutes, seconds };
  };

  return {
    readingTime: calculateTime(200, words),
    speakingTime: calculateTime(180, words),
    handwritingTime: calculateTime(68, letters),
  };
}

export function formatTime(minutes: number, seconds: number): string {
  const minLabel = minutes === 1 ? "min" : "mins";
  const secLabel = seconds === 1 ? "sec" : "secs";
  return (
    (minutes !== 0 ? `${minutes} ${minLabel}` : "") + ` ${seconds} ${secLabel}`
  );
}
