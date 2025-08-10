import Header from '@/components/portfolio/Header'
import Hero from '@/components/portfolio/Hero'
import About from '@/components/portfolio/About'
import Education from '@/components/portfolio/Education'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import Skills from '@/components/portfolio/Skills'
import Certifications from '@/components/portfolio/Certifications'
import Awards from '@/components/portfolio/Awards'
import Contact from '@/components/portfolio/Contact'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Awards />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
