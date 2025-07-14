// app/careers/page.tsx
'use client'

import Image from 'next/image'

export default function CareersPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center bg-white text-gray-900">
      {/* Image */}
      <Image
        src="/images/CarrersImage.png" // Make sure this path matches your public folder structure
        alt="Careers at 54 Media Group"
        width={300}
        height={300}
        className="mb-8"
      />

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        54 Media Group Careers
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-md">
        If we are looking for positions they will be posted here.
      </p>
    </section>
  )
}
