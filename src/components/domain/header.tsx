import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-white p-3">
      <Image
        src="/logo.svg"
        priority
        alt="Logo of Netimóveis"
        width={0}
        height={0}
        sizes="100vw"
        className="h-[36px] w-[126px]"
      />

      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="text-[#4E5254]" />
        </SheetTrigger>
        <SheetContent side="right">MENU</SheetContent>
      </Sheet>
    </div>
  );
};
