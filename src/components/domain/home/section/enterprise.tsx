import { Button } from "@/components/ui/button";
import Link from "next/link";

export const EnterpriseSection = () => {
  return (
    <div className="flex flex-col gap-6 bg-[#1C2A39]">
      <div className="flex flex-col gap-4 px-4 pt-10">
        <div>
          <Button
            variant="outline"
            className="rounded-full border-[#E95808] bg-transparent text-white"
          >
            Para Empresas
          </Button>
        </div>

        <p className="text-2xl font-bold text-white">
          Faça parte da Netimóveis
        </p>
      </div>

      <div className="px-4">
        <p className="text-xl text-[#C0C7CA]">
          É uma empresa ou rede de imobiliárias? Associe-se e alcance um próximo
          patamar de eficiência e tecnologia.
        </p>
      </div>

      <div className="px-4">
        <Button
          variant="outline"
          className="border-none font-semibold text-[#E95808]"
        >
          Mais Sobre se Associar
        </Button>
      </div>
      <div className="px-4">
        <Link href="#" className="border-b border-white text-sm text-white">
          Saiba Quanto vale seu imóvel
        </Link>
      </div>
    </div>
  );
};
