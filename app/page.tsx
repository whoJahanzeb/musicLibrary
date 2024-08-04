import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialCards from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import AnimatedTooltipPreview from "./components/AnimatedTooltipPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <AnimatedTooltipPreview />
      <Footer />
    </main>
  );
}
