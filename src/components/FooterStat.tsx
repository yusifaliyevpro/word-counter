import { Tooltip } from "@heroui/react";
import { formatTime } from "./utils";
import { cn } from "@/lib/cn";

type StatProps = {
  label: string;
  minutes: number;
  seconds: number;
  tooltipContent?: string;
  classNames?: { p?: string; span?: string };
};
export default function FooterStat({ label, minutes, seconds, tooltipContent, classNames }: StatProps) {
  return (
    <Tooltip
      // color="primary"
      isDisabled={!tooltipContent}
    >
      <Tooltip.Content className="max-w-52 text-wrap text-white">{tooltipContent}</Tooltip.Content>
      <Tooltip.Trigger>
        <p className={cn("flex min-w-50 flex-row flex-nowrap gap-x-1 text-nowrap", classNames?.p)}>
          {label}:
          <span className={cn("flex font-bold text-nowrap", classNames?.span)}>{formatTime(minutes, seconds)}</span>
        </p>
      </Tooltip.Trigger>
    </Tooltip>
  );
}
