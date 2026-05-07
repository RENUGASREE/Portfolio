import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import Projects from '@/components/Projects';
import SkillsExperience from '@/components/SkillsExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCaseStudy />
      <Projects />
      <SkillsExperience />
      <Contact />
      <Footer />
    </main>
  );
}
