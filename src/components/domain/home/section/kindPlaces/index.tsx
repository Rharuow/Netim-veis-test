import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Content } from "./content";

export const KindSection = () => {
  return (
    <div className="px-4 lg:w-[65%] lg:self-center lg:px-0 lg:pt-32">
      <Tabs defaultValue="kind">
        <TabsList className="h-full w-full p-0">
          <Carousel className="relative w-full">
            <CarouselContent>
              <CarouselItem className="basis-2/5 lg:basis-auto">
                <TabsTrigger className="flex flex-col text-xs" value="kind">
                  Tipos de Propriedades
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="basis-2/5 lg:basis-auto">
                <TabsTrigger className="flex flex-col text-xs" value="sell">
                  Populares para Venda
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="basis-2/5 lg:basis-auto">
                <TabsTrigger className="flex flex-col text-xs" value="rent">
                  Populares para Locação / Planta
                </TabsTrigger>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </TabsList>
        <TabsContent value="kind" className="mt-0 flex flex-col gap-4">
          <Content />
        </TabsContent>
        <TabsContent value="sell" className="mt-0 flex flex-col gap-4">
          <Content />
        </TabsContent>
        <TabsContent value="rent" className="mt-0 flex flex-col gap-4">
          <Content />
        </TabsContent>
      </Tabs>
    </div>
  );
};
