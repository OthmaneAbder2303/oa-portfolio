import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Education = () => {
  const { t } = useLanguage()

  const educationData = [
    {
      id: 1,
      school: t('education.eilco'),
      degree: t('education.eilco.degree'),
      location: t('education.eilco.location'),
      period: 'Jul 2025 – Present',
      status: 'current',
      description: 'Currently pursuing advanced studies in Computer Engineering with focus on software architecture and system design.'
    },
    {
      id: 2,
      school: t('education.ensa'),
      degree: t('education.ensa.degree'),
      location: t('education.ensa.location'),
      period: 'Sep 2023 – Present',
      status: 'current',
      description: 'Engineering program specializing in Computer Science with emphasis on AI, machine learning, and embedded systems.'
    },
    {
      id: 3,
      school: t('education.ensa'),
      degree: t('education.prep'),
      location: t('education.ensa.location'),
      period: 'Sep 2021 – July 2023',
      status: 'completed',
      description: 'Preparatory cycle covering mathematics, physics, and computer science fundamentals.'
    }
  ]

  return (
    <section id="education" className="section-padding">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('education.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary" />

            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={item.id} className="relative flex items-start space-x-8">
                  
                  {/* Timeline Node */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    item.status === 'current' 
                      ? 'bg-gradient-primary shadow-glow' 
                      : 'bg-muted border-2 border-primary'
                  }`}>
                    <GraduationCap className={`h-8 w-8 ${
                      item.status === 'current' ? 'text-white' : 'text-primary'
                    }`} />
                    
                    {/* Pulse animation for current education */}
                    {item.status === 'current' && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-12">
                    <div className="project-card p-6 hover-lift">
                      
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-card-foreground mb-1">
                            {item.school}
                          </h3>
                          <p className="text-primary font-semibold">
                            {item.degree}
                          </p>
                        </div>
                        
                        {item.status === 'current' && (
                          <div className="inline-flex items-center space-x-1 bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                            <span>Current</span>
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4+</span>
              </div>
              <h3 className="font-semibold mb-2">Years of Study</h3>
              <p className="text-sm text-muted-foreground">Continuous learning journey</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold mb-2">Institutions</h3>
              <p className="text-sm text-muted-foreground">Elite engineering schools</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <h3 className="font-semibold mb-2">Specialization</h3>
              <p className="text-sm text-muted-foreground">Artificial Intelligence focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education