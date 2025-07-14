// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <img
        src="/images/homebackground.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-10" />

      {/* Text block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          absolute z-20
          left-[5vw] top-1/2 -translate-y-1/2
          w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%]
          max-w-[1200px]
        "
      >
        {/* Heading */}
        <h1
          className="
            text-white font-bold leading-tight
            text-[clamp(2rem,3vw,6rem)]
            4k:text-[7rem]
          "
        >
          We transform your <br />
          <span className="text-[#8D3BFA]">
            vision into a digital masterpiece.
          </span>
        </h1>

        {/* Paragraph */}
        <p
          className="
            mt-4 text-white/80 leading-relaxed
            text-[clamp(1rem,1vw,2rem)]
            4k:text-[3rem]
            max-w-[70ch]
          "
        >
          Your business is always anticipating what’s next, and we believe a
          creative approach to marketing is the best way to showcase that. Our
          talented team offers graphic design, illustrations, websites, apps,
          and strategic planning.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-6">
          <Link href="/services">
            <button
              className="
        bg-[#8D3BFA] hover:bg-[#7229d8] text-white
        px-8 py-4 rounded-md
        text-[clamp(1rem,1vw,1.25rem)]
        4k:text-[1.5rem]
        shadow-lg
      "
            >
              Get Started <span className="ml-2">➜</span>
            </button>
          </Link>

          <Link href="/services">
            <button
              className="
        bg-white text-black
        px-8 py-4 rounded-md
        text-[clamp(1rem,1vw,1.25rem)]
        4k:text-[1.5rem]
        shadow-lg
        hover:bg-gray-100
      "
            >
              Learn More
            </button>
          </Link>
        </div>

      </motion.div>
    </section>
  );
}
