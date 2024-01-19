import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-[#F36C21] px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center gap-4 pb-10 pt-3 lg:w-[65%] lg:flex-row lg:justify-between lg:self-center lg:py-3 ">
        <Image
          src="/logo-footer.png"
          alt="footer to netimoveis in footer"
          width={0}
          height={0}
          priority
          sizes="100vw"
          className="h-[38px] w-auto"
        />

        <p className="text-center text-xs text-white lg:hidden">
          © Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.
        </p>
        <div className="grid grid-cols-2 gap-2 lg:hidden">
          <p className="text-center text-xs text-white">
            Política de privacidade
          </p>
          <p className="text-center text-xs text-white">Termos de uso</p>
          <p className="text-center text-xs text-white">LGPD</p>
          <p className="text-center text-xs text-white">Versão: 25/10/2021</p>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-2">
          <p className="text-center text-xs text-white">
            © Copyright 2021 Netimóveis Brasil SA. Todos os direitos
            reservados.
          </p>
          <div className="grid grid-cols-4 gap-2">
            <p className="text-nowrap text-center  text-xs text-white">
              Política de privacidade
            </p>
            <p className="text-center text-xs text-white">Termos de uso</p>
            <p className="text-center text-xs text-white">LGPD</p>
            <p className="text-center text-xs text-white">Versão: 25/10/2021</p>
          </div>
        </div>

        <div className="flex gap-8">
          <Instagram className="text-white" />
          <Facebook className="text-white" />
          <Linkedin className="text-white" />
          <Youtube className="text-white" />
        </div>
      </div>
    </div>
  );
};
