import { MapPin, Bed, ChevronDown, Search } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export const TabsSection = () => {
  return (
    <div className="flex flex-col gap-6 px-4">
      <Tabs defaultValue="rent" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="rent">Alugar</TabsTrigger>
          <TabsTrigger value="buy">Comprar</TabsTrigger>
        </TabsList>
        <TabsContent value="rent" className=" flex flex-col gap-4 ">
          <Card className="flex flex-col gap-1 px-6 py-4">
            <div className="flex items-center gap-2">
              <MapPin className="text-sm text-[#A1A7AA]" />
              <p className="text-sm font-bold text-[#393B3D]">Localização</p>
            </div>
            <div className="flex">
              <p className="text-[#808487]">Qual é a Localização?</p>
            </div>
          </Card>

          <Card className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bed className="text-[#A1A7AA]" />
                <p className="text-sm font-bold text-[#393B3D]">
                  Nº de Quartos
                </p>
              </div>
              <div className="flex">
                <ChevronDown className="text-[#555555]" size={18} />
              </div>
            </div>
            <div className="flex">
              <p className="text-[#808487]">Quantos Quartos?</p>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="buy" className="m-0 flex flex-col gap-4">
          <Card className="flex flex-col gap-1 px-6 py-4">
            <div className="flex items-center gap-2">
              <MapPin className="text-sm text-[#A1A7AA]" />
              <p className="text-sm font-bold text-[#393B3D]">Localização</p>
            </div>
            <div className="flex">
              <p className="text-[#808487]">Qual é a sua localização?</p>
            </div>
          </Card>

          <Card className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bed className="text-[#A1A7AA]" />
                <p className="text-sm font-bold text-[#393B3D]">
                  Nº de Quartos
                </p>
              </div>
              <div className="flex">
                <ChevronDown className="text-[#555555]" size={18} />
              </div>
            </div>
            <div className="flex">
              <p className="text-[#808487]">Quantos Quartos?</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      <Button className="bg-[#E95808] font-semibold">
        <Search className="me-2" size={18} />
        Buscar Imóveis
      </Button>
    </div>
  );
};
