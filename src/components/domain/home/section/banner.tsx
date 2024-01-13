import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative grow">
      <Image
        alt="Banner with apresentation text"
        src="/main-banner.png"
        width={0}
        height={0}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
      <div className="flex flex-col absolute top-[40px] left-16">
        <p className="uppercase text-white font-bold text-2xl">VENDE.</p>
        <p className="uppercase text-white font-bold text-2xl">ALUGA.</p>
        <p className="uppercase text-white font-bold text-2xl">CONECTA.</p>
      </div>
    </div>
  );
};
