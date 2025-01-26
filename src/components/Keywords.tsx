import { keywords } from "./utils";

export default function Keywords({ text }: { text: string }) {
  return (
    <div className="flex w-1/2 flex-col border-l-1 border-divider bg-transparent">
      <p className="px-2 pt-2 text-slate-500">Keywords</p>
      <div className="flex w-full flex-col">
        {keywords(text).map((keyword) => (
          <div
            key={keyword.word}
            className="flex flex-row items-center justify-between border-b border-divider px-2 py-[4.5px] text-sm"
          >
            <div className="flex flex-row gap-x-3">
              <p className="w-7 items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 text-center tabular-nums text-white">
                {keyword.count}
              </p>
              <p className="w-48 truncate">{keyword.word}</p>
            </div>
            <p className="px-3 text-sm font-bold text-slate-500">
              {keyword.percentage}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
