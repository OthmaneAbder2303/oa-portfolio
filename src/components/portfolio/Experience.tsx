// src/components/Experience.tsx
import { Briefcase, MapPin, Calendar, Users, Lightbulb, Eye } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

// Import logos
import superprofLogo from '@/assets/logos/companies/superprof_2.png'
import dellLogo from '@/assets/logos/companies/dell.png'
import jlmLogo from '@/assets/logos/organizations/jlm.jpg'
import enactusLogo from '@/assets/logos/organizations/enactus.png'
import brainxLogo from '@/assets/logos/organizations/brainx.png'

// Import additional activity images
import brainxFormation1 from '@/assets/activities/brainx/formation_1.jpeg'
import brainxFormation2 from '@/assets/activities/brainx/formation_2.jpeg'
import enactusHackathon from '@/assets/activities/enactus/hackathon.jpeg'
import enactusVisiteTraiteur from '@/assets/activities/enactus/visite_traiteur.jpeg'
import jlmDarBouidar from '@/assets/activities/jlm/dar_bouidar.jpeg'
import jlmDarTifl from '@/assets/activities/jlm/dar_tifl.jpeg'
import jlmDouarTamatiylt from '@/assets/activities/jlm/douar_tamatiylt.jpeg'
import dellInternship from '@/assets/activities/dell/dell_internship.jpeg'
import dellSite from '@/assets/activities/dell/dell_site.jpeg'
import dellPageDeGardeRapport from '@/assets/activities/dell/page_de_garde_rapport.jpeg'

