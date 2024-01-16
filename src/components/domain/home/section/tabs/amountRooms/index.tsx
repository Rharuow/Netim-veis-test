import * as React from "react";

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { Buttons } from "./buttons";
import { Separator } from "@/components/ui/separator";
import { Select } from "@/components/ui/select";

export const AmountRooms = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
  }
>(({ className, value, ...props }, ref) => {
  return (
    <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
      <div className="flex flex-col gap-6 px-6 py-4">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#393B3D]">Número de Quartos</p>
          <Buttons />
        </div>
        <Separator className="border-[#E1E5E9]" />
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#393B3D]">Tipo de Propriedade</p>
          <Select
            placeholder="Todos os tipos"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </div>
      </div>
    </Card>
  );
});

AmountRooms.displayName = "AmountRooms";
