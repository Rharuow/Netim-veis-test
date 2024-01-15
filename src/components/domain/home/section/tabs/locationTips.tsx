import * as React from "react";

import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

import locationsData from "@/service/locations.json";
import { useForm } from "react-hook-form";

export const LocationTips = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string }
>(({ className, value, ...props }, ref) => {
  const { register, setValue } = useForm();

  const [locations, setLocations] = React.useState(
    value
      ? locationsData.locais
          .filter(
            (local) =>
              local.bairro.includes(value) ||
              local.cidade.includes(value) ||
              local.estado.includes(value) ||
              local.rua.includes(value),
          )
          .filter((_, index) => index < 5)
      : locationsData.locais.filter((_, index) => index < 5),
  );

  React.useEffect(() => {
    setValue("locationTip", value);
    value
      ? setLocations(
          locationsData.locais
            .filter(
              (local) =>
                local.bairro.includes(value) ||
                local.cidade.includes(value) ||
                local.estado.includes(value) ||
                local.rua.includes(value),
            )
            .filter((_, index) => index < 5),
        )
      : setLocations(locationsData.locais.filter((_, index) => index < 5));
  }, [setValue, value]);

  return (
    <Card ref={ref} className={cn("w-full", className)} {...props}>
      <Input
        className="text-sm placeholder:text-center placeholder:text-[#A1A7AA]"
        placeholder="Busque por cidade, região, bairro ou código"
        {...register("locationTip", {
          onChange: (el) => {
            console.log("el = ", el.target.value);

            setLocations(
              locationsData.locais
                .filter(
                  (local) =>
                    local.bairro.includes(el.target.value) ||
                    local.cidade.includes(el.target.value) ||
                    local.estado.includes(el.target.value) ||
                    local.rua.includes(el.target.value),
                )
                .filter((_, index) => index < 5),
            );
          },
        })}
      />
      <div className="flex flex-col bg-[#F4F6F9] ">
        {locations.map((local, index) => (
          <div className="flex gap-3 px-3 py-2" key={index}>
            <MapPin className="mt-[6px] text-[#A1A7AA]" size={14} />
            <div className="flex flex-col gap-1">
              <p className="test-sm text-[#393B3D]">{local.rua}</p>
              <p className="text-xs text-[#4E5254]">
                {local.bairro}, {local.cidade} - {local.estado}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
});

LocationTips.displayName = "LocationTips";
