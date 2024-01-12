import Image from "next/image";
import Lottie from "lottie-react";

import places from "@/service/place.json";
import emptyImage from "@public/empty-image.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

export const CarouselPlaces = () => {
  return (
    <div className="relative grid grid-cols-3 gap-y-6 px-4">
      <p className="col-span-2 font-bold text-[#4E5254]">
        Prontos para te Receber em mais de 10 estados
      </p>

      <div className="col-span-3">
        <Carousel>
          <CarouselContent>
            {places.map((place) => (
              <CarouselItem
                key={place.placeId}
                className="flex basis-4/5 flex-col gap-6"
              >
                {place.imageUrl ? (
                  <Card className="relative overflow-hidden">
                    <Image
                      alt={`place image ${place.name}`}
                      src={place.imageUrl}
                      height={0}
                      width={0}
                      priority
                      sizes="100vw"
                      className="h-[192px] w-full object-cover object-top"
                    />
                    <p className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {place.name}
                    </p>
                  </Card>
                ) : (
                  <div className="relative h-[192px] rounded-lg bg-[#ED672B]">
                    <Lottie
                      animationData={emptyImage}
                      className="h-[150px]"
                      loop={true}
                    />
                    <p className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {place.name}
                    </p>
                  </div>
                )}
                <ul className="flex list-inside list-disc flex-col gap-2 marker:text-[#ED672B]">
                  <li className="text-sm text-[#4E5254]">
                    Casas à venda em {place.name}
                  </li>
                  <li className="text-sm text-[#4E5254]">
                    Apto. à venda em {place.name}
                  </li>
                  <li className="text-sm text-[#4E5254]">
                    Casas para Locação em {place.name}
                  </li>
                  <li className="text-sm text-[#4E5254]">
                    Apto. para locação em {place.name}
                  </li>
                </ul>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-12 top-[-50px] flex ">
            <CarouselNext />
            <CarouselPrevious />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
