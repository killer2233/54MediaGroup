// components/NavBar.tsx
'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function NavBar() {
  const [otherOpen, setOtherOpen] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout>()

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOtherOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOtherOpen(false), 200)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm px-6 md:px-12 py-1">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="54 Media Group" width={64} height={64} />
        </Link>

        {/* Links */}
        <div className="ml-auto flex items-center space-x-8">
          <ul className="hidden md:flex items-center space-x-8 text-black font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>

            {/* “Other” with delayed‐close hover menu */}
            <li
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
            >
              <button className="flex items-center hover:text-[#8D3BFA] transition">
                Other <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <ul
                className={`
                  absolute top-full left-1/2 -translate-x-1/2
                  mt-3  /* push it down a bit */
                  w-48 bg-white border border-gray-200 rounded-md
                  shadow-lg divide-y divide-gray-100 z-50
                  ${otherOpen ? 'block' : 'hidden'}
                `}
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <li>
                  <Link
                    href="https://executivefunctionmagazine.com/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#8D3BFA] transition"
                  >
                    EFM Magazine
                  </Link>
                </li>
                <li>
                  <Link
                    href="/podcast"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#8D3BFA] transition"
                  >
                    Focus on Success Podcast
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/@54MediaGroup/videos"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#8D3BFA] transition"
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Call button */}
          <a
            href="tel:+14806481122"
            className="hidden md:inline-block bg-[#8D3BFA] hover:bg-[#7229d8] text-white px-5 py-2 rounded-lg transition"
          >
            (480) 648-1122
          </a>
        </div>
      </div>
    </nav>
  )
}
