"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
}

const sizeMap = {
  sm: { width: 40, height: 40 },
  md: { width: 64, height: 64 },
  lg: { width: 96, height: 96 },
  hero: { width: 320, height: 320 },
};

export default function Logo({
  className = "",
  size = "md",
}: LogoProps) {
  const s = sizeMap[size];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Rust & Roses"
        width={s.width}
        height={s.height}
        className="object-contain"
        priority={size === "hero"}
      />
    </div>
  );
}
