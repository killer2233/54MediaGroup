// components/ExploreSection.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function ExploreSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Explore Our Expert Design Services
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          Tailored Solutions for Every Digital Project.
        </p>

        {/* Cards image */}
        <div className="mt-10 mx-auto w-full max-w-4xl">
          <Image
            src="/images/explore.png"
            alt="Branding, Mobile & Web, Consulting cards"
            width={1200}    // adjust to your actual image width
            height={600}    // adjust to your actual image height
            className="object-contain rounded-lg"
          />
        </div>

        {/* Button */}
        <Link href="/services">
          <button className="mt-8 inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Learn more <span className="ml-2">➜</span>
          </button>
        </Link>

      </div>
    </section>
  )
}
