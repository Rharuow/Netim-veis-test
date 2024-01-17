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
        className="h-[173px] w-full object-cover lg:h-[640px] lg:object-right"
      />
      <div className="absolute left-16 top-[40px] flex flex-col lg:left-1/2 lg:top-32 lg:-translate-x-1/2 lg:transform lg:flex-row">
        <p className="text-2xl font-bold uppercase text-white">VENDE.</p>
        <p className="text-2xl font-bold uppercase text-white">ALUGA.</p>
        <p className="text-2xl font-bold uppercase text-white">CONECTA.</p>
      </div>
    </div>
  );
};
