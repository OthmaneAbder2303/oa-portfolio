// src/components/Experience.tsx
import { Briefcase, MapPin, Calendar, Users, Lightbulb, Eye } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

// Import logos
import ucamLogo from '@/assets/logos/universities/uca_logo.png.avif'
import dellLogo from '@/assets/logos/companies/dell.png'
import doficLogo from '@/assets/logos/companies/dofic_logo.png'
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
      id: 3,
      title: t('experience.dofic.title'),
      company: t('experience.dofic.company'),
      location: t('experience.dofic.location'),
      period: t('experience.dofic.period'),
      type: t('experience.dofic.type'),
      description: t('experience.dofic.description'),
      logo: doficLogo,
      brandColors: {
        primary: '#F2811D',
        background: 'linear-gradient(135deg, rgba(242, 129, 29, 0.06) 0%, rgba(242, 129, 29, 0.02) 100%)',
        accent: 'rgba(242, 129, 29, 0.12)',
        border: 'rgba(242, 129, 29, 0.3)'
      },
      achievements: [
        t('experience.dofic.achievement1'),
        t('experience.dofic.achievement2'),
        t('experience.dofic.achievement3'),
        t('experience.dofic.achievement4')
      ],
      skills: ['Docker', 'Project Management', 'React Native', 'Jira', 'Gitlab', 'Prompt Engineering'],
      images: []
    },
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
        primary: '#D35400',
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
        primary: '#007DB8',
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
        { src: dellInternship, subtitle: t('experience.dell.image1') },
        { src: dellSite, subtitle: t('experience.dell.image2') },
        { src: dellPageDeGardeRapport, subtitle: t('experience.dell.image3') }
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
        primary: '#E74C3C',
        background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(231, 76, 60, 0.02) 100%)',
        accent: 'rgba(231, 76, 60, 0.1)',
        border: 'rgba(231, 76, 60, 0.2)'
      },
      images: [
        { src: jlmDarBouidar, subtitle: t('experience.jlm.image1') },
        { src: jlmDarTifl, subtitle: t('experience.jlm.image2') },
        { src: jlmDouarTamatiylt, subtitle: t('experience.jlm.image3') }
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
        primary: '#FFD700',
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(255, 215, 0, 0.03) 100%)',
        accent: 'rgba(255, 215, 0, 0.15)',
        border: 'rgba(255, 215, 0, 0.3)'
      },
      images: [
        { src: enactusHackathon, subtitle: t('experience.enactus.image1') },
        { src: enactusVisiteTraiteur, subtitle: t('experience.enactus.image2') }
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
        primary: '#8B5CF6',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(139, 92, 246, 0.02) 100%)',
        accent: 'rgba(139, 92, 246, 0.1)',
        border: 'rgba(139, 92, 246, 0.2)'
      },
      images: [
        { src: brainxFormation1, subtitle: t('experience.brainx.image1') },
        { src: brainxFormation2, subtitle: t('experience.brainx.image2') }
      ]
    }
  ]

  const [selectedActivity, setSelectedActivity] = useState<(typeof extracurriculars[0]) | (typeof experiences[0]) | null>(null)
  const [selectedImage, setSelectedImage] = useState<{ src: string; subtitle: string } | null>(null)

  const MAX_ACHIEVEMENTS_PREVIEW = 2
  const MAX_SKILLS_PREVIEW = 4

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

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              {t('experience.professional')}
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="project-card p-4 hover-lift relative overflow-hidden flex flex-col"
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
                  <div className="flex items-start space-x-3 mb-3 relative z-10">
                    <div
                      className="w-11 h-11 rounded-lg bg-white border shadow-sm flex items-center justify-center p-1.5 flex-shrink-0"
                      style={{ borderColor: exp.brandColors.border }}
                    >
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                          <h4 className="text-base font-bold text-card-foreground leading-tight">
                            {exp.title}
                          </h4>
                          <p
                            className="font-semibold text-sm truncate"
                            style={{ color: exp.brandColors.primary }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0"
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
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-xs text-muted-foreground relative z-10">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description (truncated) */}
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed relative z-10 line-clamp-3">
                    {exp.description}
                  </p>

                  {/* Achievements (preview) */}
                  <div className="mb-3 relative z-10">
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {exp.achievements.slice(0, MAX_ACHIEVEMENTS_PREVIEW).map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: exp.brandColors.primary }}
                          />
                          <span className="line-clamp-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.achievements.length > MAX_ACHIEVEMENTS_PREVIEW && (
                      <p
                        className="text-xs font-medium mt-1"
                        style={{ color: exp.brandColors.primary }}
                      >
                        +{exp.achievements.length - MAX_ACHIEVEMENTS_PREVIEW} {t('experience.seeDetails')}
                      </p>
                    )}
                  </div>

                  {/* Skills (preview) */}
                  <div className="flex flex-wrap gap-1.5 mb-3 relative z-10">
                    {exp.skills.slice(0, MAX_SKILLS_PREVIEW).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs rounded-full font-medium"
                        style={{
                          backgroundColor: exp.brandColors.accent,
                          color: exp.brandColors.primary
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > MAX_SKILLS_PREVIEW && (
                      <span
                        className="px-2 py-0.5 text-xs rounded-full font-medium"
                        style={{
                          backgroundColor: exp.brandColors.accent,
                          color: exp.brandColors.primary
                        }}
                      >
                        +{exp.skills.length - MAX_SKILLS_PREVIEW}
                      </span>
                    )}
                  </div>

                  {/* See Details Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedActivity(exp)}
                        className="w-full sm:w-auto text-sm relative z-10 hover:opacity-90 mt-auto"
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

                        {/* Full achievements list in dialog */}
                        <div>
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

                        {/* Full skills list in dialog */}
                        <div className="flex flex-wrap gap-2">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {extracurriculars.map((activity) => (
                <div
                  key={activity.id}
                  className="project-card p-5 hover-lift relative overflow-hidden flex flex-col"
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
                  <div className="flex items-start space-x-3 mb-3 relative z-10">
                    <div
                      className="w-11 h-11 rounded-lg bg-white border shadow-sm flex items-center justify-center p-1 flex-shrink-0"
                      style={{ borderColor: activity.brandColors.border }}
                    >
                      <img
                        src={activity.logo}
                        alt={`${activity.organization} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-card-foreground text-sm leading-tight mb-0.5">
                        {activity.title}
                      </h4>
                      <p
                        className="font-semibold text-xs truncate"
                        style={{ color: activity.brandColors.primary }}
                      >
                        {activity.organization}
                      </p>
                      <p className="text-muted-foreground text-xs flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {activity.period}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 relative z-10 line-clamp-3">
                    {activity.description}
                  </p>

                  {/* See Details Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedActivity(activity)}
                        className="w-full sm:w-auto text-sm relative z-10 hover:opacity-90 mt-auto"
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