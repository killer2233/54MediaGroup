// components/ShowcaseMarquee.tsx
'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'

// your three items
const baseItems = [
  {
    src: '/images/homesail.png',
    alt: 'Sail Podcasting',
    title: 'Sail Podcasting',
    subtitle: 'Website & App Platform',
  },
  {
    src: '/images/homejohn.png',
    alt: 'JP Senior Wood Works',
    title: 'JP Senior Wood Works',
    subtitle: 'Website',
  },
  {
    src: '/images/homericky.png',
    alt: 'Ricky Light Educational Advocacy',
    title: 'Ricky Light Educational Advocacy',
    subtitle: 'Website',
  },
]

// duplicate them twice (you can do 3× or more if you still see gaps)
const items = [...baseItems, ...baseItems]

export default function ShowcaseMarquee() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          A masterpiece crafted by talented designers, bringing visions to life.
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Explore the incredible designs brought to life by our talented designers.
        </p>
      </div>

      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover
        // remove built-in spacing
        className="!space-x-0"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-6 w-64 md:w-80 lg:w-96"
          >
            <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg shadow-md">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-medium text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
