import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useLanguage, Language } from '@/contexts/LanguageContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import profilePicture from '@/assets/profile_picture.jpeg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'education', label: t('nav.education') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'certifications', label: t('nav.certifications') },
    { id: 'awards', label: t('nav.awards') },
    { id: 'contact', label: t('nav.contact') },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' }, // Changed to Saudi Arabia flag
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg transform translate-y-0' 
          : 'bg-transparent transform translate-y-0'
      }`}
      style={{
        animation: 'slideInFromTop 0.6s ease-out'
      }}
    >
      <nav className="container-responsive">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Profile Picture Logo */}
          <div 
            className="cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <img
              src={profilePicture}
              alt="Othmane Abderrazik"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-all duration-200 group-hover:scale-105"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            {/* Fallback text logo (hidden by default) */}
            <div 
              className="text-2xl font-bold gradient-text hidden"
              style={{ display: 'none' }}
            >
              OA
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 font-medium group overflow-hidden rounded-lg"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                
                {/* Sliding underline */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 w-0 group-hover:w-full transition-all duration-300"></div>
                
                {/* Text with subtle animation */}
                <span className="relative z-10 group-hover:translate-y-[-1px] transition-transform duration-200">
                  {item.label}
                </span>
                
                {/* Sparkle effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full animate-ping" style={{animationDelay: '0ms'}}></div>
                  <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-primary/60 rounded-full animate-ping" style={{animationDelay: '200ms'}}></div>
                  <div className="absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-primary/40 rounded-full animate-ping" style={{animationDelay: '400ms'}}></div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center space-x-2 ${
                      language === lang.code ? 'bg-primary/10' : ''
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-10 w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg overflow-hidden">
            <div className="py-4 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-4 text-foreground/80 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300 relative group overflow-hidden transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : ''
                  }}
                >
                  {/* Mobile menu item glow effect */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primary/60 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>
                  
                  {/* Content */}
                  <span className="relative z-10 group-hover:font-semibold transition-all duration-200">
                    {item.label}
                  </span>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-sm"></div>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header