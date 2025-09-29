"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-10">
      <div className="relative inline-block text-center sm:text-left">
        {/* Responsive heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold pr-12">
          Still working on it
        </h1>

        {/* Responsive Lottie animation */}
        <DotLottieReact
          src="https://lottie.host/a608843f-0dee-4c34-bb4e-28cf56623908/o77txjOEEL.lottie"
          loop
          autoplay
          className="
            absolute
            -top-4 sm:-top-6 md:-top-14 md:-right-10
            right-5
            w-10 h-10 sm:w-14 sm:h-14 md:w-40 md:h-40
            rotate-85
          "
        />
      </div>
    </div>
  );
}
