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
import BackgroundParticles from '@/components/ui/BackgroundParticles'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BackgroundParticles />
      <Header />
      <main>
        <section className="fade-in-onload"><Hero /></section>
        <section className="fade-in-onload"><About /></section>
        <section className="fade-in-onload"><Education /></section>
        <section className="fade-in-onload"><Experience /></section>
        <section className="fade-in-onload"><Projects /></section>
        <section className="fade-in-onload"><Skills /></section>
        <section className="fade-in-onload"><Certifications /></section>
        <section className="fade-in-onload"><Awards /></section>
        <section className="fade-in-onload"><Contact /></section>
      </main>
    </div>
  );
};

export default Index;
