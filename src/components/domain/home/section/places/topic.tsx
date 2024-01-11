"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MouseEventHandler } from "react";

export const Topic = ({
  buttonAction,
  buttonText,
  firstLinkPath,
  firstLinkText,
  secondLinkPath,
  secondLinkText,
  subtitle,
  title,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonAction?: MouseEventHandler<HTMLButtonElement>;
  firstLinkText: string;
  firstLinkPath: string;
  secondLinkText: string;
  secondLinkPath: string;
}) => {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="after:border after:border-[#E95808]"></div>
      <p className="text-[#4E5254] font-bold text-2xl">{title}</p>
      <p className="text-[#808587] ">{subtitle}</p>
      <Button
        variant="outline"
        className=" border border-[#8A2CB1] text-[#8A2CB1]"
        onClick={(e) => {
          console.log(e);
        }}
        {...(buttonAction && { onClick: buttonAction })}
      >
        {buttonText}
      </Button>

      <Link
        href={firstLinkPath}
        className="text-[#393B3D] border-b border-[#C0C7CA] text-sm"
      >
        {firstLinkText}
      </Link>

      <Link
        href={secondLinkPath}
        className="text-[#393B3D] border-b border-[#C0C7CA] text-sm"
      >
        {secondLinkText}
      </Link>
    </div>
  );
};
