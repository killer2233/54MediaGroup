// components/PartnersSection.tsx
export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-700 mb-8 text-lg">
          Here is our partners.
        </p>
        <img
          src="/images/homelogos.png"
          alt="Our Partners"
          className="mx-auto w-full max-w-xl object-contain"
        />
      </div>
    </section>
  );
}
