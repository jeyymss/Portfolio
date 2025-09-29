"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-10">
      {/* Motion wrapper to animate the heading and Lottie */}
      <motion.div
        className="relative inline-block text-center sm:text-left"
        initial={{ opacity: 0, y: -20 }} // 👈 fades in and slides up
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Responsive heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold pr-12">
          I&apos;m working on this page right now 🚧
        </h1>

        {/* Responsive Lottie animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // 👈 scales + fades in
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="
            absolute
            -top-4 sm:-top-6 md:-top-14 md:-right-10
            right-5
            w-10 h-10 sm:w-14 sm:h-14 md:w-40 md:h-40
            rotate-85
          "
        >
          <DotLottieReact
            src="https://lottie.host/a608843f-0dee-4c34-bb4e-28cf56623908/o77txjOEEL.lottie"
            loop
            autoplay
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
