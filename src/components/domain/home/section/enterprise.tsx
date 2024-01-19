import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const EnterpriseSection = () => {
  return (
    <div className="flex flex-col gap-6 bg-[#1C2A39] lg:grid lg:w-[65%] lg:grid-cols-2 lg:self-center lg:overflow-hidden lg:rounded-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:px-16 lg:py-10">
        <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0 lg:pt-0">
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

        <div className="px-4 lg:px-0">
          <p className="text-xl text-[#C0C7CA]">
            É uma empresa ou rede de imobiliárias? Associe-se e alcance um
            próximo patamar de eficiência e tecnologia.
          </p>
        </div>

        <div className="px-4 lg:px-0">
          <Button
            variant="outline"
            className="border-none font-semibold text-[#E95808]"
          >
            Mais Sobre se Associar
          </Button>
        </div>
        <div className="px-4 lg:px-0">
          <Link href="#" className="border-b border-white text-sm text-white">
            Saiba Quanto vale seu imóvel
          </Link>
        </div>
      </div>

      <div className="lg:hidden">
        <Image
          src="/puzzle.png"
          priority
          alt="puzzle image"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full"
        />
      </div>

      <div className="hidden lg:block">
        <Image
          src="/puzzle-horizontal.png"
          priority
          alt="puzzle image"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
