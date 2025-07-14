'use client'

import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedButton } from '../contact/AnimatedButton'


type FormData = {
  FirstName: string
  LastName: string
  PhoneNumber: string
  UserEmail: string
  UserService: string
  message: string
  privacy: boolean
}

export default function QuoteFormSection() {
  const { register, control, handleSubmit, formState } = useForm<FormData>()
  const onSubmit = (data: FormData) =>
    fetch('https://2tlv8v.buildship.run/contact-54-copy-e554c2843189', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg,#f9f6ff 0%,#ffffff 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-40" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-green-100 rounded-full filter blur-2xl opacity-30" />

      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/60 rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-gray-900 text-center">Request a Quote</h2>
          <p className="mt-2 text-gray-600 text-center">Let us know what service you're interested in.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                {...register('FirstName', { required: true })}
                placeholder="First name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#4C07EF]"
              />
              <input
                {...register('LastName', { required: true })}
                placeholder="Last name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#4C07EF]"
              />
            </div>

            <input
              {...register('UserEmail', { required: true })}
              type="email"
              placeholder="you@company.com"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#4C07EF]"
            />

            <Controller
              name="PhoneNumber"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country="us"
                  containerClass="w-full"
                  inputClass="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#4C07EF]"
                />
              )}
            />

            <select
              {...register('UserService', { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#4C07EF]"
            >
              <option value="">Select a service</option>
              <option value="Logo">Logo</option>
              <option value="Business Branding">Business Branding</option>
              <option value="Video & Audio Editing">Video & Audio Editing</option>
              <option value="Ad Creation">Ad Creation</option>
              <option value="Email Campaign">Email Campaign</option>
              <option value="Social Media">Social Media</option>
              <option value="Illustrations">Illustrations</option>
              <option value="Print Design">Print Design</option>
            </select>

            <textarea
              {...register('message', { required: true })}
              rows={4}
              placeholder="Describe your project…"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#4C07EF]"
            />

            <div className="flex items-center gap-2">
              <input
                {...register('privacy', { required: true })}
                type="checkbox"
                className="w-4 h-4 text-[#4C07EF] border-gray-300 rounded focus:ring-2 focus:ring-[#4C07EF]"
              />
              <label className="text-sm text-gray-600">
                You agree to our friendly privacy policy.
              </label>
            </div>

            <AnimatedButton
              type="submit"
              disabled={formState.isSubmitting}
              className={`mt-2 w-full md:w-auto bg-[#4C07EF] text-white px-6 py-3 rounded-md 
                hover:bg-[#3a05c8] transition
                ${formState.isSubmitting ? 'opacity-60 cursor-wait' : ''}
              `}
            >
              {formState.isSubmitting ? 'Sending…' : 'Request Quote'}
            </AnimatedButton>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
