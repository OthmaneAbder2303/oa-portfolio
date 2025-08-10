import { Code, Brain, Zap, Target } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end applications with modern technologies'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Exploring intelligent systems and neural networks'
    },
    {
      icon: Zap,
      title: 'Embedded Systems',
      description: 'Creating efficient solutions for hardware integration'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with innovative approaches'
    }
  ]

  return (
    <section id="about" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my engineering degree at two prestigious institutions, 
                I'm passionate about leveraging technology to solve real-world problems. 
                My journey spans from developing intelligent transport systems to creating 
                conversational AI assistants.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="project-card p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for exciting opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About