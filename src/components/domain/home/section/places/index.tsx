"use client";
import Image from "next/image";
import Link from "next/link";

import { Topic } from "./topic";
import { TabsPlaces } from "./tabs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { CarouselPlaces } from "./caousel";
import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, KeyRound } from "lucide-react";

export const PlacesSection = () => {
  return (
    <div
      className="flex flex-col gap-12 overflow-hidden lg:bg-gradient-to-b lg:from-[#EDF1F4] lg:to-white"
      id="places"
    >
      <div className="lg:grid lg:w-[65%] lg:grid-cols-2 lg:justify-center lg:gap-10 lg:self-center lg:py-9">
        <div className="flex flex-col gap-6 bg-gradient-to-b from-[#EDF1F4] to-white px-4 pt-16 lg:bg-none ">
          <h2 className="text-3xl font-bold">
            Encontre um lugar que é a sua cara
          </h2>
          <p className="text-xl font-normal text-[#808587]">
            A Netimóveis te proporciona uma experiência ágil e segura neste
            momento tão importante que é decidir um lar.
          </p>
        </div>

        <div className="hidden lg:flex lg:items-center">
          <Tabs
            defaultValue="rent"
            className="rounded-xl px-10 py-4 lg:bg-white"
          >
            <TabsList className="flex w-full justify-around lg:mb-12 lg:h-full lg:w-full">
              <TabsTrigger
                value="rent"
                className="flex flex-col items-center gap-2"
              >
                <KeyRound /> Alugar Imóvel
              </TabsTrigger>
              <TabsTrigger
                value="buy"
                className="flex flex-col items-center gap-2"
              >
                <DollarSign /> Comprar Imóvel
              </TabsTrigger>
              <TabsTrigger
                value="announce"
                className="flex flex-col items-center gap-2"
              >
                <DollarSign /> Anunciar Imóvel
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rent">
              <Topic
                buttonAction={() => {}}
                buttonText="Ver imóveis para Alugar"
                firstLinkPath="/"
                firstLinkText="Veja como Alugar sem Fiador"
                secondLinkPath="/"
                secondLinkText="Saiba como Alugar na Netimóveis"
                subtitle="Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde omnis iste natus error sit."
                title="Alugue sem Complicação"
              />
            </TabsContent>
            <TabsContent value="buy">
              <Topic
                buttonAction={() => {}}
                buttonText="Ver imóveis para Comprar"
                firstLinkPath="/"
                firstLinkText="Descubra seu Poder de Compra"
                secondLinkPath="/"
                secondLinkText="Saiba como Comprar na Netimóveis"
                subtitle="Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde
        omnis iste natus error sit."
                title="Compre com Segurança"
              />
            </TabsContent>
            <TabsContent value="announce">
              <Topic
                buttonAction={() => {}}
                buttonText="Ver formas de anunciar"
                firstLinkPath="/"
                firstLinkText="Descubra como anunciar"
                secondLinkPath="/"
                secondLinkText="Saiba como Anunciar na Netimóveis"
                subtitle="Anuncie seu imóvel com segurança e agilidade. Sed ut perspiciatis unde
        omnis iste natus error sit."
                title="Anuncie sem complicações"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="px-4 lg:hidden">
        <Topic
          buttonAction={() => {}}
          buttonText="Ver imóveis para Alugar"
          firstLinkPath="/"
          firstLinkText="Veja como Alugar sem Fiador"
          secondLinkPath="/"
          secondLinkText="Saiba como Alugar na Netimóveis"
          subtitle="Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde omnis iste natus error sit."
          title="Alugue sem Complicação"
        />
      </div>

      <div className="px-4 lg:hidden">
        <Topic
          buttonAction={() => {}}
          buttonText="Ver imóveis para Comprar"
          firstLinkPath="/"
          firstLinkText="Descubra seu Poder de Compra"
          secondLinkPath="/"
          secondLinkText="Saiba como Comprar na Netimóveis"
          subtitle="Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde
        omnis iste natus error sit."
          title="Compre com Segurança"
        />
      </div>

      <Separator className="border-b-2 border-[#E1E5E9] lg:hidden" />

      <TabsPlaces />

      <div className="flex flex-col gap-10 px-4">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#ED672B]">Quer vender?</p>

          <h1 className="text-4xl font-bold text-[#4E5254]">
            Anuncie grátis para mais de 100 mil pessoas todos os dias.
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <Button
              variant="outline"
              className="border-[#8A2CB1] text-[#8A2CB1]"
            >
              Anunciar Imóvel
            </Button>
          </div>

          <div>
            <Link
              href="/"
              className="border-b border-[#C0C7CA] text-sm text-[#393B3D]"
            >
              Saiba Quanto vale seu imóvel
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/banner-to-sellers.png"
        alt="couple of sellers"
        height={0}
        width={0}
        priority
        sizes="100vw"
        className="h-[192px] w-full object-cover object-top"
      />

      <CarouselPlaces />

      <div className="px-4">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            alt="Portugal banner"
            src="/portugal-banner.png"
            height={0}
            width={0}
            priority
            sizes="100vw"
            className="h-[208px] w-full object-cover object-top"
          />

          <p className="absolute left-4 top-8 z-10 text-2xl font-bold text-white">
            Encontre a oportunidade Perfeita em Portugal
          </p>
          <Button
            className="absolute bottom-8 left-4 z-10 bg-white text-[#E95808]"
            onClick={() => console.log("go to portugal properties")}
          >
            Ver imóveis em Portugal
          </Button>
          <div className="absolute left-0 top-0 h-[208px] w-full bg-gradient-to-r from-black"></div>
        </div>
      </div>
    </div>
  );
};
