// components/ServicesSection.tsx
'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

type Service = {
  id: string
  name: string
  price: number
  features: string[]
  variant?: 'outline'
}

const basicFeatures = [
  '14-day trial of the Team plan',
  'Up to 5 users',
  '15 transcribed recordings per month',
  '5 AI Summaries per month',
  'Google & Outlook calendar support',
  'Record Zoom, Google Meet & Teams',
  'Desktop Screen Recorder',
]

const advancedFeatures = [
  'Up to 250 users',
  'Unlimited recordings',
  'Unlimited AI Summaries',
  'Robust collection hierarchy',
  'Secret collections',
  'Private videos',
  'Granular roles & permissions',
]

const premiumFeatures = [
  ...advancedFeatures,
  'Full video analytics',
  'Transcript translation in 30+ languages',
]

const services: Service[] = [
  {
    id: 'logo',
    name: 'Logo',
    price: 150,
    features: basicFeatures,
  },
  {
    id: 'branding',
    name: 'Business Branding',
    price: 250,
    features: basicFeatures,
  },
  {
    id: 'video',
    name: 'Video & Audio Editing',
    price: 400,
    features: advancedFeatures,
  },
  {
    id: 'ad',
    name: 'Ad Creation',
    price: 95,
    features: premiumFeatures,
    variant: 'outline',
  },
  {
    id: 'email',
    name: 'Custom Email Campaign',
    price: 90,
    features: basicFeatures,
  },
  {
    id: 'social',
    name: 'Social Media',
    price: 150,
    features: basicFeatures,
  },
  {
    id: 'illustrations',
    name: 'Illustrations',
    price: 100,
    features: advancedFeatures,
  },
  {
    id: 'print',
    name: 'Print Design',
    price: 130,
    features: advancedFeatures,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-900">
          Our Simple Affordable Prices
        </h1>
        <p className="text-gray-600 dark:text-gray-600 mt-2">
          This will show the pricing we do for all of our services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((svc) => (
          <div
            key={svc.id}
            className={`
              flex flex-col border rounded-lg p-6 bg-white dark:bg-white
              ${svc.variant === 'outline' ? 'border-purple-600' : 'border-gray-200'}
            `}
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-900">
              {svc.name}
            </h2>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-4xl font-bold text-gray-900 dark:text-gray-900">
                ${svc.price}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                Starting at
              </span>
            </div>

            <Link
              href={`/quote?service=${svc.id}`}
              className={`
                mt-6 inline-block text-center w-full py-2 rounded-md text-sm font-medium
                ${
                  svc.variant === 'outline'
                    ? 'bg-transparent text-purple-600 border border-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }
                transition
              `}
            >
              Get Quote
            </Link>

            <ul className="mt-6 space-y-3 flex-1 text-sm text-gray-700 dark:text-gray-700">
              {svc.features.map((feat, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 dark:text-green-500 mt-1" />
                  <span className="ml-2">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
