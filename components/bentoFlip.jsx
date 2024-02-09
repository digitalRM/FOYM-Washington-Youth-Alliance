'use client'
import Image from "next/image";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function BentoFlip({ name, description, image }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <button onClick={handleClick}>
      <ReactCardFlip
        isFlipped={isFlipped}
        className="overflow-hidden hover:-translate-y-2"
        cardStyles={{ overflow: "hidden" , hover: "translate-y-2" }}
      >
        <div key={name} className="col-span-1 row-span-1 aspect-square w-full bg-white rounded-xl shadow-lg p-4 flex flex-col justify-end bg-cover bg-center items-start overflow-hidden relative transition hover:shadow-xl front">
          <p className=" text-lg font-semibold leading-8 tracking-tight text-white z-[1]">{name}</p>
          <Image quality={90} src={image} alt={name} width="266" height="266" className="absolute inset-0 w-full h-full object-cover rounded-xl z-0" />
        </div>
        <div key={name} className="col-span-1 row-span-1 aspect-square w-full bg-white rounded-xl shadow-lg p-4 flex flex-col justify-end bg-cover bg-center items-start overflow-hidden relative transition hover:shadow-xl front">
          <p className=" text-lg font-semibold leading-8 tracking-tight text-white z-[1]">{description}</p>
          <Image quality={90} src={image} alt={name} width="266" height="266" className="absolute inset-0 w-full h-full object-cover rounded-xl z-0" />
        </div>
      </ReactCardFlip>
    </button>

  )
}

