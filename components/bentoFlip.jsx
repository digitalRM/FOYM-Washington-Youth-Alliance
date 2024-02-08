'use client'
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function BentoFlip({ name, description }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <button onClick={handleClick}>
      <ReactCardFlip
        isFlipped={isFlipped}
      >
        <div className="front">
          <p className=" text-lg font-semibold leading-8 tracking-tight text-white z-[1]">{name}</p>
        </div>
        <div className="back">
          <p className=" text-lg font-semibold leading-8 tracking-tight text-white z-[1]">{description}</p>
        </div>
      </ReactCardFlip>
    </button>

  )
}

