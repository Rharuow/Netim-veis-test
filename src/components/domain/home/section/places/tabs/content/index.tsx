import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Content = ({
  actionButton,
  subtitle,
  title,
  imageUrl,
  labelButton = "Buscar Imóveis",
}: {
  title: string;
  subtitle: string;
  labelButton?: string;
  imageUrl: string;
  actionButton?: () => void;
}) => {
  return (
    <>
      <div className="flex flex-col gap-6 px-4">
        <h1 className="text-4xl font-bold text-[#393B3D]">{title}</h1>
        <p className="text-[#4E5254]">{subtitle}</p>
      </div>
      <div className="flex px-4">
        <Button
          variant="outline"
          className="border-2 border-[#8224CB] text-[#8224CB]"
          onClick={actionButton}
        >
          {labelButton}
        </Button>
      </div>
      <Image
        src={imageUrl}
        priority
        alt="Logo of Netimóveis"
        width={0}
        height={0}
        sizes="100vw"
        className="h-[208px] w-full object-cover object-right lg:hidden"
      />
    </>
  );
};
