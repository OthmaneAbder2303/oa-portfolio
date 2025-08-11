
import { Trophy, Calendar, MapPin, Medal, Award as AwardIcon, Users } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Awards = () => {
  const { t } = useLanguage()

  const awards = [
    {
      id: 1,
      title: '7th Place – Hackathon HackAI 2025',
      organization: 'UM6P - 1337',
      location: 'Ben Guerir, Morocco',
      date: 'May 2025',
      description: 'Developed a conversational assistant in Darija for administrative information access in Morocco.',
      category: 'Competition',
      rank: '7th',
      participants: '100+',
      image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=300&fit=crop',
      logo: 'https://www.1337.ma/assets/images/logo-1337.png'
    },
    {
      id: 2,
      title: '1st Place – Game Of Codes',
      organization: 'ENSA Marrakech',
      location: 'Marrakech, Morocco',
      date: 'May 2024',
      description: 'Won first place in competitive programming contest featuring algorithmic problem solving.',
      category: 'Programming Contest',
      rank: '1st',
      participants: '50+',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
      logo: 'https://www.ensa.ac.ma/sites/default/files/logo-ensa-marrakech.png'
    },
    {
      id: 3,
      title: 'Excellence Award',
      organization: 'Banque Populaire Marrakech-Safi',
      location: 'Marrakech, Morocco',
      date: 'Dec 2021',
      description: 'Recognized for outstanding academic performance and leadership potential.',
      category: 'Academic Excellence',
      rank: 'Winner',
      participants: 'Regional',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop',
      logo: 'https://www.gbp.ma/sites/default/files/logo-gbp.png'
    }
  ]

  const leadership = [
    {
      id: 1,
      title: 'Head of the Social Action Cell',
      organization: 'JLM ENSA Marrakech',
      period: 'Nov 2023 – May 2025',
      description: 'Lead the organization of social and solidarity actions, including humanitarian caravans and orphanage visits.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      logo: '🤝',
      activities: ['Humanitarian Caravans', 'Orphanage Visits', 'Community Outreach']
    },
    {
      id: 2,
      title: 'Member of the Sponsorship and Partnerships Cell',
      organization: 'Enactus ENSA Marrakech',
      period: 'Jan 2022 – Apr 2025',
      description: 'Contributed to sponsor search and partnership management for the club.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      logo: 'https://enactus.org/wp-content/uploads/2020/02/Enactus-logo.png',
      activities: ['Sponsor Relations', 'Partnership Development', 'Event Management']
    },
    {
      id: 3,
      title: 'Member of the Training and Projects Cell',
      organization: 'BrainX - ENSA Marrakech',
      period: 'Nov 2023 – Jun 2024',
      description: 'Conducted training sessions and practical workshops on Machine Learning.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      logo: '🧠',
      activities: ['ML Workshops', 'Training Sessions', 'Technical Mentoring']
    }
  ]

  const recognitionStats = [
    { label: 'Awards Won', value: '3', icon: '🏆' },
    { label: 'Leadership Roles', value: '3', icon: '👨‍💼' },
    { label: 'Communities Impacted', value: '500+', icon: '🌍' },
    { label: 'Years Active', value: '4+', icon: '📅' }
  ]

  return (
    <section id="awards" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('awards.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Recognition for excellence in academics, competitions, and community leadership
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {awards.map((award) => (
              <div key={award.id} className="project-card p-6 hover-lift">
                
                {/* Award Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {award.rank}
                    </div>
                  </div>
                </div>

                {/* Award Header */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src={award.logo} 
                      alt={award.organization}
                      className="w-8 h-8 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex';
                      }}
                    />
                    <Trophy className="w-6 h-6 text-white hidden" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-card-foreground mb-1 line-clamp-2">
                      {award.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">{award.organization}</p>
                  </div>
                </div>

                {/* Award Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{award.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{award.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{award.participants} participants</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {award.description}
                </p>

                {/* Category Badge */}
                <div className="inline-flex items-center bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  {award.category}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership & Activities */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Leadership & Activities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((role) => (
                <div key={role.id} className="project-card p-6 hover-lift">
                  
                  {/* Activity Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={role.image} 
                      alt={role.title}
                      className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Role Header */}
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      {typeof role.logo === 'string' && role.logo.startsWith('http') ? (
                        <img 
                          src={role.logo} 
                          alt={role.organization}
                          className="w-6 h-6 object-contain filter brightness-0 invert"
                        />
                      ) : (
                        <span className="text-lg">{role.logo}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-card-foreground mb-1 line-clamp-2">
                        {role.title}
                      </h4>
                      <p className="text-primary font-semibold text-sm">{role.organization}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{role.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>

                  {/* Activities */}
                  <div className="space-y-2">
                    <h5 className="font-semibold text-xs">Key Activities:</h5>
                    <div className="flex flex-wrap gap-1">
                      {role.activities.map((activity, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recognitionStats.map((stat, index) => (
              <div key={index} className="project-card p-6 text-center hover-lift">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards
