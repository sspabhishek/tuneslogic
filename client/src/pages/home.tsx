import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/our-services";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* <StatsSection /> */}
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
