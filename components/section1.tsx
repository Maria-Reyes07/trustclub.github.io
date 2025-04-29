"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export function Section1() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100); // delay a bit for effect
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="section-banner relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/trust-lion.png"
        alt="T.R.U.S.T Banner Lion"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Overlay Text */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          T.R.U.S.T
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300 drop-shadow-md">
          The Redeemer Understands, So Trust Him
        </p>
      </div>
    </section>
  );
}

