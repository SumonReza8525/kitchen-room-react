import React from "react";
// import cookImg from "../assets/cook-bg.gif";
import { CookingPot } from "lucide-react";

const Banner = () => {
  return (
    <div className=" mb-6 min-h-40 lg:min-h-72 bg-[url('/title-bg.png')] bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <CookingPot className="md:w-12 w-8 md:h-12 h-8" />

      <h2 className="text-3xl lg:text-5xl font-extrabold ml-1 outfitFont">
        Kitchen Room
      </h2>
    </div>
  );
};

export default Banner;
