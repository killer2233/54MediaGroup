'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'JP Senior Wood Works',
    description: 'JP Senior Woodworks is dedicated to crafting high-quality, handcrafted wooden pieces that blend tradition with precision. With a passion for fine woodworking, we transform raw timber into timeless creations, ensuring every project reflects craftsmanship, durability, and artistry.',
    image: '/images/Header.png',
    link: '/jp'
  },
  {
    title: 'Sail Podcasting App',
    description: 'A podcasting platform with Firebase backend, Stripe subscriptions, and beautiful UX for creators and listeners.',
    image: '/images/sailheader.png',
    link: '/sail-case-study'
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Featured Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of standout work we’ve done for our clients — from full-stack platforms to next-gen marketing tools.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.a
            href={proj.link}
            key={i}
            whileHover={{ scale: 1.03 }}
            className="block group rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden bg-white"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#8D3BFA] transition">
                {proj.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {proj.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  )
}
