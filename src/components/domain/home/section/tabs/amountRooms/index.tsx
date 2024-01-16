import * as React from "react";

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Buttons } from "./buttons";

export const AmountRooms = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
  }
>(({ className, value, ...props }, ref) => {
  return (
    <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
      <div className="flex flex-col gap-12  px-6 py-4">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#393B3D]">Número de Quartos</p>
          <Buttons />
        </div>
      </div>
    </Card>
  );
});

AmountRooms.displayName = "AmountRooms";
