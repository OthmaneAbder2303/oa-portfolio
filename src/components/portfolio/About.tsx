import { Code, Brain, Target } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, Variants } from 'framer-motion'

const About = () => {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Brain,
      title: t('about.highlight.ai.title'),
      description: t('about.highlight.ai.description'),
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Code,
      title: t('about.highlight.fullstack.title'),
      description: t('about.highlight.fullstack.description'),
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Target,
      title: t('about.highlight.problem.title'),
      description: t('about.highlight.problem.description'),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center'
    }
  ]

  // Ajout explicite du type Variants pour éviter l'erreur TypeScript sur 'ease'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Dynamic Line-by-Line Animation */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
                {t('about.detail')}
              </motion.p>
            </motion.div>

            {/* Right Column - Creative Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium">{t('about.available')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About