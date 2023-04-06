import React from "react";
import Image from "next/image";

function SmallCard({ image, distance, location }) {
  return (
    <div className="flex">
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
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
