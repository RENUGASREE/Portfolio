import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import FeaturedAnalyticsCaseStudy from '@/components/FeaturedAnalyticsCaseStudy';
import Projects from '@/components/Projects';
import SkillsExperience from '@/components/SkillsExperience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCaseStudy />
      <FeaturedAnalyticsCaseStudy />
      <Projects />
      <SkillsExperience />
      <Footer />
    </main>
  );
}
