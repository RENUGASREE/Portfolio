import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import About from '@/components/About';
import Projects from '@/components/Projects';
import SkillsExperience from '@/components/SkillsExperience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCaseStudy />
      <Projects />
      <SkillsExperience />
      <Footer />
    </main>
  );
}
