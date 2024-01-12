"use client";
import Image from "next/image";
import Link from "next/link";

import { Topic } from "./topic";
import { TabsPlaces } from "./tabs";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import places from "@/service/place.json";
import emptyImage from "@public/empty-image.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Lottie from "lottie-react";
import { CarouselPlaces } from "./caousel";

export const PlacesSection = () => {
  return (
    <div className="flex flex-col gap-12  overflow-hidden">
      <div className="flex flex-col gap-6 bg-gradient-to-b from-[#EDF1F4] to-white px-4  pt-16">
        <h2 className="text-3xl font-bold">
          Encontre um lugar que é a sua cara
        </h2>
        <p className="text-xl font-normal text-[#808587]">
          A Netimóveis te proporciona uma experiência ágil e segura neste
          momento tão importante que é decidir um lar.
        </p>
      </div>

      <div className="px-4">
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

      <div className="px-4">
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

      <Separator className="border-b-2 border-[#E1E5E9]" />

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
    </div>
  );
};
