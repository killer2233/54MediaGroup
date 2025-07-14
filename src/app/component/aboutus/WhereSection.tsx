// components/WhereSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WhereSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text */}
        <div>
          <span className="inline-block bg-white px-4 py-1 text-sm font-medium text-[#4C07EF] rounded-full shadow-sm">
            Revolutionary!
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#4C07EF]">
            Where did 54 Media Group started?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            54 Media Group was born out of a need for creative talent when Executive Function Magazine sought skilled designers for their projects. Recognizing this opportunity, Fawzya founded the agency with a mission to not only deliver top-tier design work but also to empower recent college graduates. By giving them hands-on experience in designing ads, branding materials, apps, and websites, 54 Media Group became a launchpad for young creatives to build real-world skills and grow their professional portfolios.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="px-6 py-3 bg-[#4C07EF] hover:bg-[#3a05c8] text-white rounded-md shadow-md text-sm sm:text-base">
                Contact us
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image
            src="/images/aboutus.png"
            alt="About Us"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
