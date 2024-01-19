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
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <div className="after:border after:border-[#E95808] lg:hidden"></div>
        <div className="w-full lg:flex lg:flex-col lg:gap-4">
          <p className="text-2xl font-bold text-[#4E5254] lg:text-4xl">
            {title}
          </p>
          <p className="text-[#808587]">{subtitle}</p>
        </div>
      </div>
      <div>
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
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Link
            href={firstLinkPath}
            className="border-b border-[#C0C7CA] text-sm text-[#393B3D]"
          >
            {firstLinkText}
          </Link>
        </div>

        <div>
          <Link
            href={secondLinkPath}
            className="border-b border-[#C0C7CA] text-sm text-[#393B3D]"
          >
            {secondLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};
