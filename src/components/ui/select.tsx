"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface SelectProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Select = React.forwardRef<
  HTMLInputElement,
  SelectProps & {
    options: Array<string>;
    handleSelect?: (option: string) => void;
  }
>(({ className, type, options, handleSelect, ...props }, ref) => {
  const [showOptions, setShowOptions] = React.useState<boolean>();
  return (
    <div
      className="flex flex-col"
      onClick={() => {
        setShowOptions((prev) => !prev);
      }}
    >
      <div
        className={cn(
          "flex h-10 w-full justify-between border-[1px] border-[#D0D5D8] bg-transparent px-3 py-2 ring-offset-background",
          {
            "rounded-t-md": showOptions,
            "rounded-md": !showOptions,
          },
        )}
      >
        <input
          readOnly
          autoComplete="off"
          className={cn(
            "file:border-0 file:text-sm file:font-medium placeholder:text-[#808487] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <ChevronUp
          className={cn("text-[#808487]", {
            "rotate-180 duration-300 ease-out": showOptions,
            "rotate-0 duration-300 ease-out": !showOptions,
          })}
        />
      </div>
      {showOptions !== undefined && (
        <div
          className={cn(
            "flex flex-col gap-2 overflow-hidden rounded-b-md border-x-[1px] border-b-[1px] border-[#D0D5D8] bg-transparent ring-offset-background",
            {
              "animate-accordion-down duration-700 ease-out": showOptions,
              "animate-accordion-up border-none duration-700 ease-out":
                !showOptions,
            },
          )}
        >
          {options.map((option, index) => (
            <p
              onMouseDown={() => {
                handleSelect && handleSelect(option);
              }}
              className={cn("hover:bg-[#D0D5D8]", {
                "bg-[#dadfe3]": index % 2 === 0,
                "animate-accordion-down px-3 py-2 duration-700 ease-in-out":
                  showOptions,
                "animate-accordion-up border-none p-0 duration-700 ease-in-out":
                  !showOptions,
              })}
              key={index}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
});
Select.displayName = "Select";

export { Select };
