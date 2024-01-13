import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Notice } from "./notice";

export const BuyersAndSellersSection = () => {
  return (
    <div className="flex flex-col gap-10 px-4 pt-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-[#4E5254]">
          Para compradores, vendedores ou curiosos :)
        </h1>

        <Link
          href="#"
          className="text-md flex items-center gap-1 text-[#2362AF]"
        >
          Ver mais no Blog <ExternalLink size={14} />
        </Link>
      </div>

      <Notice
        alt="meet banner"
        minutesToRead={2}
        src="/meet.png"
        tag="Mundo Netimóveis"
        title="ENCONTRO NETIMÓVEIS BRASIL – N CONNECTIONS 2021: A FORÇA DOS NEGÓCIOS EM REDE"
      />
      <Notice
        alt="financial banner"
        minutesToRead={2}
        src="/financial.png"
        tag="Finanças"
        title="ORGANIZAÇÃO FINANCEIRA NAS IMOBILIÁRIAS"
      />
      <Notice
        alt="management banner"
        minutesToRead={2}
        src="/management.png"
        tag="Sucesso Profissional"
        title="EFICIÊNCIA NA GESTÃO DE CHAMADOS DE MANUTENÇÃO"
      />
    </div>
  );
};
