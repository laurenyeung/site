import HeroSection from "@/components/HeroSection";
import ImageGrid from "@/components/ImageGrid";
import DirectCoachingSection from "@/components/DirectCoachingSection";
import CoachingOptionsSection from "@/components/CoachingOptionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImageGrid />
      <DirectCoachingSection />
      <CoachingOptionsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
