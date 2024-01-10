import Image from "next/image";

export const Header = () => {
  return (
    <div className="p-3">
      <Image
        src="./logo.svg"
        alt="Logo of Netimóveis"
        width={126}
        height={36}
      />
    </div>
  );
};
