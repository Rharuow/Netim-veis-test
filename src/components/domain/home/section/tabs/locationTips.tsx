import * as React from "react";
import Lottie from "lottie-react";
import { MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import emptyLocation from "@public/empty-location.json";
import locationsData from "@/service/locations.json";

const handleFilterLocation = (value?: string) => {
  return value
    ? locationsData.locais
        .filter((local) => {
          let rua: string | undefined;
          let bairro: string | undefined;
          let cidade: string | undefined;
          let estado: string | undefined;
          if (value.includes(",")) {
            const address = value.split(", ");
            rua = address[0].trim();
            bairro = address.length > 1 ? address[1].trim() : undefined;
            cidade =
              address.length > 2
                ? address[2].split(" - ")[0]?.trim()
                : undefined;
            if (value.includes("-")) {
              estado = address[2].split(" - ")[1]?.trim();
            }
          }

          return rua && bairro && cidade && estado
            ? local.rua.includes(rua) &&
                local.bairro.includes(bairro) &&
                local.cidade.includes(cidade) &&
                local.estado.includes(estado)
            : rua && bairro && cidade
              ? local.rua.includes(rua) &&
                local.bairro.includes(bairro) &&
                local.cidade.includes(cidade)
              : rua && bairro
                ? local.rua.includes(rua) && local.bairro.includes(bairro)
                : rua
                  ? local.rua.includes(rua)
                  : local.rua.includes(value) ||
                    local.bairro.includes(value) ||
                    local.cidade.includes(value) ||
                    local.estado.includes(value);
        })
        .filter((_, index) => index < 5)
    : locationsData.locais.filter((_, index) => index < 5);
};

export const LocationTips = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    handleSelectedLocation: (value: string) => void;
  }
>(({ className, value, handleSelectedLocation, ...props }, ref) => {
  const [locations, setLocations] = React.useState(handleFilterLocation(value));

  React.useEffect(() => {
    setLocations(handleFilterLocation(value));
  }, [value]);

  return (
    <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
      <Input
        className="text-sm placeholder:text-center placeholder:text-[#A1A7AA]"
        placeholder="Busque por cidade, região, bairro ou código"
        readOnly
      />
      <div className="flex flex-col bg-[#F4F6F9]">
        {locations.length <= 0 ? (
          <Lottie
            animationData={emptyLocation}
            className="h-[120px]"
            loop={true}
          />
        ) : (
          locations.map((local, index) => (
            <div
              className="flex gap-3 px-3 py-2"
              key={index}
              onMouseDown={() =>
                handleSelectedLocation(
                  `${local.rua}, ${local.bairro}, ${local.cidade} - ${local.estado} `,
                )
              }
            >
              <MapPin className="mt-[6px] text-[#A1A7AA]" size={14} />
              <div className="flex flex-col gap-1">
                <p className="test-sm text-[#393B3D]">{local.rua}</p>
                <p className="text-xs text-[#4E5254]">
                  {local.bairro}, {local.cidade} - {local.estado}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
});

LocationTips.displayName = "LocationTips";
