// app/about/page.tsx

import AboutUsBanner from "@/app/component/aboutus/AboutUsBanner";
import AboutSection from "@/app/component/home/AboutSection";
import HeroSection from "./component/home/HeroSection";
import PartnersSection from "./component/home/PartnersSection";
import ExploreSection from "./component/home/ExploreSection";
import ShowcaseMarquee from "./component/home/ShowcaseMarquee";
import FAQSection from "./component/home/FAQSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ExploreSection />
      <AboutSection />
      <ShowcaseMarquee />
      <FAQSection />
      {/* …any other sections */}
    </>
  )
}
