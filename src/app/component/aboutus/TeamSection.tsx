// components/TeamSection.tsx
import Image from 'next/image'

export default function TeamSection() {
  const members = ['1','2','3','5','6']

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4C07EF] mb-2">
          We Have The Best Team
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-12">
          Meet our team of highly skilled professionals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((id) => (
            <div key={id} className="overflow-hidden rounded-2xl">
              <Image
                src={`/images/${id}.png`}
                alt={`Team member ${id}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
