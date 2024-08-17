export function timeCalculator(text: string) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const letters = text
    .split("")
    .filter((letter) => letter !== "\n" && letter !== " ").length;
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

export function WordCalculator(text: string) {
  const all = text.split("").filter((letter) => letter !== "\n").length;
  text = text.trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  const characters = text
    .split("")
    .filter((letter) => letter !== "\n" && letter !== " ").length;
  const sentences = (text.match(/([.!?]+)(?!\s*\1)/g) || []).filter(
    Boolean,
  ).length;
  const paragraphs = text.split("\n").filter(Boolean).length;
  return { words, characters, sentences, paragraphs, all };
}

export function formatTime(minutes: number, seconds: number): string {
  const minLabel = minutes === 1 ? "min" : "mins";
  const secLabel = seconds === 1 ? "sec" : "secs";
  return (
    (minutes !== 0 ? `${minutes} ${minLabel}` : "") + ` ${seconds} ${secLabel}`
  );
}

export function keywords(text: string) {
  const words = text
    .toLowerCase()
    .replace(/[.,?!:;/|\\]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const keywordCounts = words.reduce(
    (acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  const keywordsWithPercentage = Object.entries(keywordCounts)
    .map(([word, count]) => ({
      word,
      count,
      percentage: Math.ceil((count / words.length) * 100),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);
  return keywordsWithPercentage;
}
