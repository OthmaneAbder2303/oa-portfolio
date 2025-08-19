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
      title: 'Private Tutor',
      company: 'Superprof',
      location: 'Online & France',
      period: 'Aug 2025 – Present',
      type: 'Freelance',
      description: 'Provided personalized tutoring in Mathematics, Algorithmics, Programming (Python, Java, C), and Databases, combining clear explanations, practical exercises, and tailored methods to strengthen logic, autonomy, and confidence.',
      logo: superprofLogo, // tu peux remplacer par une image locale si tu en as
      achievements: [
        'Delivered tailored lessons to students of different levels',
        'Helped learners strengthen logical reasoning and autonomy',
        'Supported academic projects and exam preparation',
        'Adapted teaching methods to individual learning styles'
      ],
      skills: ['Teaching', 'Communication', 'Problem Solving', 'Programming', 'Mathematics'],
      images: [] // si tu veux ajouter des captures d’écran ou images illustratives
    },
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'DELL Technologies',
      location: 'Casablanca, Morocco',
      period: 'Mid Jul 2024 – Mid Aug 2024',
      type: 'Internship',
      description: 'Participated in a 4-week internship program focused on software engineering and digital transformation at DELL Technologies.',
      logo: dellLogo,
      achievements: [
        'Collaborated with cross-functional teams',
        'Gained insights into enterprise technology solutions',
        'Observed digital transformation processes',
        'Enhanced understanding of corporate workflows'
      ],
      skills: ['Process Analysis', 'Digital Transformation', 'Team Collaboration', 'Business Technology'],
      images: [
        {
          src: dellInternship,
          subtitle: 'Working at DELL Technologies office in Casablanca'
        },
        {
          src: dellSite,
          subtitle: 'DELL Technologies facility and workspace'
        },
        {
          src: dellPageDeGardeRapport,
          subtitle: 'Internship report cover page - comprehensive project documentation'
        }
      ]
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
      color: 'text-primary',
      logo: jlmLogo,
      images: [
        {
          src: jlmDarBouidar,
          subtitle: 'Visit to Dar Bouidar orphanage - spreading joy and support'
        },
        {
          src: jlmDarTifl,
          subtitle: 'Community outreach at Dar Tifl center'
        },
        {
          src: jlmDouarTamatiylt,
          subtitle: 'Humanitarian caravan to Douar Tamatiylt village'
        }
      ]
    },
    {
      id: 2,
      title: 'Member of the Sponsorship and Partnerships Cell',
      organization: 'Enactus ENSA Marrakech',
      period: 'Jan 2022 – Apr 2025',
      description: 'Contributed to sponsor search and partnership management for the club.',
      icon: Lightbulb,
      color: 'text-secondary',
      logo: enactusLogo,
      images: [
        {
          src: enactusHackathon,
          subtitle: 'Organizing hackathons and innovation events'
        },
        {
          src: enactusVisiteTraiteur,
          subtitle: 'Partnership visit with local entrepreneurs'
        }
      ]
    },
    {
      id: 3,
      title: 'Member of the Training and Projects Cell',
      organization: 'BrainX - ENSA Marrakech',
      period: 'Nov 2023 – Jun 2024',
      description: 'Conducted training sessions and practical workshops on Machine Learning.',
      icon: Briefcase,
      color: 'text-accent',
      logo: brainxLogo,
      images: [
        {
          src: brainxFormation1,
          subtitle: 'Leading machine learning workshops for students'
        },
        {
          src: brainxFormation2,
          subtitle: 'Hands-on training in AI and data science'
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
                Professional Experience
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
                          See Details
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
                              No images available for this experience.
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
                Leadership & Activities
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
                          See Details
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
                              No images available for this activity.
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