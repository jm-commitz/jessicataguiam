import { Nav } from "@/components/nav";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <SiteFooter />
    </div>
  );
}
