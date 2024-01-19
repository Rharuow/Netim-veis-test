"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BusFront, Circle, PawPrint, Shrub, Sun, Wifi } from "lucide-react";
import { Content } from "./content";
import Image from "next/image";
import { useState } from "react";

export const TabsPlaces = () => {
  const [imageUrl, setImageUrl] = useState("/sun.png");

  return (
    <div className="relative">
      <div className="hidden lg:block">
        <Image
          src={imageUrl}
          priority
          alt="Logo of Netimóveis"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[592px] w-full object-cover object-right"
        />
      </div>
      <Tabs
        defaultValue="sun"
        className="lg:absolute lg:left-1/4 lg:top-20 lg:max-w-[488px] lg:-translate-x-1/4 lg:transform lg:rounded-xl lg:bg-white lg:px-12 lg:py-6"
      >
        <TabsList className="h-full w-full">
          <Carousel opts={{ slidesToScroll: 3 }} className="relative w-full">
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <TabsTrigger
                  className="flex w-[80%] flex-col"
                  onClick={() => setImageUrl("/sun.png")}
                  value="sun"
                >
                  <Sun />
                  Pega <br /> Sol
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <TabsTrigger
                  className="flex w-[80%] flex-col"
                  onClick={() => setImageUrl("/pet.png")}
                  value="pet"
                >
                  <PawPrint /> Aceitam <br /> Pet
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <TabsTrigger
                  className="flex w-[80%] flex-col"
                  value="bus"
                  onClick={() => setImageUrl("/bus.png")}
                >
                  <BusFront /> Ônibus <br /> Perto
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <TabsTrigger
                  className="flex w-[80%] flex-col"
                  value="balcony"
                  onClick={() => setImageUrl("/balcony.png")}
                >
                  <Circle /> Tem <br /> Varanda
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <TabsTrigger
                  className="flex w-[80%] flex-col"
                  value="yard"
                  onClick={() => setImageUrl("/yard.png")}
                >
                  <Shrub /> Tem <br /> Quintal
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <TabsTrigger
                  className="flex w-[80%] flex-col"
                  value="internet"
                  onClick={() => setImageUrl("/internet.png")}
                >
                  <Wifi /> Com Boa <br /> Internet
                </TabsTrigger>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext
              variant="secondary"
              className="absolute right-2 top-1/2 rounded-none border-none bg-transparent disabled:hidden"
            />
          </Carousel>
        </TabsList>
        <div className="pt-6">
          <TabsContent value="sun" className="mt-0 flex flex-col gap-4">
            <Content
              title="Sol para iluminar as suas manhãs"
              subtitle="Busque imóveis que pegam Sol durante a manhã para que você fique com a
          vitamina D em dia ;)"
              labelButton="Buscar Imóveis"
              actionButton={() => console.log("Clicked")}
              imageUrl="/sun.png"
            />
          </TabsContent>
          <TabsContent value="pet" className="mt-0 flex flex-col gap-4">
            <Content
              title="Lugar para seu pet"
              subtitle="Busque lugares para seu bixinho..."
              labelButton="Buscar Imóveis"
              actionButton={() => console.log("Clicked")}
              imageUrl="/pet.png"
            />
          </TabsContent>
          <TabsContent value="bus" className="mt-0 flex flex-col gap-4">
            <Content
              title="Vá onde quiser"
              subtitle="Com transporte perto, nada fica distante..."
              labelButton="Buscar Imóveis"
              actionButton={() => console.log("Clicked")}
              imageUrl="/bus.png"
            />
          </TabsContent>
          <TabsContent value="balcony" className="mt-0 flex flex-col gap-4">
            <Content
              title="Varandinha com aquela vista"
              subtitle="Terminar o dia com um café, ou chá, tendo aquela visão, não tem preço..."
              labelButton="Buscar Imóveis"
              actionButton={() => console.log("Clicked")}
              imageUrl="/balcony.png"
            />
          </TabsContent>
          <TabsContent value="yard" className="mt-0 flex flex-col gap-4">
            <Content
              title="Jardim do édem"
              subtitle="Para quem gosta de ler sob árvores, vento fresquinho e ao som da natureza..."
              labelButton="Buscar Imóveis"
              actionButton={() => console.log("Clicked")}
              imageUrl="/yard.png"
            />
          </TabsContent>
          <TabsContent value="internet" className="mt-0 flex flex-col gap-4">
            <Content
              title="Conectado a todo momento"
              subtitle="Poste tudo da sua viagem, não gaste seu plano móvel, aqui você ta conectado com o mundo enquanto relaxa..."
              labelButton="Buscar Imóveis"
              actionButton={() => console.log("Clicked")}
              imageUrl="/internet.png"
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
