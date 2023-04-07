import React from "react";
import Image from "next/image";

function SmallCard({ image, distance, location }) {
  return (
    <div className="flex items-center m-2 space-x-4 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left */}
      <div className="relative h16 w-16 ">
        <Image
          src={image}
          height={100}
          width={100}
          className="rounded-lg"
          priority
          alt="Img"
        />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
