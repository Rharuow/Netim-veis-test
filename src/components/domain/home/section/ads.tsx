"use client";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import { Dot, ExternalLink } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import flats from "@/service/flats.json";
import { Card } from "@/components/ui/card";

import emptyImage from "@public/empty-image.json";
import { Tag } from "@/components/ui/tag";

export const AdsSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col px-4">
        <p className="text-[#3A3A3A] font-bold text-xl">
          Novos Anúncios em{" "}
          <span className="text-[#ED672B]">Belo Horizonte</span>
        </p>
        <Link
          href="/"
          className="text-[#2362AF] text-md flex gap-1 items-center"
        >
          Ver todos os imóveis <ExternalLink size={14} />
        </Link>
      </div>

      <Carousel className="w-full  ps-4">
        <CarouselContent className="w-80">
          {flats.map((flat, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <div className="flex flex-col justify-center">
                  {flat.ImagesUrl && flat.ImagesUrl.length > 0 ? (
                    <Image
                      src={flat.ImagesUrl[0]}
                      height={0}
                      alt={`Image to flat ${index}`}
                      width={0}
                      priority
                      sizes="100vw"
                      className="h-[198px] w-full object-cover object-top"
                    />
                  ) : (
                    <div className="h-[198px]">
                      <Lottie
                        animationData={emptyImage}
                        className="h-[150px]"
                        loop={true}
                      />
                      <p className="text-center text-sm">Sem imagens</p>
                    </div>
                  )}
                  <div className="flex flex-col gap-3 p-4 pb-6">
                    <div className="flex flex-col gap-1">
                      <p className="font-bold">{flat.Title}</p>
                      <p className="text-[#848484] text-sm">
                        {flat.Author}, {flat.City}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm">{flat.Rooms} Quartos</p>
                      <Dot className="text-[#CACACA]" />
                      <p className="text-sm">Sem Banheiros</p>
                      <Dot className="text-[#CACACA]" />
                      <p className="text-sm">Sem Vagas</p>
                    </div>

                    <div className="flex gap-3">
                      {flat.Tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>

                    <p className="text-[#ED672B] font-bold text-xl">
                      {flat.Price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
