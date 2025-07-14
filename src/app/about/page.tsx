// app/about/page.tsx

import AboutUsBanner from "@/app/component/aboutus/AboutUsBanner";
import WhereSection from "../component/aboutus/WhereSection";
import TeamSection from "../component/aboutus/TeamSection";

export default function AboutPage() {
  return (
    <>
      <AboutUsBanner />
      <WhereSection  />
      <TeamSection   />
      {/* …any other sections */}
    </>
  )
}
