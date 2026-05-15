import { Tooltip } from "@heroui/react";
import { cn } from "@/lib/cn";

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
    <Tooltip isDisabled={!tooltipContent}>
      <Tooltip.Content>{tooltipContent}</Tooltip.Content>
      <Tooltip.Trigger>
        <p
          className={cn(
            "flex flex-col items-center justify-center px-6 text-sm text-nowrap text-slate-600",
            classNames?.p,
          )}
        >
          {label}
          <span className={cn("text-2xl font-bold text-nowrap text-gray-900", classNames?.span)}>
            {number}
            {measurement === "time" && "m"} {secondNumber}
            {measurement === "time" && "s"}
          </span>
        </p>
      </Tooltip.Trigger>
    </Tooltip>
  );
}
