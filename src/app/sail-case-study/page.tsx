// app/efm/sail/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import SailDashboardCarousel from '../component/SailDashboardCarousel'

export default function SailPodcastingPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero with background */}
      <section
        className="relative text-center py-16 md:py-80"
        style={{
          backgroundImage: "url('/images/sail.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <Image
            src="/images/SailLogo.png"
            alt="Sail logo"
            width={48}
            height={48}
            className="mx-auto mb-4"
          />
          <Image
            src="/images/Sail-Podcasting.png"
            alt="Sail Podcasting text"
            width={300}
            height={60}
            className="mx-auto"
          />
          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            A user friendly podcasting platform willing to help new podcasters take off.
          </p>

          <div className="mt-6 flex justify-center space-x-4">
            <Link
              href="https://sailpodcasting.com/"
              className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              View Website
            </Link>
            <Link
              href="#description"
              className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Explore Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* Description + Carousel */}
      <section id="description" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Project description</h2>
          <p className="text-gray-400 max-w-3xl">
            Sail Podcasting is a user-friendly platform designed to empower beginner content creators by simplifying the podcasting process.
            Offering tools to record, edit, and share podcasts seamlessly, it prioritizes accessibility for beginners while supporting advanced
            creators with robust features.
          </p>

          <div className="mt-12">
            <SailDashboardCarousel />
          </div>
        </div>
      </section>

      {/* Timeline, Background */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-gray-300">
          <div>
            <h3 className="text-white font-semibold mb-2">Timeline</h3>
            <p>
              From research to launch in just under 13 weeks, we successfully developed a platform tailored to support beginner podcasters.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Background</h3>
            <p>
              We built Sail Podcasting to bridge the gap for aspiring podcasters who feel overwhelmed by complex tools and processes. Our goal
              was to create an accessible platform that simplifies podcast creation, making it easy for anyone to share their voice.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0e0e0e] px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto space-y-10 text-gray-300">
          <h3 className="text-white text-xl font-semibold">Process</h3>

          <div>
            <h4 className="font-semibold text-white">Research & Planning</h4>
            <p>
              We conducted interviews with aspiring podcasters to understand their pain points. Through user research, we mapped out key features
              and workflows to ensure simplicity, accessibility, and ease of use.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Design & Prototyping</h4>
            <p>
              We developed wireframes and interactive prototypes to test ideas quickly and gather feedback from potential users. This approach
              helped us refine the UI/UX.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Implementation</h4>
            <p>
              Our team focused on iterative development of the core features like smart recording, editing, and publishing capabilities. We used
              Firebase for the backend and ensured performance optimization at each stage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Testing & Optimization</h4>
            <p>
              We conducted user testing across multiple device types and iterated based on real-world feedback. Continuous improvement ensured the
              platform was intuitive, scalable, and ready for a successful launch.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto space-y-10 text-gray-300">
          <h3 className="text-white text-xl font-semibold">Results</h3>

          <div>
            <h4 className="font-semibold text-white">Increased Efficiency</h4>
            <p>
              The platform streamlined the podcast creation process, significantly reducing the time needed to record and publish.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Positive User Feedback</h4>
            <p>
              Users appreciated the clean design, easy navigation, and the simplicity of publishing podcasts with no technical expertise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Growing User Base</h4>
            <p>
              The ease of use and community-driven features attracted a rapidly growing user base of aspiring podcasters.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
