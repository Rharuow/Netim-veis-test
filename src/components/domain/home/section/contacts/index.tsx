import Image from "next/image";
import { Topics } from "./topics";

export const ContactsSection = () => {
  return (
    <div
      className="flex flex-col gap-8 bg-[#E3E7EC] px-4 pb-12 pt-12 lg:px-0"
      id="contacts"
    >
      <div className="lg:grid lg:w-[65%] lg:grid-cols-4 lg:gap-12 lg:self-center ">
        <Topics
          title="A Netimóveis"
          topics={[
            "Quem somos",
            "Como funciona",
            "Seja um parceiro",
            "Quero me associar",
            "Acessoria de imprensa",
            "Soluções Corporativas",
            "Covid-19",
          ]}
        />
        <Topics
          title="Recursos"
          topics={[
            "Comprar",
            "Alugar",
            "Lançamentos",
            "Anunciar Imóvel",
            "Simular Financiamento",
            "Imobiliárias",
            "Blog",
          ]}
        />
        <Topics
          title="Contato"
          topics={["Fale Conosco", "Perguntas Frequentes", "Suporte"]}
        />
        <div className="flex flex-col">
          <Topics
            title="Nossos Aplicativos"
            topics={["Loc Fácil Netimóveis", "Pro Imob Netimóveis"]}
          />

          <div className="flex gap-2">
            <Image
              src="/app-store-botao.png"
              priority
              alt="Logo of Netimóveis"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[32px] w-auto"
            />
            <Image
              src="/play-store-botao.png"
              priority
              alt="Logo of Netimóveis"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[32px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
