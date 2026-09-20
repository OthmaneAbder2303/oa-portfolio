import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

// Import university logos
import ensaLogo from '@/assets/logos/universities/ensa.png'
import eilcoLogo from '@/assets/logos/universities/eilco.png'

const Education = () => {
  const { t } = useLanguage()

  const education = [
    {
      id: 1,
      degree: t('education.eilco.degree'),
      institution: t('education.eilco.institution'),
      location: t('education.eilco.location'),
      period: t('education.eilco.period'),
      logo: eilcoLogo,
      description: `${t('education.eilco.description')} — ${t('education.eilco.note')}`,
      status: 'current',
      gpa: t('education.status.current')
    },
    {
      id: 2,
      degree: t('education.ensa.combined.degree'),
      institution: t('education.ensa.institution'),
      location: t('education.ensa.location'),
      period: t('education.ensa.combined.period'),
      logo: ensaLogo,
      description: t('education.ensa.combined.description'),
      status: 'completed',
      gpa: t('education.status.completed')
    },
  ]

  return (
    <section id="education" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('education.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('education.subtitle')}
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Animated Timeline Line with Gradient */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full"></div>
            
            {/* Flowing Animation Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-1 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse opacity-60"></div>
              <div className="absolute w-full h-20 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
            </div>

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={edu.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Connection Lines for Cycle Effect */}
                  {index < education.length - 1 && (
                    <>
                      {/* Curved Connection Line */}
                      <svg 
                        className={`hidden md:block absolute top-16 w-32 h-32 z-5 ${
                          index % 2 === 0 
                            ? 'left-12 md:left-1/2 md:-translate-x-16' 
                            : 'left-12 md:left-1/2 md:translate-x-16'
                        }`}
                        viewBox="0 0 100 100"
                      >
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={index === 0 ? '#3B82F6' : index === 1 ? '#8B5CF6' : '#10B981'} />
                            <stop offset="100%" stopColor={index === 0 ? '#8B5CF6' : index === 1 ? '#10B981' : '#F59E0B'} />
                          </linearGradient>
                          <filter id={`glow-${index}`}>
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <path
                          d={`M 20 20 Q ${index % 2 === 0 ? '60 10' : '40 10'} 80 80`}
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="5,3"
                          filter={`url(#glow-${index})`}
                          className="animate-pulse"
                        />
                        {/* Animated Dots */}
                        <circle r="3" fill={`url(#gradient-${index})`}>
                          <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                            <mpath href={`#path-${index}`}/>
                          </animateMotion>
                        </circle>
                        <path id={`path-${index}`} d={`M 20 20 Q ${index % 2 === 0 ? '60 10' : '40 10'} 80 80`} opacity="0"/>
                      </svg>

                      {/* Progress Arrow */}
                      <div className={`hidden md:block absolute top-24 z-10 ${
                        index % 2 === 0 
                          ? 'left-20 md:left-1/2 md:-translate-x-8' 
                          : 'left-20 md:left-1/2 md:translate-x-8'
                      }`}>
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-ping"></div>
                      </div>
                    </>
                  )}

                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-4 sm:left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                    {/* Outer Ring with Pulse */}
                    <div className="w-8 h-8 rounded-full border-4 border-background shadow-xl relative">
                      <div className={`w-full h-full rounded-full ${
                        edu.status === 'current' 
                          ? 'bg-gradient-to-r from-green-400 to-blue-500 animate-pulse' 
                          : 'bg-gradient-to-r from-purple-400 to-pink-500'
                      }`}></div>
                      
                      {/* Inner Glow */}
                      <div className="absolute inset-1 bg-white rounded-full opacity-30"></div>
                      
                      {/* Status Number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{education.length - index}</span>
                      </div>
                      
                      {/* Ripple Effect for Current */}
                      {edu.status === 'current' && (
                        <>
                          <div className="absolute -inset-2 border-2 border-green-400 rounded-full animate-ping opacity-60"></div>
                          <div className="absolute -inset-4 border-2 border-blue-400 rounded-full animate-ping opacity-30" style={{animationDelay: '0.5s'}}></div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-10 sm:ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                    <div className="project-card p-6 hover-lift">
                      
                      {/* Institution Header */}
                      <div className={`flex items-center space-x-3 sm:space-x-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                        {/* Enhanced Logo Container */}
                        <div className="relative w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-2 sm:p-3 shadow-lg border border-gray-200/50">
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            onError={(e) => {
                              const target = e.currentTarget;
                              const fallback = target.nextElementSibling as HTMLElement;
                              target.style.display = 'none';
                              if (fallback) {
                                fallback.style.display = 'flex';
                                fallback.classList.remove('hidden');
                              }
                            }}
                          />
                          {/* Fallback Icon */}
                          <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                            <GraduationCap className="w-10 h-10 text-white" />
                          </div>
                          
                          {/* Status Indicator */}
                          {edu.status === 'current' && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse">
                              <div className="w-full h-full bg-green-500 rounded-full"></div>
                            </div>
                          )}
                        </div>

                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <h3 className="text-xl font-bold text-card-foreground mb-1 leading-tight">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-semibold text-sm leading-tight">{edu.institution}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <div className={`flex items-center space-x-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <MapPin className="h-4 w-4 text-blue-500" />
                          <span>{edu.location}</span>
                        </div>
                        
                        <div className={`flex items-center space-x-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <Calendar className="h-4 w-4 text-purple-500" />
                          <span>{edu.period}</span>
                        </div>

                        <div className={`flex items-center space-x-2 text-sm ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <Award className="h-4 w-4 text-amber-500" />
                          <span className="font-medium text-amber-600 dark:text-amber-400">{edu.gpa}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-muted-foreground mt-4 leading-relaxed text-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {edu.description}
                      </p>

                      {/* Status Badge */}
                      <div className={`mt-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          edu.status === 'current' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800' 
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                        }`}>
                          <span className={`w-2 h-2 rounded-full mr-2 ${
                            edu.status === 'current' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                          }`}></span>
                          {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education
