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
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import { useRef } from 'react'

const sceneProfiles = [
  { enterY: 0, exitY: -36, enterScale: 1, exitScale: 0.985, blur: 1, clip: false },
  { enterY: 44, exitY: -26, enterScale: 0.965, exitScale: 0.99, blur: 8, clip: true },
  { enterY: 32, exitY: -22, enterScale: 0.975, exitScale: 0.992, blur: 5, clip: false },
  { enterY: 48, exitY: -28, enterScale: 0.96, exitScale: 0.99, blur: 7, clip: true },
  { enterY: 64, exitY: -34, enterScale: 0.945, exitScale: 0.988, blur: 10, clip: true },
  { enterY: 40, exitY: -20, enterScale: 0.97, exitScale: 0.992, blur: 6, clip: false },
  { enterY: 32, exitY: -20, enterScale: 0.975, exitScale: 0.992, blur: 5, clip: false },
  { enterY: 48, exitY: -24, enterScale: 0.965, exitScale: 0.99, blur: 7, clip: true },
  { enterY: 26, exitY: -8, enterScale: 0.985, exitScale: 1, blur: 4, clip: false },
]

const SectionScene = ({ children, index }: { children: ReactNode; index: number }) => {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const profile = sceneProfiles[index]
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.25 })
  const opacity = useTransform(progress, [0, 0.16, 0.78, 1], [0.18, 1, 1, 0.5])
  const y = useTransform(progress, [0, 0.18, 0.82, 1], [profile.enterY, 0, 0, profile.exitY])
  const scale = useTransform(progress, [0, 0.18, 0.82, 1], [profile.enterScale, 1, 1, profile.exitScale])
  const filter = useTransform(progress, [0, 0.18, 0.82, 1], [`blur(${profile.blur}px)`, 'blur(0px)', 'blur(0px)', `blur(${Math.max(1, profile.blur / 2)}px)`])
  const clipPath = useTransform(progress, [0, 0.18, 0.82, 1], profile.clip
    ? ['inset(8% 0 0 round 2rem)', 'inset(0% 0 0 round 0rem)', 'inset(0% 0 0 round 0rem)', 'inset(4% 0 0 round 1.5rem)']
    : ['inset(0% 0 0 round 0rem)', 'inset(0% 0 0 round 0rem)', 'inset(0% 0 0 round 0rem)', 'inset(0% 0 0 round 0rem)'])

  return (
    <m.div
      ref={ref}
      className="section-scene"
      style={reduceMotion ? undefined : { opacity, y, scale, filter, clipPath }}
    >
      {children}
    </m.div>
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
            <SectionScene key={index} index={index}><Component /></SectionScene>
          ))}
        </main>
      </div>
    </LazyMotion>
  );
};

export default Index;
