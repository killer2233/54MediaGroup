// components/ContactSection.tsx
'use client'

import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Mail, Phone } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedButton } from './AnimatedButton'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  privacy: boolean
}

export default function ContactSection() {
  const { register, control, handleSubmit, formState } = useForm<FormData>()
  const onSubmit = (data: FormData) =>
    fetch('https://2tlv8v.buildship.run/contact-d0d61356a221', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

  // Scroll-reveal hooks
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true, margin: '-100px' })
  const rightInView = useInView(rightRef, { once: true, margin: '-100px' })

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg,#f9f6ff 0%,#ffffff 100%)' }}
    >
      {/* decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-40" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-green-100 rounded-full filter blur-2xl opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* LEFT PANEL */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -40 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/60 rounded-xl p-8 shadow-lg flex flex-col"
        >
          <span className="self-start bg-green-50 text-[#4C07EF] px-3 py-1 rounded-full text-sm font-medium">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900">
            We’d love to hear from you
          </h2>
          <p className="mt-2 text-gray-600">
            Need something cleared up? Reach out via email or phone.
          </p>

          <div className="mt-8 space-y-6">
            {[
              {
                icon: Mail,
                bg: 'bg-orange-100',
                iconColor: 'text-orange-500',
                title: 'Email',
                subtitle: 'Our friendly team is here to help.',
                info: (
                  <>
                  support@54mediagroup.com
                  </>
                ),
              },
              {
                icon: Phone,
                bg: 'bg-purple-100',
                iconColor: 'text-purple-500',
                title: 'Phone',
                subtitle: 'Mon–Fri, 9am to 5pm',
                info: '+1 (480) 648-1122',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className={`${item.bg} p-3 rounded-xl`}>
                  <item.icon className={`${item.iconColor} w-6 h-6`} />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                  <p className="mt-1 text-blue-600">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PANEL (FORM) */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 40 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/60 rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-600">
            We’d love to hear from you. Please fill out this form.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                {...register('firstName', { required: true })}
                placeholder="First name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4C07EF]"
              />
              <input
                {...register('lastName', { required: true })}
                placeholder="Last name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4C07EF]"
              />
            </div>

            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="you@company.com"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4C07EF]"
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country="us"
                  containerClass="w-full"
                  inputClass="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4C07EF]"
                />
              )}
            />

            <textarea
              {...register('message', { required: true })}
              rows={4}
              placeholder="Leave us a message…"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4C07EF]"
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
              {formState.isSubmitting ? 'Sending…' : 'Send Message'}
            </AnimatedButton>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
