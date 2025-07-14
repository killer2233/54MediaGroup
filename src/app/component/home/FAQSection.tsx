'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What types of design services does 54 Media Group offer?',
    a: "We specialize in graphic design, custom website and app design, and full-scale branding solutions. Whether you're launching a startup or refreshing your identity, we deliver visuals that communicate and convert.",
  },
  {
    q: 'How does the branding process work at 54 Media Group?',
    a: "We start with a deep dive into your business, audience, and goals. From there, we create brand strategies, logos, color systems, and visual assets that bring your identity to life and resonate across platforms.",
  },
  {
    q: 'Can you design both websites and mobile apps?',
    a: "Absolutely! Our team is experienced in crafting responsive websites and intuitive app interfaces that prioritize user experience, functionality, and modern design aesthetics.",
  },
  {
    q: 'How do I collaborate with your team on a project?',
    a: "We use a transparent, step-by-step process with clear communication. From kickoff to final delivery, we keep you involved through moodboards, wireframes, prototypes, and feedback loops.",
  },
  {
    q: 'How long does a typical project take?',
    a: "Timelines vary by project size and scope. A branding package may take 2–3 weeks, while a full website or app design could take 4–8 weeks. We’ll give you a realistic timeline upfront based on your needs.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          The Big Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-4 py-5 text-left"
              >
                <span className="text-gray-900">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-5 text-gray-700">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
