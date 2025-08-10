import { Briefcase, MapPin, Calendar, Users, Lightbulb } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Experience = () => {
  const { t } = useLanguage()

  const experiences = [
    {
      id: 1,
      title: t('experience.dell'),
      company: 'DELL Technologies',
      location: 'Casablanca, Morocco',
      period: 'Mid Jul 2024 – Mid Aug 2024',
      type: 'Internship',
      description: t('experience.dell.description'),
      achievements: [
        'Collaborated with cross-functional teams',
        'Gained insights into enterprise technology solutions',
        'Observed digital transformation processes',
        'Enhanced understanding of corporate workflows'
      ],
      skills: ['Process Analysis', 'Digital Transformation', 'Team Collaboration', 'Business Technology']
    }
  ]

  const extracurriculars = [
    {
      id: 1,
      title: 'Head of the Social Action Cell',
      organization: 'JLM ENSA Marrakech',
      period: 'Nov 2023 – May 2025',
      description: 'Lead the organization of social and solidarity actions, including humanitarian caravans and orphanage visits.',
      icon: Users,
      color: 'text-primary'
    },
    {
      id: 2,
      title: 'Member of the Sponsorship and Partnerships Cell',
      organization: 'Enactus ENSA Marrakech',
      period: 'Jan 2022 – Apr 2025',
      description: 'Contributed to sponsor search and partnership management for the club.',
      icon: Lightbulb,
      color: 'text-secondary'
    },
    {
      id: 3,
      title: 'Member of the Training and Projects Cell',
      organization: 'BrainX - ENSA Marrakech',
      period: 'Nov 2023 – Jun 2024',
      description: 'Conducted training sessions and practical workshops on Machine Learning.',
      icon: Briefcase,
      color: 'text-accent'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('experience.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Briefcase className="h-6 w-6 text-primary mr-3" />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="project-card p-6 hover-lift">
                    
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-card-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="inline-flex items-center space-x-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Activities */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Users className="h-6 w-6 text-secondary mr-3" />
                Leadership & Activities
              </h3>
              
              <div className="space-y-6">
                {extracurriculars.map((activity) => (
                  <div key={activity.id} className="project-card p-6 hover-lift">
                    
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-card-foreground mb-1">
                          {activity.title}
                        </h4>
                        <p className="text-primary font-semibold text-sm">
                          {activity.organization}
                        </p>
                        <p className="text-muted-foreground text-sm flex items-center mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {activity.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience