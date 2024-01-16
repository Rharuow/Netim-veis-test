"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Buttons = () => {
  const [{ all, one, two, three, four }, setSelectedRooms] = useState({
    all: false,
    one: false,
    two: false,
    three: false,
    four: false,
  });

  return (
    <div className="flex justify-between">
      <Button
        className={cn("rounded-full  text-xs font-semibold ", {
          "border-[1px] border-[#652D91] bg-[#F7F4F9] text-[#652D91]": !all,
          "bg-[#9c54d4] text-white": all,
        })}
        onClick={() =>
          setSelectedRooms({
            all: true,
            one: false,
            two: false,
            three: false,
            four: false,
          })
        }
      >
        Todos
      </Button>
      <Button
        className={cn("rounded-full p-3 text-sm font-semibold ", {
          "border-[1px] border-[#D9D9D9] bg-transparent text-[#555555]": !one,
          "bg-[#555555] text-white": one,
        })}
        onClick={() =>
          setSelectedRooms({
            one: true,
            all: false,
            two: false,
            three: false,
            four: false,
          })
        }
      >
        1+
      </Button>
      <Button
        className={cn("rounded-full p-3 text-sm font-semibold text-[#555555]", {
          "border-[1px] border-[#D9D9D9] bg-transparent text-[#555555]": !two,
          "bg-[#555555] text-white": two,
        })}
        onClick={() =>
          setSelectedRooms({
            two: true,
            all: false,
            one: false,
            three: false,
            four: false,
          })
        }
      >
        2+
      </Button>
      <Button
        className={cn("rounded-full p-3 text-sm font-semibold text-[#555555]", {
          "border-[1px] border-[#D9D9D9] bg-transparent text-[#555555]": !three,
          "bg-[#555555] text-white": three,
        })}
        onClick={() =>
          setSelectedRooms({
            three: true,
            all: false,
            one: false,
            two: false,
            four: false,
          })
        }
      >
        3+
      </Button>
      <Button
        className={cn("rounded-full p-3 text-sm font-semibold text-[#555555]", {
          "border-[1px] border-[#D9D9D9] bg-transparent text-[#555555]": !four,
          "bg-[#555555] text-white": four,
        })}
        onClick={() =>
          setSelectedRooms({
            four: true,
            all: false,
            one: false,
            two: false,
            three: false,
          })
        }
      >
        4+
      </Button>
    </div>
  );
};
