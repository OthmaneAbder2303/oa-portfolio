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
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const SectionReveal = ({ children, index }: { children: ReactNode; index: number }) => {
  const reduceMotion = useReducedMotion()

  return (
    <m.section
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.025, 0.18), ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.section>
  )
}

const Index = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-foreground">
        <BackgroundParticles />
        <Header />
        <main>
          {[Hero, About, Education, Experience, Projects, Skills, Certifications, Awards, Contact].map((Component, index) => (
            <SectionReveal key={index} index={index}><Component /></SectionReveal>
          ))}
        </main>
      </div>
    </LazyMotion>
  );
};

export default Index;
