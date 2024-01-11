import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="p-3 flex justify-between items-center">
      <Image
        src="/logo.svg"
        priority
        alt="Logo of Netimóveis"
        width={126}
        height={36}
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
