"use client";
import * as React from "react";
import Lottie from "lottie-react";
import { MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import emptyLocation from "@public/empty-location.json";
import locationsData from "@/service/locations.json";

export const LocationTips = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string; isOpen?: boolean }
>(({ className, value, isOpen, ...props }, ref) => {
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
  }, [value]);

  return (
    <Card
      ref={ref}
      className={cn(
        "overflow-hidden",
        {
          "animate-accordion-up border-none": !isOpen,
          "animate-accordion-down": isOpen,
        },
        className,
      )}
      {...props}
    >
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
              onMouseDown={() => console.log("mousedown")}
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
