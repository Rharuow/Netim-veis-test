"use client";
import { Topic } from "./topic";

export const PlacesSection = () => {
  return (
    <div className="flex flex-col px-4 gap-12 bg-gradient-to-b from-[#EDF1F4] to-white pt-16">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">
          Encontre um lugar que é a sua cara
        </h2>
        <p className="text-xl text-[#808587] font-normal">
          A Netimóveis te proporciona uma experiência ágil e segura neste
          momento tão importante que é decidir um lar.
        </p>
      </div>

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
  );
};