const Experience = () => {
  const { t } = useLanguage()

  const experiences = [
    {
      id: 2,
      title: t('experience.superprof.title'),
      company: t('experience.superprof.company'),
      location: t('experience.superprof.location'),
      period: t('experience.superprof.period'),
      type: t('experience.superprof.type'),
      description: t('experience.superprof.description'),
      logo: superprofLogo,
      achievements: [
        t('experience.superprof.achievement1'),
        t('experience.superprof.achievement2'),
        t('experience.superprof.achievement3'),
        t('experience.superprof.achievement4')
      ],
      skills: ['Teaching', 'Communication', 'Problem Solving', 'Programming', 'Mathematics'],
      images: []
    },
    {
      id: 1,
      title: t('experience.dell.title'),
      company: t('experience.dell.company'),
      location: t('experience.dell.location'),
      period: t('experience.dell.period'),
      type: t('experience.dell.type'),
      description: t('experience.dell.description'),
      logo: dellLogo,
      achievements: [
        t('experience.dell.achievement1'),
        t('experience.dell.achievement2'),
        t('experience.dell.achievement3'),
        t('experience.dell.achievement4')
      ],
      skills: ['Process Analysis', 'Digital Transformation', 'Team Collaboration', 'Business Technology'],
      images: [
        {
          src: dellInternship,
          subtitle: t('experience.dell.image1')
        },
        {
          src: dellSite,
          subtitle: t('experience.dell.image2')
        },
        {
          src: dellPageDeGardeRapport,
          subtitle: t('experience.dell.image3')
        }
      ]
    }
  ]

  const extracurriculars = [
    {
      id: 1,
      title: t('experience.jlm.title'),
      organization: t('experience.jlm.organization'),
      period: t('experience.jlm.period'),
      description: t('experience.jlm.description'),
      icon: Users,
      color: 'text-primary',
      logo: jlmLogo,
      images: [
        {
          src: jlmDarBouidar,
          subtitle: t('experience.jlm.image1')
        },
        {
          src: jlmDarTifl,
          subtitle: t('experience.jlm.image2')
        },
        {
          src: jlmDouarTamatiylt,
          subtitle: t('experience.jlm.image3')
        }
      ]
    },
    {
      id: 2,
      title: t('experience.enactus.title'),
      organization: t('experience.enactus.organization'),
      period: t('experience.enactus.period'),
      description: t('experience.enactus.description'),
      icon: Lightbulb,
      color: 'text-secondary',
      logo: enactusLogo,
      images: [
        {
          src: enactusHackathon,
          subtitle: t('experience.enactus.image1')
        },
        {
          src: enactusVisiteTraiteur,
          subtitle: t('experience.enactus.image2')
        }
      ]
    },
    {
      id: 3,
      title: t('experience.brainx.title'),
      organization: t('experience.brainx.organization'),
      period: t('experience.brainx.period'),
      description: t('experience.brainx.description'),
      icon: Briefcase,
      color: 'text-accent',
      logo: brainxLogo,
      images: [
        {
          src: brainxFormation1,
          subtitle: t('experience.brainx.image1')
        },
        {
          src: brainxFormation2,
          subtitle: t('experience.brainx.image2')
        }
      ]
    }
  ]

  const [selectedActivity, setSelectedActivity] = useState<(typeof extracurriculars[0]) | (typeof experiences[0]) | null>(null)
  const [selectedImage, setSelectedImage] = useState<{ src: string; subtitle: string } | null>(null)

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
                {t('experience.professional')}
              </h3>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="project-card p-6 hover-lift">
                    {/* Header with Logo */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-lg bg-white border shadow-sm flex items-center justify-center p-2 flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
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
                      <h5 className="font-semibold mb-2">{t('experience.achievements')}</h5>
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
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* See Details Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedActivity(exp)}
                          className="w-full sm:w-auto text-sm sm:text-base"
                          aria-label={`View details for ${exp.title}`}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          {t('experience.seeDetails')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="w-full max-w-[90vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-3 text-base sm:text-lg">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                            />
                            <span>{exp.title}</span>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {exp.description}
                          </p>
                          {exp.images && exp.images.length > 0 ? (
                            exp.images.map((image, index) => (
                              <div key={index} className="space-y-2">
                                <img 
                                  src={image.src} 
                                  alt={image.subtitle}
                                  className="w-full h-auto max-h-[40vh] sm:h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                  onClick={() => setSelectedImage(image)}
                                />
                                <p className="text-sm text-muted-foreground text-center font-medium">
                                  {image.subtitle}
                                </p>
                              </div>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground text-center">
                              {t('experience.noImages')}
                            </p>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Activities */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Users className="h-6 w-6 text-secondary mr-3" />
                {t('experience.leadership')}
              </h3>
              <div className="space-y-6">
                {extracurriculars.map((activity) => (
                  <div key={activity.id} className="project-card p-6 hover-lift">
                    {/* Header with Logo and Icon */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-white border shadow-sm flex items-center justify-center p-1 flex-shrink-0">
                        <img 
                          src={activity.logo} 
                          alt={`${activity.organization} logo`}
                          className="w-full h-full object-contain"
                        />
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
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {activity.description}
                    </p>

                    {/* See Details Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedActivity(activity)}
                          className="w-full sm:w-auto text-sm sm:text-base"
                          aria-label={`View details for ${activity.title}`}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          {t('experience.seeDetails')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="w-full max-w-[90vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-3 text-base sm:text-lg">
                            <img 
                              src={activity.logo} 
                              alt={`${activity.organization} logo`}
                              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                            />
                            <span>{activity.title}</span>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {activity.description}
                          </p>
                          {activity.images && activity.images.length > 0 ? (
                            activity.images.map((image, index) => (
                              <div key={index} className="space-y-2">
                                <img 
                                  src={image.src} 
                                  alt={image.subtitle}
                                  className="w-full h-auto max-h-[40vh] sm:h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                  onClick={() => setSelectedImage(image)}
                                />
                                <p className="text-sm text-muted-foreground text-center font-medium">
                                  {image.subtitle}
                                </p>
                              </div>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground text-center">
                              {t('experience.noImages')}
                            </p>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Viewer Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="w-full max-w-[95vw] max-h-[90vh] p-4 sm:p-6 overflow-hidden">
            <DialogHeader className="p-4 sm:p-6 pb-0">
              <DialogTitle className="text-base sm:text-lg font-semibold">
                {selectedImage?.subtitle}
              </DialogTitle>
            </DialogHeader>
            <div className="p-4 sm:p-6 pt-4">
              {selectedImage && (
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.subtitle}
                  className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default Experience