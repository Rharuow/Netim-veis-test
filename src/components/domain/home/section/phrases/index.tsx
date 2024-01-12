import { SectionSeparator } from "@/components/ui/sectionSeparator";
import { Phrase } from "./phrase";

export const PhrasesSections = () => {
  return (
    <div className="flex flex-col gap-8 bg-[#F7F9FA] px-4">
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
  );
};
