"use client";
import { Separator } from "@radix-ui/react-separator";
import { Topic } from "./topic";
import { TabsPlaces } from "./tabs";

export const PlacesSection = () => {
  return (
    <div className="flex flex-col gap-12 bg-gradient-to-b from-[#EDF1F4] to-white pt-16 overflow-hidden">
      <div className="flex flex-col gap-6  px-4">
        <h2 className="text-3xl font-bold">
          Encontre um lugar que é a sua cara
        </h2>
        <p className="text-xl text-[#808587] font-normal">
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
    </div>
  );
};
