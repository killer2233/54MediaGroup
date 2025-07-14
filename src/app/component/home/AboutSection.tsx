// components/AboutSection.tsx
export default function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left column */}
                <div className="md:w-1/2">
                    <p className="text-sm font-medium text-[#2727E6] mb-2">
                        About Us
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                        Create bold ideas, work with leading brands, and elevate your creative journey with 54 Media Group!
                    </h2>
                </div>

                {/* Right column: description, then 100% below it */}
                <div className="md:w-1/2 flex flex-col items-start md:items-end gap-8">
                    {/* Description */}
                    <p className="max-w-md text-base sm:text-lg text-gray-600">
                        We deliver high-quality, user-centric design solutions through seamless collaboration, tailored strategies, and timely execution, ensuring client satisfaction and long-term success.
                    </p>

                    {/* 100% underneath */}
                    <div className="flex items-baseline gap-2">
                        <span
                            className="font-bold text-[#2727E6] leading-none"
                            style={{ fontSize: 'clamp(3rem,8vw,6rem)' }}
                        >
                            100
                        </span>
                        <span
                            className="font-bold text-black leading-none"
                            style={{ fontSize: 'clamp(3rem,8vw,6rem)' }}
                        >
                            %
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
