import { cn, Tooltip } from "@nextui-org/react";

type StatProps = {
  label: string;
  number: number;
  tooltipContent?: string;
  secondNumber?: number;
  measurement?: "time";
  classNames?: { p?: string; span?: string };
};
export default function HeaderStat({
  label,
  number,
  measurement,
  tooltipContent,
  secondNumber,
  classNames,
}: StatProps) {
  return (
    <Tooltip
      color="primary"
      isDisabled={!tooltipContent}
      content={tooltipContent}
    >
      <p
        className={cn(
          "flex flex-col items-center justify-center text-nowrap px-6 text-sm text-slate-600",
          classNames?.p,
        )}
      >
        {label}
        <span
          className={cn(
            "text-nowrap text-2xl font-bold text-gray-900",
            classNames?.span,
          )}
        >
          {number}
          {measurement === "time" && "m"} {secondNumber}
          {measurement === "time" && "s"}
        </span>
      </p>
    </Tooltip>
  );
}
