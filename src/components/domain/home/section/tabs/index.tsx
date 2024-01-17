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
      locationToRent: "",
      locationToBuy: "",
      amountRoomsToRent: undefined,
      amountRoomsToBuy: undefined,
    },
  });

  const [isLocationToRentTipsOpen, setIsLocationToRentTipsOpen] =
    useState<boolean>();
  const [isLocationToBuyTipsOpen, setIsLocationToBuyTipsOpen] =
    useState<boolean>();
  const [isAmountRoomsToRentOpen, setIsAmountRoomsToRentOpen] =
    useState<boolean>();
  const [isAmountRoomsToBuyOpen, setIsAmountRoomsToBuyOpen] =
    useState<boolean>();

  const watchLocationToRent = useWatch({ name: "locationToRent", control });
  const watchLocationToBuy = useWatch({ name: "locationToBuy", control });
  const watchAmountRoomsToRent = useWatch({
    name: "amountRoomsToRent",
    control,
  });
  const watchAmountRoomsToBuy = useWatch({ name: "amountRoomsToBuy", control });
  const inputRef = useRef<HTMLDivElement>(null);

  const handleSelectedLocation = (
    value: string,
    field: "locationToRent" | "locationToBuy",
  ) => {
    setValue(field, value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the input, so close the AmountRooms component
        setIsAmountRoomsToRentOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsAmountRoomsToRentOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the input, so close the AmountRooms component
        setIsAmountRoomsToBuyOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsAmountRoomsToBuyOpen]);

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
                onFocus={() => setIsLocationToRentTipsOpen(true)}
                {...register("locationToRent", {
                  onBlur: () => setIsLocationToRentTipsOpen(false),
                })}
              />
            </div>

            {isLocationToRentTipsOpen !== undefined && (
              <LocationTips
                handleSelectedLocation={(value) =>
                  handleSelectedLocation(value, "locationToRent")
                }
                value={watchLocationToRent}
                className={
                  isLocationToRentTipsOpen
                    ? "animate-accordion-down"
                    : "animate-accordion-up border-none"
                }
              />
            )}
          </Card>

          <Card
            className="px-6 py-4"
            ref={inputRef} // Attach the ref to the Input component
            onClick={() => setIsAmountRoomsToRentOpen(true)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bed className="text-[#A1A7AA]" />
                <p className="text-sm font-bold text-[#393B3D]">
                  Nº de Quartos
                </p>
              </div>
              <div
                className="flex"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAmountRoomsToRentOpen((prev) => !prev);
                }}
              >
                <ChevronDown
                  className={cn("text-[#555555] duration-300", {
                    "rotate-180": isAmountRoomsToRentOpen,
                    "rotate-0": !isAmountRoomsToRentOpen,
                  })}
                  size={18}
                />
              </div>
            </div>
            <div className="flex">
              <Input
                placeholder="Quantos Quartos?"
                {...register("amountRoomsToRent")}
                readOnly
              />
            </div>
            {isAmountRoomsToRentOpen !== undefined && (
              <AmountRooms
                value={watchAmountRoomsToRent}
                className={
                  isAmountRoomsToRentOpen
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
                onFocus={() => setIsLocationToBuyTipsOpen(true)}
                {...register("locationToBuy", {
                  onBlur: () => setIsLocationToBuyTipsOpen(false),
                })}
              />
            </div>

            {isLocationToBuyTipsOpen !== undefined && (
              <LocationTips
                handleSelectedLocation={(value) =>
                  handleSelectedLocation(value, "locationToBuy")
                }
                value={watchLocationToBuy}
                className={
                  isLocationToBuyTipsOpen
                    ? "animate-accordion-down"
                    : "animate-accordion-up border-none"
                }
              />
            )}
          </Card>

          <Card
            className="px-6 py-4"
            ref={inputRef} // Attach the ref to the Input component
            onClick={() => setIsAmountRoomsToBuyOpen(true)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bed className="text-[#A1A7AA]" />
                <p className="text-sm font-bold text-[#393B3D]">
                  Nº de Quartos
                </p>
              </div>
              <div
                className="flex"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAmountRoomsToBuyOpen((prev) => !prev);
                }}
              >
                <ChevronDown
                  className={cn("text-[#555555] duration-300", {
                    "rotate-180": isAmountRoomsToBuyOpen,
                    "rotate-0": !isAmountRoomsToBuyOpen,
                  })}
                  size={18}
                />
              </div>
            </div>
            <div className="flex">
              <Input
                placeholder="Quantos Quartos?"
                {...register("amountRoomsToBuy")}
                readOnly
              />
            </div>
            {isAmountRoomsToBuyOpen !== undefined && (
              <AmountRooms
                value={watchAmountRoomsToBuy}
                className={
                  isAmountRoomsToBuyOpen
                    ? "animate-accordion-down"
                    : "animate-accordion-up border-none"
                }
              />
            )}
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
