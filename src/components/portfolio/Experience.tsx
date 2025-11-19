// src/components/Experience.tsx
import { Briefcase, MapPin, Calendar, Users, Lightbulb, Eye } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

// Import logos
import ucamLogo from '@/assets/logos/universities/uca_logo.png.avif'
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
      title: t('experience.ucam.title'),
      company: t('experience.ucam.company'),
      location: t('experience.ucam.location'),
      period: t('experience.ucam.period'),
      type: t('experience.ucam.type'),
      description: t('experience.ucam.description'),
      logo: ucamLogo,
      brandColors: {
        primary: '#D35400',     // Orange cuivré / marron-orange foncé (très proche du logo UCAM)
        background: 'linear-gradient(135deg, rgba(211, 84, 0, 0.06) 0%, rgba(211, 84, 0, 0.02) 100%)',
        accent: 'rgba(211, 84, 0, 0.12)',
        border: 'rgba(211, 84, 0, 0.35)'
      },
      achievements: [
        t('experience.ucam.achievement1'),
        t('experience.ucam.achievement2')
      ],
      skills: ['Django', 'Python', 'PostgreSQL', 'API REST', 'Web Security', 'Git', 'Docker'],
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
      brandColors: {
        primary: '#007DB8', // Dell blue
        background: 'linear-gradient(135deg, rgba(0, 125, 184, 0.05) 0%, rgba(0, 125, 184, 0.02) 100%)',
        accent: 'rgba(0, 125, 184, 0.1)',
        border: 'rgba(0, 125, 184, 0.2)'
      },
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
      brandColors: {
        primary: '#E74C3C', // JLM red
        background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(231, 76, 60, 0.02) 100%)',
        accent: 'rgba(231, 76, 60, 0.1)',
        border: 'rgba(231, 76, 60, 0.2)'
      },
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
      brandColors: {
        primary: '#FFD700', // Enactus gold/yellow
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(255, 215, 0, 0.03) 100%)',
        accent: 'rgba(255, 215, 0, 0.15)',
        border: 'rgba(255, 215, 0, 0.3)'
      },
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
      brandColors: {
        primary: '#8B5CF6', // BrainX purple
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(139, 92, 246, 0.02) 100%)',
        accent: 'rgba(139, 92, 246, 0.1)',
        border: 'rgba(139, 92, 246, 0.2)'
      },
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
                  <div 
                    key={exp.id} 
                    className="project-card p-6 hover-lift relative overflow-hidden"
                    style={{ 
                      background: exp.brandColors.background,
                      borderLeft: `4px solid ${exp.brandColors.primary}`
                    }}
                  >
                    {/* Subtle pattern overlay */}
                    <div 
                      className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, ${exp.brandColors.primary} 2px, transparent 2px), radial-gradient(circle at 80% 50%, ${exp.brandColors.primary} 1px, transparent 1px)`,
                        backgroundSize: '30px 30px, 20px 20px'
                      }}
                    />
                    
                    {/* Header with Logo */}
                    <div className="flex items-start space-x-4 mb-4 relative z-10">
                      <div 
                        className="w-16 h-16 rounded-lg bg-white border shadow-sm flex items-center justify-center p-2 flex-shrink-0"
                        style={{ borderColor: exp.brandColors.border }}
                      >
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
                            <p 
                              className="font-semibold"
                              style={{ color: exp.brandColors.primary }}
                            >
                              {exp.company}
                            </p>
                          </div>
                          <div 
                            className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium"
                            style={{ 
                              backgroundColor: exp.brandColors.accent,
                              color: exp.brandColors.primary
                            }}
                          >
                            <span>{exp.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-sm text-muted-foreground relative z-10">
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
                    <p className="text-muted-foreground mb-4 leading-relaxed relative z-10">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4 relative z-10">
                      <h5 className="font-semibold mb-2">{t('experience.achievements')}</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                              style={{ backgroundColor: exp.brandColors.primary }}
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {exp.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-xs rounded-full font-medium"
                          style={{ 
                            backgroundColor: exp.brandColors.accent,
                            color: exp.brandColors.primary
                          }}
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
                          className="w-full sm:w-auto text-sm sm:text-base relative z-10 hover:opacity-90"
                          style={{ 
                            borderColor: exp.brandColors.primary,
                            color: exp.brandColors.primary
                          }}
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
                  <div 
                    key={activity.id} 
                    className="project-card p-6 hover-lift relative overflow-hidden"
                    style={{ 
                      background: activity.brandColors.background,
                      borderLeft: `4px solid ${activity.brandColors.primary}`
                    }}
                  >
                    {/* Subtle pattern overlay */}
                    <div 
                      className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, ${activity.brandColors.primary} 2px, transparent 2px), radial-gradient(circle at 80% 50%, ${activity.brandColors.primary} 1px, transparent 1px)`,
                        backgroundSize: '30px 30px, 20px 20px'
                      }}
                    />

                    {/* Header with Logo and Icon */}
                    <div className="flex items-start space-x-4 mb-4 relative z-10">
                      <div 
                        className="w-12 h-12 rounded-lg bg-white border shadow-sm flex items-center justify-center p-1 flex-shrink-0"
                        style={{ borderColor: activity.brandColors.border }}
                      >
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
                        <p 
                          className="font-semibold text-sm"
                          style={{ color: activity.brandColors.primary }}
                        >
                          {activity.organization}
                        </p>
                        <p className="text-muted-foreground text-sm flex items-center mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {activity.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10">
                      {activity.description}
                    </p>

                    {/* See Details Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedActivity(activity)}
                          className="w-full sm:w-auto text-sm sm:text-base relative z-10 hover:opacity-90"
                          style={{ 
                            borderColor: activity.brandColors.primary,
                            color: activity.brandColors.primary
                          }}
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