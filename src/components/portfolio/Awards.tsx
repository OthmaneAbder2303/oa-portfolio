import { Trophy, Calendar, MapPin, Users, Linkedin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'

// Import university logos
import ensaLogo from '@/assets/logos/universities/ensa.png'
import um6pLogo from '@/assets/logos/universities/um6p.png'
import bpLogo from '@/assets/logos/companies/bp.png'
import hackaiLogo from '@/assets/logos/universities/um6p&1337.png'

import hackaiImage from '@/assets/activities/hack-ai/group_pic.jpg'
import gameOfCodesImage from '@/assets/activities/game_of_codes/photo_groupe.jpeg'
import bpImage from '@/assets/activities/prix_excellence/photo_groupe_bp.jpeg'

const Awards = () => {
  const { t } = useLanguage()

  const awards = [
    {
      id: 1,
      title: t('awards.hackai.title'),
      organization: t('awards.hackai.organization'),
      location: t('awards.hackai.location'),
      date: t('awards.hackai.date'),
      description: t('awards.hackai.description'),
      category: t('awards.hackai.category'),
      rank: t('awards.hackai.rank'),
      participants: t('awards.hackai.participants'),
      image: hackaiImage,
      logo: hackaiLogo,
      linkedinUrl: 'https://www.linkedin.com/posts/oa23_hackaimorocco-um6p-1337school-activity-7333412995273785344-tdTe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChCizUBNzU5KO4Om3HWs1FOU-WAHxKbBR0'
    },
    {
      id: 2,
      title: t('awards.gameofcodes.title'),
      organization: t('awards.gameofcodes.organization'),
      location: t('awards.gameofcodes.location'),
      date: t('awards.gameofcodes.date'),
      description: t('awards.gameofcodes.description'),
      category: t('awards.gameofcodes.category'),
      rank: t('awards.gameofcodes.rank'),
      participants: t('awards.gameofcodes.participants'),
      image: gameOfCodesImage,
      logo: ensaLogo,
      linkedinUrl: 'https://www.linkedin.com/posts/oa23_codinggame-problemsolving-algorithm-activity-7197580165806256130-3Sct?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChCizUBNzU5KO4Om3HWs1FOU-WAHxKbBR0'
    },
    {
      id: 3,
      title: t('awards.excellence.title'),
      organization: t('awards.excellence.organization'),
      location: t('awards.excellence.location'),
      date: t('awards.excellence.date'),
      description: t('awards.excellence.description'),
      category: t('awards.excellence.category'),
      rank: t('awards.excellence.rank'),
      participants: t('awards.excellence.participants'),
      image: bpImage,
      logo: bpLogo,
      linkedinUrl: 'https://www.linkedin.com/in/oa23/'
    }
  ]

  const handleLinkedInClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

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
              {t('awards.description')}
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {awards.map((award) => (
              <div key={award.id} className="project-card p-6 hover-lift">
                
                {/* Award Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <a href={award.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                  </a>
                  <div className="absolute top-4 left-4">
                    <div className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {award.rank}
                    </div>
                  </div>
                </div>

                {/* Award Header */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-16 h-16 bg-white border rounded-lg flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
                    <img
                      src={award.logo}
                      alt={award.organization}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-primary rounded flex items-center justify-center hidden">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
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
                    <span>{award.participants} {t('awards.participants')}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {award.description}
                </p>

                {/* Category Badge and LinkedIn Button */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                    {award.category}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleLinkedInClick(award.linkedinUrl)}
                    className="hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-blue-600">{t('awards.seeDetails')}</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-card border rounded-lg p-6">
              <div>
                <h3 className="font-bold mb-2">{t('awards.moreAchievements')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('awards.linkedinCta')}
                </p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleLinkedInClick('https://www.linkedin.com/in/oa23/')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  {t('awards.viewLinkedin')}
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