import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const AdsSection = () => {
  return (
    <div className="flex flex-col gap-6 px-4">
      <p className="text-[#3A3A3A] font-bold text-xl">
        Novos Anúncios em <span className="text-[#ED672B]">Belo Horizonte</span>
      </p>
      <Link href="/" className="text-[#2362AF] text-md flex gap-1 items-center">
        Ver todos os imóveis <ExternalLink size={14} />
      </Link>

      <Carousel className="w-full max-w-xs">
        <CarouselContent></CarouselContent>
      </Carousel>
    </div>
  );
};
