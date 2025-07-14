'use client'

import Image from 'next/image'
import Link from 'next/link'
import TestimonialsSection from '../component/TestimonialsSection'

const platforms = [
  { name: 'Apple Podcasts', url: 'https://focusonsuccess.buzzsprout.com/' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/5QTcfrJ7iZ7yIg5lxg9D4d' },
  { name: 'Google Podcasts', url: 'https://focusonsuccess.buzzsprout.com/' },
  { name: 'Amazon Music', url: 'https://focusonsuccess.buzzsprout.com/' },
  { name: 'iHeartRadio', url: 'https://focusonsuccess.buzzsprout.com/' },
  { name: 'Castbox', url: 'https://focusonsuccess.buzzsprout.com/' },
  { name: 'Stitcher', url: 'https://focusonsuccess.buzzsprout.com/' },
  { name: 'RSS Feed', url: 'https://focusonsuccess.buzzsprout.com/' },
]

export default function PodcastPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-900 py-20 px-6">
      {/* HEADER */}
      <section className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Focus on Success Podcast
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Available on all major platforms. Listen wherever, whenever.
        </p>
      </section>

      {/* PLATFORM BUTTONS */}
      <section className="max-w-5xl mx-auto mb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
          {platforms.map(({ name, url }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-3 rounded-lg font-medium bg-black text-white transition hover:scale-[1.03] hover:bg-gradient-to-r from-black to-gray-800 shadow-sm"
            >
              {name}
            </Link>
          ))}
        </div>
      </section>

      {/* PODCAST IMAGE */}
      <section className="max-w-5xl mx-auto mb-24 px-4">
        <Image
          src="/images/podcast.png"
          alt="Focus on Success Cover"
          width={1200}
          height={600}
          className="rounded-xl shadow-2xl w-full object-cover"
        />
      </section>

      <TestimonialsSection />
    </main>
  )
}
