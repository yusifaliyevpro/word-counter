import { keywords } from "./utils";

export default function Keywords({ text }: { text: string }) {
  return (
    <div className="border-divider flex w-1/2 flex-col border-l border-gray-400 bg-transparent">
      <p className="px-2 pt-2 text-slate-500">Keywords</p>
      <div className="flex w-full flex-col">
        {keywords(text).map((keyword) => (
          <div
            key={keyword.word}
            className="border-divider flex flex-row items-center justify-between border-b px-2 py-[4.5px] text-sm"
          >
            <div className="flex flex-row gap-x-3">
              <p className="w-7 items-center justify-center rounded-full bg-linear-to-r from-indigo-400 to-blue-500 text-center text-white tabular-nums">
                {keyword.count}
              </p>
              <p className="w-48 truncate">{keyword.word}</p>
            </div>
            <p className="px-3 text-sm font-bold text-slate-500">{keyword.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
