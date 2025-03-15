"use client" 

import Image from "next/image";
import { useState } from "react";

interface TamaNotchiProps {
    name: string;
    link: string;
} 

export default function TamaNotchi({name, link}: TamaNotchiProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative w-fit"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
    >
      <Image 
        src={link}
        alt="It's tamaNOTchi! Click to feed!" 
        width={0} 
        height={0} 
        style={{ width: "auto", height: "auto" }}
        unoptimized
      />
      {hover && (
        <div 
          className="fixed bg-[#1F2421] z-10 text-white text-xs px-2 py-1 rounded pointer-events-none"
          style={{
            top: position.y + 35, // Offset so it doesn't block the cursor
            left: position.x + 70, // Offset for better positioning
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          click to feed {name}
        </div>
      )}
    </div>
  );
}