import { Trophy, Medal, Star, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

const Awards = () => {
  const { t } = useLanguage()

  const awards = [
    {
      id: 1,
      title: t('awards.hackathon'),
      event: 'Hackathon HackAI 2025',
      organization: 'UM6P - 1337',
      location: 'Ben Guerir, Morocco',
      date: 'May 2025',
      position: '7th Place',
      type: 'Competition',
      description: 'Developed a conversational assistant in Darija to simplify access to administrative information in Morocco.',
      technologies: ['AI', 'NLP', 'Darija', 'Speech Recognition'],
      participants: '100+ teams',
      prize: 'Recognition & Certificate',
      icon: Trophy,
      color: 'text-warning',
      bgColor: 'bg-warning/20',
      featured: true,
      linkedinUrl: '#'
    },
    {
      id: 2,
      title: t('awards.gameofcodes'),
      event: 'Game Of Codes 2024',
      organization: 'ENSA Marrakech',
      location: 'Marrakech, Morocco',
      date: 'May 2024',
      position: '1st Place',
      type: 'Programming Contest',
      description: 'Secured first place in competitive programming contest showcasing algorithmic problem-solving skills.',
      technologies: ['Algorithms', 'Data Structures', 'Problem Solving'],
      participants: '50+ participants',
      prize: 'Winner Trophy & Certificate',
      icon: Medal,
      color: 'text-warning',
      bgColor: 'bg-warning/20',
      featured: true,
      linkedinUrl: '#'
    },
    {
      id: 3,
      title: t('awards.excellence'),
      event: 'Academic Excellence Award',
      organization: 'Banque Populaire Marrakech-Safi',
      location: 'Marrakech, Morocco',
      date: 'Dec 2021',
      position: 'Excellence Award',
      type: 'Academic',
      description: 'Recognized for outstanding academic performance and commitment to educational excellence.',
      technologies: ['Academic Excellence', 'Leadership'],
      participants: 'Regional Recognition',
      prize: 'Excellence Certificate & Scholarship',
      icon: Star,
      color: 'text-primary',
      bgColor: 'bg-primary/20',
      featured: false,
      linkedinUrl: '#'
    }
  ]

  const achievements = [
    { label: 'Awards Won', value: '3', icon: '🏆' },
    { label: 'Competitions', value: '5+', icon: '🎯' },
    { label: 'Recognition Level', value: 'National', icon: '🌍' },
    { label: 'Team Projects', value: '10+', icon: '👥' }
  ]

  return (
    <section id="awards" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('awards.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Recognition for excellence in technology, innovation, and academic achievement
            </p>
          </div>

          {/* Featured Awards */}
          <div className="space-y-8 mb-16">
            {awards.filter(award => award.featured).map((award) => (
              <div key={award.id} className="project-card p-8 hover-lift">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  
                  {/* Award Icon & Position */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4 lg:text-center">
                      <div className={`w-20 h-20 ${award.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <award.icon className={`h-10 w-10 ${award.color}`} />
                      </div>
                      <div className="lg:text-center">
                        <div className={`text-2xl font-bold ${award.color} mb-2`}>
                          {award.position}
                        </div>
                        <div className="inline-flex items-center space-x-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          <span>{award.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {award.title}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-primary mb-4">
                      {award.event}
                    </h4>

                    <div className="flex flex-col space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{award.organization}, {award.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{award.date}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {award.description}
                    </p>

                    {/* Technologies & Skills */}
                    <div className="space-y-2 mb-4">
                      <h5 className="font-semibold text-sm">Technologies & Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {award.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Competition Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Participants: </span>
                        <span className="font-semibold">{award.participants}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Prize: </span>
                        <span className="font-semibold">{award.prize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-1 lg:text-right">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Awards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Other Recognitions</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {awards.filter(award => !award.featured).map((award) => (
                <div key={award.id} className="project-card p-6 hover-lift">
                  <div className="flex items-start space-x-6">
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${award.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <award.icon className={`h-8 w-8 ${award.color}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-lg font-bold text-card-foreground">
                          {award.title}
                        </h4>
                        <div className={`text-lg font-bold ${award.color} mt-1 md:mt-0`}>
                          {award.position}
                        </div>
                      </div>

                      <p className="text-primary font-semibold mb-2">{award.event}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{award.organization}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{award.date}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="project-card p-6 text-center hover-lift">
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <div className="text-2xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-card border rounded-lg p-6">
              <div>
                <h3 className="font-bold mb-2">Pursuing Excellence</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Continuously participating in competitions and challenges to push boundaries
                </p>
                <Button className="gradient-primary text-white">
                  <Trophy className="h-4 w-4 mr-2" />
                  View All Achievements
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards
