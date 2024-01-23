"use client";
import { Input } from "@/components/ui/input";
import { Bed, ChevronDown, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { LocationTips } from "./tabs/locationTips";
import { cn } from "@/lib/utils";
import { AmountRooms } from "./tabs/amountRooms";
import { Button } from "@/components/ui/button";

export const Banner = () => {
  const { register, control, setValue, getValues } = useForm({
    defaultValues: {
      location: "",
      amountRooms: undefined,
    },
  });

  const [isLocationTipsOpen, setIsLocationTipsOpen] = useState<boolean>();
  const [isAmountRoomsOpen, setIsAmountRoomsOpen] = useState<boolean>();

  const watchLocation = useWatch({ name: "location", control });

  const watchAmountRooms = useWatch({
    name: "amountRooms",
    control,
  });

  const handleSelectedLocation = (
    value: string,
    field: "location" | "amountRooms",
  ) => {
    setValue(field, value);
  };

  return (
    <div className="relative grow">
      <Image
        alt="Banner with apresentation text"
        src="/main-banner.png"
        width={0}
        height={0}
        priority
        sizes="100vw"
        className="h-[173px] w-full object-cover lg:h-[640px] lg:object-right"
      />
      <div className="absolute left-16 top-[40px] flex flex-col lg:left-1/2 lg:top-32 lg:min-w-[60%] lg:-translate-x-1/2 lg:transform lg:gap-8">
        <div className="flex flex-col justify-center lg:flex-row">
          <p className="text-2xl font-bold uppercase text-white">VENDE.</p>
          <p className="text-2xl font-bold uppercase text-white">ALUGA.</p>
          <p className="text-2xl font-bold uppercase text-white">CONECTA.</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="hidden lg:flex lg:rounded-full lg:bg-white">
            <label
              className="flex grow flex-col rounded-full hover:cursor-pointer hover:bg-[#EDF1F4] lg:px-3 lg:py-2"
              onClick={() => {
                setIsAmountRoomsOpen(false);
              }}
            >
              <div className="flex items-center gap-1 px-3">
                <MapPin className="text-[#A1A7AA]" size={14} />
                <p className="text-sm font-bold text-[#393B3D]">Localização</p>
              </div>
              <Input
                placeholder="Qual é a Localização?"
                className="truncate py-0 hover:cursor-pointer"
                onFocus={() => setIsLocationTipsOpen(true)}
                {...register("location", {
                  onBlur: () => setIsLocationTipsOpen(false),
                })}
              />
            </label>

            <div
              className="relative flex grow flex-col rounded-full hover:cursor-pointer hover:bg-[#EDF1F4] lg:px-3 lg:py-2"
              onClick={() => {
                setIsAmountRoomsOpen((prev) => !prev);
                setIsLocationTipsOpen(false);
              }}
            >
              <div className="flex items-center gap-1 px-3">
                <Bed className="text-[#A1A7AA]" size={14} />
                <p className="text-sm font-bold text-[#393B3D]">
                  Nº de Quartos
                </p>
              </div>
              <div className="flex">
                <Input
                  className="py-0 hover:cursor-pointer"
                  placeholder="Quantos Quartos?"
                  {...register("amountRooms")}
                  readOnly
                />
              </div>
              <Button
                className="absolute bottom-1/2 right-3 translate-y-1/2 transform rounded-full bg-[#F36C21] p-2"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Search className="text-white" />
              </Button>
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-2">
            {isLocationTipsOpen !== undefined && (
              <LocationTips
                handleSelectedLocation={(value) =>
                  handleSelectedLocation(value, "location")
                }
                value={watchLocation}
                className={cn(" hidden lg:block ", {
                  "animate-accordion-down": isLocationTipsOpen,
                  "animate-accordion-up border-none": !isLocationTipsOpen,
                })}
              />
            )}

            {isAmountRoomsOpen !== undefined && (
              <AmountRooms
                value={watchAmountRooms}
                handleSelectedLocation={(value: string) =>
                  handleSelectedLocation(value, "amountRooms")
                }
                className={
                  isAmountRoomsOpen
                    ? "animate-accordion-down"
                    : "animate-accordion-up border-none"
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
