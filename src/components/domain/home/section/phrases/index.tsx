import Image from "next/image";
import { Phrase } from "./phrase";

export const PhrasesSections = () => {
  return (
    <div className="flex flex-col gap-8 bg-[#F7F9FA] lg:grid lg:grid-cols-2">
      <div className="relative">
        <Image
          alt="Family banner"
          src="/family-banner.png"
          height={0}
          width={0}
          priority
          sizes="100vw"
          className="h-[208px] w-full object-cover object-top lg:h-[513px]"
        />
        <div className="absolute right-8 top-3 w-32 lg:w-64">
          <p className="text-xl font-semibold text-white lg:text-4xl">
            Todo mundo merece seu cantinho do aconchego.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-4 lg:justify-around lg:gap-0">
        <h1 className="text-xl font-bold text-[#808587]">
          Aqui vai uma frase de efeito
        </h1>

        <Phrase
          subtitle="Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit"
          title="Motivo para negociar com a Netimóveis"
        />

        <Phrase
          subtitle="Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
          title="Motivo para negociar com a Netimóveis"
        />

        <Phrase
          subtitle="Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
          title="Motivo para negociar com a Netimóveis"
        />
      </div>
    </div>
  );
};
