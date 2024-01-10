import Image, { ImageProps } from "next/image";
import React from "react";

export const ImageComponent = ({ src, alt, ...props }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={0}
      width={0}
      priority
      sizes="100vw"
      className="h-auto w-full px-5"
      {...props}
    />
  );
};
