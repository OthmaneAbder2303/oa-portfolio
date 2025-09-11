import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
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
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated Background Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="container-responsive relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center pt-20">
          
          {/* Profile Image Placeholder */}
          <div className="relative mb-8">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-primary animate-pulse mb-6 mx-auto" />
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />
          </div>

          {/* Greeting */}
          <div className="animate-fade-in mb-4">
            <p className="text-lg lg:text-xl text-muted-foreground">
              {t('hero.greeting')} 👋
            </p>
          </div>

          {/* Name */}
          <div className="animate-slide-up mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4">
              {t('hero.name')}
            </h1>
          </div>

          {/* Dynamic Role */}
          <div className="animate-scale-in mb-8">
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                {displayedText}
                <span className="animate-pulse ml-1">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in mb-12 max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold px-8 py-3 hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.viewWork')}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 hover:scale-105 transition-all duration-200"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.contact')}
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in flex items-center gap-6">
            <a 
              href="https://github.com/OthmaneAbder2303" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-lift"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/oa23/" 
                target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:brightness-110 transition-all duration-200 hover-lift"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn Profile"
                className="w-6 h-6 object-contain filter-primary"
                onError={(e) => {
                  console.error('Failed to load LinkedIn logo:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </a>
            <a 
              href="https://leetcode.com/u/othmane232004/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-50 hover:brightness-110 transition-all duration-200 hover-lift"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" 
                alt="LeetCode Profile"
                className="w-6 h-6 object-contain filter-primary"
                onError={(e) => {
                  console.error('Failed to load LeetCode logo:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </a>
            <a 
              href="https://g.dev/Othmane-Abderrazik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-50 hover:brightness-110 transition-all duration-200 hover-lift"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" 
                alt="Google for Developers Profile"
                className="w-6 h-6 object-contain filter-primary"
                onError={(e) => {
                  console.error('Failed to load Google for Developers logo:', e);
                  e.currentTarget.src = 'fallback';
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<svg class="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>';
                }}
              />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero