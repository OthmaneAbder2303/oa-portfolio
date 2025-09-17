import { Code, Brain, Target } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

const About = () => {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Exploring intelligent systems and neural networks',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end applications with modern technologies',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with innovative approaches',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center'
    }
  ]

  return (
    <section id="about" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Passionate computer science student driven by a strong interest in 
                <span className="font-medium text-primary"> Artificial Intelligence</span>, 
                <span className="font-medium text-primary"> Data Science</span>, and 
                <span className="font-medium text-primary"> Full-Stack Development</span>.  
                I also enjoy exploring <span className="font-medium text-primary">Natural Language Processing</span>, 
                and sharpening my abilities in <span className="font-medium text-primary">Problem Solving</span> and 
                <span className="font-medium text-primary"> Algorithmics</span>.  
                My goal is to design impactful, innovative solutions that connect cutting-edge research with real-world applications.
              </p>


              <div className="flex flex-wrap gap-6 pt-6">
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>

            {/* Right Column - Creative Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -1 : 1 }}
                  className={`relative rounded-2xl overflow-hidden shadow-lg group 
                  ${index === 0 ? "col-span-2 h-48" : "h-40"}`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-primary/80 group-hover:via-black/40 transition-all duration-500"></div>
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 mb-3">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-base text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/80">{item.description}</p>
                  </div>
                </motion.div>
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
