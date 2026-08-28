import Hero from "@/components/sections/Hero";
import StatsMarquee from "@/components/sections/StatsMarquee";
import VideoSection from "@/components/sections/VideoSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import RoiSection from "@/components/sections/RoiSection";
import FlavorsDesigns from "@/components/sections/FlavorsDesigns";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import VenuesGrid from "@/components/sections/VenuesGrid";
import PartnerProcess from "@/components/sections/PartnerProcess";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsMarquee />
      <VideoSection />
      <HowItWorks />
      <Benefits />
      <RoiSection />
      <FlavorsDesigns />
      <FeaturesGrid />
      <VenuesGrid />
      <PartnerProcess />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
