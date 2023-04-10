import React from "react";
import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40 md:w-80 md:h-52 flex-shrink-0">
        <Image src={img} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}

export default InfoCard;
