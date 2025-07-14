// components/Footer.tsx
'use client'

import Image from 'next/image'
import {
  Youtube,
  Twitter,
  Instagram,
  Facebook,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-start">
          <Image
            src="/images/logo.png"
            alt="54 Media Group Logo"
            width={80}
            height={80}
          />
          <a
            href="/"
            className="mt-6 text-sm text-gray-500 hover:underline"
          >
            © 2025 54 MEDIA GROUP
          </a>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Learn
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-700 hover:underline">
                Partners
              </a>
            </li>
            <li>
              <a href="/faqs" className="text-gray-700 hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-700 hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:underline">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-700 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="text-gray-700 hover:underline">
                Our Projects
              </a>
            </li>
            <li>
              <a href="/careers" className="text-gray-700 hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/return-policy"
                className="text-gray-700 hover:underline"
              >
                Return policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-gray-700 hover:underline"
              >
                Terms of use
              </a>
            </li>
            <li>
              <a
                href="/discrimination-policy"
                className="text-gray-700 hover:underline"
              >
                Discrimination policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex items-start sm:items-end md:justify-end">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={24} color="#2727E6" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} color="#2727E6" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} color="#2727E6" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} color="#2727E6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
