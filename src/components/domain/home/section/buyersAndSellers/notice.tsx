import { Clock5 } from "lucide-react";
import Image from "next/image";

export const Notice = ({
  alt,
  minutesToRead,
  src,
  title,
  tag,
}: {
  src: string;
  alt: string;
  minutesToRead: number;
  title: string;
  tag?: string;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <Image
        alt={alt}
        src={src}
        priority
        width={0}
        height={0}
        sizes="100vw"
        className="h-[224px] w-auto rounded-lg"
      />
      <div className="flex gap-4">
        <span className="flex items-center gap-1 text-[#848484]">
          <Clock5 size={16} /> {minutesToRead} Min de Leitura
        </span>
        {tag && <span className="text-[#E95808]">{tag}</span>}
      </div>

      <h1 className="text-2xl font-bold text-[#3A3A3A]">{title}</h1>
    </div>
  );
};
