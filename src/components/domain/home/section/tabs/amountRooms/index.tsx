import * as React from "react";

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { Buttons } from "./buttons";
import { Separator } from "@/components/ui/separator";
import { Select } from "@/components/ui/select";
import { useForm, useWatch } from "react-hook-form";

export const AmountRooms = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    handleSelectedLocation?: (value: string) => void;
  }
>(({ className, value, handleSelectedLocation, ...props }, ref) => {
  const { register, setValue, control, getValues } = useForm({
    defaultValues: {
      option: "",
      rooms: "",
    },
  });

  return (
    <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
      <div className="flex flex-col gap-6 px-6 py-4">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#393B3D]">Número de Quartos</p>
          <Buttons
            onClick={(rooms) => {
              setValue("rooms", rooms);
              handleSelectedLocation &&
                handleSelectedLocation(
                  getValues("option")
                    ? `${rooms} - ${getValues("option")}`
                    : rooms,
                );
            }}
          />
        </div>
        <Separator className="border-[#E1E5E9]" />
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#393B3D]">Tipo de Propriedade</p>
          <Select
            placeholder="Todos os tipos"
            handleSelect={(option) => {
              setValue("option", option);
              handleSelectedLocation &&
                handleSelectedLocation(
                  getValues("rooms")
                    ? `${getValues("rooms")} - ${option}`
                    : option,
                );
            }}
            options={[
              "Todos os tipos",
              "Casal",
              "Uma cama",
              "Duas Camas",
              "Três Camas",
            ]}
            {...register("option")}
          />
        </div>
      </div>
    </Card>
  );
});

AmountRooms.displayName = "AmountRooms";
