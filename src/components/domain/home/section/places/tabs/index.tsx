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
                <Shrub /> Tem <br /> Quintal
              </TabsTrigger>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <TabsTrigger className="flex flex-col w-[80%]" value="internet">
                <Wifi /> Com Boa <br /> Internet
              </TabsTrigger>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext
            variant="secondary"
            className="absolute top-1/2 right-2 border-none bg-transparent rounded-none disabled:hidden"
          />
        </Carousel>
      </TabsList>
      <div className="pt-6">
        <TabsContent value="sun" className="flex flex-col gap-4 mt-0">
          <Content
            title="Sol para iluminar as suas manhãs"
            subtitle="Busque imóveis que pegam Sol durante a manhã para que você fique com a
          vitamina D em dia ;)"
            labelButton="Buscar Imóveis"
            actionButton={() => console.log("Clicked")}
            imageUrl="/sun.png"
          />
        </TabsContent>
        <TabsContent value="pet" className="flex flex-col gap-4 mt-0">
          <Content
            title="Lugar para seu pet"
            subtitle="Busque lugares para seu bixinho..."
            labelButton="Buscar Imóveis"
            actionButton={() => console.log("Clicked")}
            imageUrl="/pet.png"
          />
        </TabsContent>
        <TabsContent value="bus" className="flex flex-col gap-4 mt-0">
          <Content
            title="Vá onde quiser"
            subtitle="Com transporte perto, nada fica distante..."
            labelButton="Buscar Imóveis"
            actionButton={() => console.log("Clicked")}
            imageUrl="/bus.png"
          />
        </TabsContent>
        <TabsContent value="balcony" className="flex flex-col gap-4 mt-0">
          <Content
            title="Varandinha com aquela vista"
            subtitle="Terminar o dia com um café, ou chá, tendo aquela visão, não tem preço..."
            labelButton="Buscar Imóveis"
            actionButton={() => console.log("Clicked")}
            imageUrl="/balcony.png"
          />
        </TabsContent>
        <TabsContent value="yard" className="flex flex-col gap-4 mt-0">
          <Content
            title="Jardim do édem"
            subtitle="Para quem gosta de ler sob árvores, vento fresquinho e ao som da natureza..."
            labelButton="Buscar Imóveis"
            actionButton={() => console.log("Clicked")}
            imageUrl="/yard.png"
          />
        </TabsContent>
        <TabsContent value="internet" className="flex flex-col gap-4 mt-0">
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
  );
};
