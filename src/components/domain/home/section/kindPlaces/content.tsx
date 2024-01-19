import React from "react";

export const Content = () => {
  return (
    <div className="flex flex-col gap-12 pt-8 lg:grid lg:grid-cols-4">
      <div className="grid grid-cols-2 lg:hidden">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[#555555]">Alugar</p>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-[#555555]">Apartamentos</p>
            <p className="text-sm text-[#555555]">Casas</p>
            <p className="text-sm text-[#555555]">Terrenos</p>
            <p className="text-sm text-[#555555]">Lojas</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-[#555555]">Comprar</p>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-[#555555]">Imóv. em Condomínios</p>
            <p className="text-sm text-[#555555]">Casas à venda</p>
            <p className="text-sm text-[#555555]">Comprar terrenos</p>
            <p className="text-sm text-[#555555]">Lançamentos</p>
          </div>
        </div>
      </div>

      <div className="hidden flex-col gap-4 lg:flex">
        <p className="font-bold text-[#555555]">Alugar</p>

        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#555555]">Apartamentos</p>
          <p className="text-sm text-[#555555]">Casas</p>
          <p className="text-sm text-[#555555]">Terrenos</p>
          <p className="text-sm text-[#555555]">Lojas</p>
        </div>
      </div>

      <div className="hidden flex-col gap-4 lg:flex">
        <p className="font-bold text-[#555555]">Comprar</p>

        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#555555]">Imóv. em Condomínios</p>
          <p className="text-sm text-[#555555]">Casas à venda</p>
          <p className="text-sm text-[#555555]">Comprar terrenos</p>
          <p className="text-sm text-[#555555]">Lançamentos</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-bold text-[#555555]">Comercial</p>

        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#555555]">Imóveis com escritório</p>
          <p className="text-sm text-[#555555]">Prédio comercial</p>
          <p className="text-sm text-[#555555]">Galpão de Armazenamento</p>
          <p className="text-sm text-[#555555]">Salão de Eventos</p>
        </div>
      </div>
    </div>
  );
};
