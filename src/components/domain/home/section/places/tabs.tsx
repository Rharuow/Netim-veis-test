"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BusFront, Circle, PawPrint, Sun } from "lucide-react";

export const TabsPlaces = () => {
  return (
    <Tabs defaultValue="sun">
      <TabsList className="h-full w-full">
        <Carousel opts={{ slidesToScroll: 3 }} className="w-full relative">
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <TabsTrigger className="flex flex-col w-[80%]" value="sun">
                <Sun />
                Pega <br /> Sol
              </TabsTrigger>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <TabsTrigger className="flex flex-col w-[80%]" value="pet">
                <PawPrint /> Aceitam <br /> Pet
              </TabsTrigger>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <TabsTrigger className="flex flex-col w-[80%]" value="bus">
                <BusFront /> Ônibus <br /> Perto
              </TabsTrigger>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <TabsTrigger className="flex flex-col w-[80%]" value="balcony">
                <Circle /> Tem <br /> Varanda
              </TabsTrigger>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <TabsTrigger className="flex flex-col w-[80%]" value="yard">
                <Circle /> Tem <br /> Quintal
              </TabsTrigger>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <TabsTrigger className="flex flex-col w-[80%]" value="internet">
                <Circle /> Com Boa <br /> Internet
              </TabsTrigger>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext
            variant="secondary"
            className="absolute top-1/2 right-2 border-none bg-transparent rounded-none disabled:hidden"
          />
        </Carousel>
      </TabsList>
      <TabsContent value="sun" className="pt-6 flex flex-col gap-4">
        <h1>CONTENT</h1>
      </TabsContent>
    </Tabs>
  );
};
