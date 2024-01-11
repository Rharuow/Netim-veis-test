import { MapPin, Bed, ChevronDown } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabsSection = () => {
  return (
    <Tabs defaultValue="rent" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="rent">Alugar</TabsTrigger>
        <TabsTrigger value="buy">Comprar</TabsTrigger>
      </TabsList>
      <TabsContent value="rent" className="px-4 pt-6 flex flex-col gap-4">
        <Card className="py-4 px-6 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <MapPin className="text-[#A1A7AA] text-sm" />
            <p className="text-[#393B3D] font-bold text-sm">Localização</p>
          </div>
          <div className="flex">
            <p className="text-[#808487]">Qual é a sua localização?</p>
          </div>
        </Card>

        <Card className="py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bed className="text-[#A1A7AA]" />
              <p className="text-[#393B3D] font-bold text-sm">Nº de Quartos</p>
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
  );
};
