import { cn } from "@/lib/utils";
import * as React from "react";

const Tag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-full text-xs bg-[#F3F3F3] border text-[#48617E] px-[6px] py-[2px]",
      className
    )}
    {...props}
  />
));

Tag.displayName = "Tag";

export { Tag };
