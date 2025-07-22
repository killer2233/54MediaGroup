// app/our-projects/jp-senior-woodworks/page.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function JPSeniorWoodWorksPage() {
  const images = ['/images/jp1.png', '/images/jp2.png', '/images/jp3.png'];

  return (
    <main className="text-[#1b1b1b]">
      {/* Header Image */}
      <div className="w-full h-[50vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/JPHeader.png')" }}>
      </div>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Project description</h2>
        <p className="mb-6 text-lg leading-relaxed">
          JP Senior Woodworks is dedicated to crafting high-quality, handcrafted wooden pieces that blend tradition with precision.
          With a passion for fine woodworking, we transform raw timber into timeless creations, ensuring every project reflects craftsmanship, durability, and artistry.
        </p>

        {/* Carousel */}
        <div className="rounded-xl overflow-hidden mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3500 }}
            className="rounded-xl"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} alt={`JP ${i + 1}`} className="w-full object-cover rounded-xl" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Timeline</h3>
          <p className="mt-2">
            At JP Senior Woodworks, craftsmanship takes time, and this piece was no exception. Over six weeks of meticulous work, every detail was carefully shaped, sanded, and perfected to ensure both durability and beauty.
          </p>
        </div>

        {/* Background */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Background</h3>
          <p className="mt-2">
            JP Senior Woodworks needed a website to establish a strong online presence in Virginia’s competitive but niche woodworking industry.
            A well-designed website helps showcase the craftsmanship, attract new customers, and set JP apart by highlighting its dedication to precision, tradition, and custom wood creation.
          </p>
        </div>

        {/* Process */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Process</h3>
          <p className="mt-2">Here’s the step-by-step approach we followed:</p>
          
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium">Research & Planning</h4>
              <p>We analyzed the woodworking industry in Virginia and identified key competitors. Research helped shape a strategy that showcases JP's craftsmanship and custom offerings.</p>
            </div>
            <div>
              <h4 className="font-medium">Design & Prototyping</h4>
              <p>We created a clean, professional layout highlighting the artistry behind each piece. Wireframes and prototypes ensured intuitive navigation and strong brand visuals.</p>
            </div>
            <div>
              <h4 className="font-medium">Implementation</h4>
              <p>The site was built using responsive web development to work across all devices. Key features include a simple navigation menu, high-quality galleries, and clear service info.</p>
            </div>
            <div>
              <h4 className="font-medium">Testing & Optimization</h4>
              <p>Before launch, we tested for load time, mobile compatibility, and usability. Feedback helped us fine-tune performance and UX for the best possible experience.</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Results</h3>
          
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium">Increased Efficiency</h4>
              <p>
                With a streamlined layout, JP Senior Woodworks saw reduced customer service inquiries and faster product discovery, making the operation more efficient.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Positive User Feedback</h4>
              <p>
                Customers appreciated the clear structure and improved browsing. Mobile users found it easy to place orders, increasing trust and satisfaction.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Growing User Base</h4>
              <p>
                Organic traffic and search visibility improved. Referrals and return visits grew, expanding the customer base in a competitive market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
