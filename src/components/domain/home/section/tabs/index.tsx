"use client";
import { MapPin, Bed, ChevronDown, Search } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocationTips } from "./locationTips";
import { useForm, useWatch } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { AmountRooms } from "./amountRooms";
import { cn } from "@/lib/utils";

export const TabsSection = () => {
  const { register, control, setValue } = useForm({
    defaultValues: {
      location: "",
      amountROoms: undefined,
    },
  });

  const [isLocationTipsOpen, setIsLocationTipsOpen] = useState<boolean>();
  const [isAmountRoomsOpen, setIsAmountRoomsOpen] = useState<boolean>();

  const watchLocation = useWatch({ name: "location", control });
  const watchAmountRooms = useWatch({ name: "amountROoms", control });
  const inputRef = useRef<HTMLDivElement>(null);
  const handleSelectedLocation = (value: string) => {
    setValue("location", value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the input, so close the AmountRooms component
        setIsAmountRoomsOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsAmountRoomsOpen]);

  return (
    <div className="flex flex-col gap-6 px-4">
      <Tabs defaultValue="rent" className=" w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="rent">Alugar</TabsTrigger>
          <TabsTrigger value="buy">Comprar</TabsTrigger>
        </TabsList>
        <TabsContent value="rent" className=" flex flex-col gap-4 ">
          <Card className="flex flex-col gap-1 px-6 py-4">
            <div className="flex items-center gap-2">
              <MapPin className="text-sm text-[#A1A7AA]" />
              <p className="text-sm font-bold text-[#393B3D]">Localização</p>
            </div>
            <div className="flex">
              <Input
                placeholder="Qual é a Localização?"
                className="truncate"
                onFocus={() => setIsLocationTipsOpen(true)}
                {...register("location", {
                  onBlur: () => setIsLocationTipsOpen(false),
                })}
              />
            </div>

            {isLocationTipsOpen !== undefined && (
              <LocationTips
                handleSelectedLocation={handleSelectedLocation}
                value={watchLocation}
                className={
                  isLocationTipsOpen
                    ? "animate-accordion-down"
                    : "animate-accordion-up border-none"
                }
              />
            )}
          </Card>

          <Card
            className="px-6 py-4"
            ref={inputRef} // Attach the ref to the Input component
            onClick={() => setIsAmountRoomsOpen(true)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bed className="text-[#A1A7AA]" />
                <p className="text-sm font-bold text-[#393B3D]">
                  Nº de Quartos
                </p>
              </div>
              <div className="flex">
                <ChevronDown
                  className={cn("text-[#555555] duration-300", {
                    "rotate-180": isAmountRoomsOpen,
                    "rotate-0": !isAmountRoomsOpen,
                  })}
                  size={18}
                />
              </div>
            </div>
            <div className="flex">
              <Input
                placeholder="Quantos Quartos?"
                {...register("amountROoms")}
                readOnly
              />
            </div>
            {isAmountRoomsOpen !== undefined && (
              <AmountRooms
                value={watchAmountRooms}
                className={
                  isAmountRoomsOpen
                    ? "animate-accordion-down"
                    : "animate-accordion-up border-none"
                }
              />
            )}
          </Card>
        </TabsContent>
        <TabsContent value="buy" className="relative m-0 flex flex-col gap-4">
          <Card className="flex flex-col gap-1 px-6 py-4">
            <div className="flex items-center gap-2">
              <MapPin className="text-sm text-[#A1A7AA]" />
              <p className="text-sm font-bold text-[#393B3D]">Localização</p>
            </div>
            <div className="flex">
              <Input
                placeholder="Qual é a Localização?"
                className="truncate"
                onFocus={() => setIsLocationTipsOpen(true)}
                {...register("location", {
                  onBlur: () => setIsLocationTipsOpen(false),
                })}
              />
            </div>

            {isLocationTipsOpen !== undefined && (
              <LocationTips
                handleSelectedLocation={handleSelectedLocation}
                value={watchLocation}
                className={
                  isLocationTipsOpen
                    ? "animate-accordion-down"
                    : "animate-accordion-up border-none"
                }
              />
            )}
          </Card>

          <Card className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bed className="text-[#A1A7AA]" />
                <p className="text-sm font-bold text-[#393B3D]">
                  Nº de Quartos
                </p>
              </div>
              <div className="flex">
                <ChevronDown className={cn("text-[#555555]")} size={18} />
              </div>
            </div>
            <div className="flex">
              <p className="text-[#808487]">Quantos Quartos?</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      <Button className="bg-[#E95808] font-semibold">
        <Search className="me-2" size={18} />
        Buscar Imóveis
      </Button>
    </div>
  );
};
