'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const images = ['/images/sail1.png', '/images/sail2.png', '/images/sail3.png']

export default function SailDashboardCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`Sail dashboard ${index + 1}`}
            fill
            className="object-contain rounded-lg"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
