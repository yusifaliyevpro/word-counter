import { cn, Tooltip } from "@nextui-org/react";
import { formatTime } from "./utils";

type StatProps = {
  label: string;
  minutes: number;
  seconds: number;
  tooltipContent?: string;
  classNames?: { p?: string; span?: string };
};
export default function FooterStat({
  label,
  minutes,
  seconds,
  tooltipContent,
  classNames,
}: StatProps) {
  return (
    <Tooltip
      color="primary"
      classNames={{ content: " text-wrap text-white max-w-52" }}
      isDisabled={!tooltipContent}
      content={tooltipContent}
    >
      <p
        className={cn(
          "flex min-w-[12.5rem] flex-row flex-nowrap gap-x-1 text-nowrap",
          classNames?.p,
        )}
      >
        {label}:
        <span className={cn("flex text-nowrap font-bold", classNames?.span)}>
          {formatTime(minutes, seconds)}
        </span>
      </p>
    </Tooltip>
  );
}
