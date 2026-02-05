import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const { t } = useLanguage()
  const roles = [
    'Computer Science Student',
    'Full-Stack Developer',
    'AI & NLP Enthusiast',
    'Problem Solver'
  ]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const currentText = roles[currentRole]
    let index = 0
    
    const typeWriter = () => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1))
        index++
        setTimeout(typeWriter, 100)
      } else {
        setTimeout(() => {
          const deleteText = () => {
            if (index > 0) {
              setDisplayedText(currentText.slice(0, index - 1))
              index--
              setTimeout(deleteText, 50)
            } else {
              setCurrentRole((prev) => (prev + 1) % roles.length)
            }
          }
          setTimeout(deleteText, 2000)
        }, 1000)
      }
    }
    
    typeWriter()
  }, [currentRole])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    // Ajout de max-w-full et overflow-x-hidden pour bloquer le scroll horizontal
    <section id="home" className="min-h-screen relative overflow-x-hidden max-w-full flex flex-col bg-background">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated Background Circles - On s'assure qu'ils ne dépassent pas à droite */}
      <div className="absolute top-20 -left-10 w-64 h-64 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Remplacement de container-responsive par des classes Tailwind explicites pour éviter l'overflow */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col">
        
        {/* Contenu principal : justify-start sur mobile pour supprimer le vide en haut */}
        <div className="flex flex-col items-center justify-start md:justify-center min-h-[calc(100vh-60px)] text-center pt-28 md:pt-0">
          
          {/* Profile Image : Taille réduite sur mobile */}
          <div className="relative mb-6">
            <div className="w-24 h-24 md:w-32 lg:w-40 lg:h-40 rounded-full bg-gradient-primary animate-pulse mx-auto" />
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-20 animate-pulse" />
          </div>

          {/* Greeting */}
          <div className="animate-fade-in mb-2">
            <p className="text-base md:text-xl text-muted-foreground">
              {t('hero.greeting')} 👋
            </p>
          </div>

          {/* Name : Taille responsive */}
          <div className="animate-slide-up mb-3">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold gradient-text tracking-tight">
              {t('hero.name')}
            </h1>
          </div>

          {/* Dynamic Role */}
          <div className="animate-scale-in mb-6">
            <div className="h-10 md:h-16 flex items-center justify-center">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-primary">
                {displayedText}
                <span className="animate-pulse ml-1">|</span>
              </h2>
            </div>
          </div>

          {/* Description : max-w-sm sur mobile pour forcer le texte à rester centré sans déborder */}
          <div className="animate-fade-in mb-8 max-w-sm md:max-w-2xl px-2">
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Buttons : Gap réduit */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-3 md:gap-4 mb-10">
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold px-8 py-6 md:py-3 hover:scale-105 transition-all duration-200"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.viewWork')}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 md:py-3 hover:scale-105 transition-all duration-200"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.contact')}
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links : Taille ajustée */}
          <div className="animate-fade-in flex items-center gap-6 mb-12">
            <a href="https://github.com/OthmaneAbder2303" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover-lift">
              <Github className="h-7 w-7 md:h-8 md:w-8" />
            </a>
            <a href="https://www.linkedin.com/in/oa23/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-all hover-lift">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-7 h-7 md:w-8 md:h-8" />
            </a>
            <a href="https://leetcode.com/u/othmane232004/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-all hover-lift">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" alt="LeetCode" className="w-7 h-7 md:w-8 md:h-8" />
            </a>
            <a href="https://g.dev/Othmane-Abderrazik" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-all hover-lift">
              <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="Google Dev" className="w-7 h-7 md:w-8 md:h-8" />
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Caché sur très petits écrans si besoin */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
      </div>
    </section>
  )
}

export default Hero