import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-white p-3 lg:justify-normal lg:gap-12">
      <Image
        src="/logo.svg"
        priority
        alt="Logo of Netimóveis"
        width={0}
        height={0}
        sizes="100vw"
        className="h-[36px] w-[126px]"
      />

      <div className="hidden lg:flex lg:grow lg:gap-10">
        <Link className="text-[#555555]" href="/#places">
          Imobiliárias
        </Link>
        <Link className="text-[#555555]" href="/#buyersAndSellers">
          Quero me Associar
        </Link>
        <Link className="text-[#555555]" href="/#contacts">
          Sobre
        </Link>
        <Link className="text-[#555555]" href="/#blogs">
          Blog
        </Link>
      </div>

      <div className="hidden lg:flex lg:grow lg:items-center lg:gap-8">
        <Button
          className="rounded-full border-[#652D91] text-[#652D91]"
          variant="outline"
        >
          Anunciar Imóvel
        </Button>
        <Link className="text-[#555555]" href="#">
          Entrar
        </Link>
      </div>

      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <MenuIcon className="text-[#4E5254]" />
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col gap-6 lg:hidden">
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link className="text-[#555555]" href="/#places">
                Imobiliárias
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="text-[#555555]" href="/#buyersAndSellers">
                Quero me Associar
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="text-[#555555]" href="/#contacts">
                Sobre
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="text-[#555555]" href="/#blogs">
                Blog
              </Link>
            </SheetClose>
          </div>
          <Separator />
          <div className="flex flex-col gap-4">
            <SheetClose asChild>
              <Link className="text-[#555555]" href="#">
                Entrar
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Button
                className="rounded-full border-[#652D91] text-[#652D91]"
                variant="outline"
              >
                Anunciar Imóvel
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
