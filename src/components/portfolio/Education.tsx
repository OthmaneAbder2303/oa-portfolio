
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Education = () => {
  const { t } = useLanguage()

  const education = [
    {
      id: 1,
      degree: 'Engineering Degree, Computer Engineering',
      institution: 'École d\'Ingénieurs du Littoral Côte d\'Opale (EILCO)',
      location: 'Calais, France',
      period: 'Jul 2025 – Present',
      logo: 'https://www.eilco-ulco.fr/wp-content/uploads/2019/02/logo-eilco.png',
      description: 'Advanced computer engineering program with focus on software development and artificial intelligence.',
      status: 'current',
      gpa: 'In Progress'
    },
    {
      id: 2,
      degree: 'Engineering Degree, Computer Engineering',
      institution: 'National School of Applied Sciences (ENSA) Marrakech',
      location: 'Marrakech, Morocco',
      period: 'Sep 2023 – Present',
      logo: 'https://www.ensa.ac.ma/sites/default/files/logo-ensa-marrakech.png',
      description: 'Comprehensive computer engineering curriculum covering software development, AI, and embedded systems.',
      status: 'current',
      gpa: 'Excellent'
    },
    {
      id: 3,
      degree: 'Integrated Preparatory Cycle',
      institution: 'National School of Applied Sciences (ENSA) Marrakech',
      location: 'Marrakech, Morocco',
      period: 'Sep 2021 – July 2023',
      logo: 'https://www.ensa.ac.ma/sites/default/files/logo-ensa-marrakech.png',
      description: 'Intensive preparatory program in mathematics, physics, and computer science fundamentals.',
      status: 'completed',
      gpa: 'Distinction'
    }
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
              My educational journey in computer engineering and software development
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={edu.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10">
                    <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                    <div className="project-card p-6 hover-lift">
                      
                      {/* Institution Header */}
                      <div className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 p-2">
                          <img 
                            src={edu.logo} 
                            alt={edu.institution}
                            className="w-full h-full object-contain filter brightness-0 invert"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex';
                            }}
                          />
                          <GraduationCap className="w-8 h-8 text-white hidden" />
                        </div>
                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <h3 className="text-xl font-bold text-card-foreground mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-semibold">{edu.institution}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <div className={`flex items-center space-x-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        
                        <div className={`flex items-center space-x-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>

                        <div className={`flex items-center space-x-2 text-sm ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <Award className="h-4 w-4 text-warning" />
                          <span className="font-medium text-warning">{edu.gpa}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-muted-foreground mt-4 leading-relaxed ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {edu.description}
                      </p>

                      {/* Status Badge */}
                      <div className={`mt-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'current' 
                            ? 'bg-success/20 text-success' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.status === 'current' ? '🎓 Current' : '✅ Completed'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="project-card p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years of Study</div>
            </div>
            <div className="project-card p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-secondary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Institutions</div>
            </div>
            <div className="project-card p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Courses Completed</div>
            </div>
            <div className="project-card p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-emerald mb-2">A+</div>
              <div className="text-sm text-muted-foreground">Average Grade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
