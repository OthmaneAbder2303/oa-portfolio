import { Code, Brain, Target, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, Variants } from 'framer-motion'

const About = () => {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Brain,
      title: t('about.highlight.ai.title'),
      description: t('about.highlight.ai.description'),
      tag: 'AI & MLOps',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?h=2733&max-w=5093&fit=crop&max-h=2512&min-w=2802&min-h=1&w=730&crop=top'
    },
    {
      icon: Code,
      title: t('about.highlight.fullstack.title'),
      description: t('about.highlight.fullstack.description'),
      tag: 'Full-Stack',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=400&fit=crop&crop=center'
    },
    {
      icon: Target,
      title: t('about.highlight.problem.title'),
      description: t('about.highlight.problem.description'),
      tag: 'Architecture',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=center'
    }
  ]

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
    <section id="about" className="section-padding bg-surface-muted relative overflow-hidden">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          
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
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Dynamic Line-by-Line Animation (Cols: 5) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5 space-y-6"
            >
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
                {t('about.detail')}
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-medium">{t('about.available')}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Modern Bento Grid with Interactive Background Images (Cols: 7) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className={`relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer ${
                    index === 0 ? "sm:col-span-2 h-64" : "h-52"
                  }`}
                >
                  {/* Background Image avec effet de zoom fluide au survol */}
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* Gradient sombre par-dessus pour garder le texte parfaitement lisible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-500" />

                  {/* Contenu de la carte */}
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 border border-white/20">
                        {item.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1 flex items-center justify-between">
                        {item.title}
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all text-primary -translate-x-2 group-hover:translate-x-0 duration-300" />
                      </h3>
                      <p className="text-xs md:text-sm text-white/80 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About