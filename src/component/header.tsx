import Image from "next/image";
import React from "react";
import { ImageComponent } from "./image";

export const Header = () => {
  return (
    <div className="p-3">
      <ImageComponent src="./" alt="" />
    </div>
  );
};
