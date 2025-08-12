import { ExternalLink, Award, Calendar, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

import stanfordLogo from '@/assets/logos/universities/stanford.avif'
import coloradoLogo from '@/assets/logos/universities/colorado.png'
import courserqaLogo from '@/assets/logos/platforms/coursera.png'
import datacampLogo from '@/assets/logos/platforms/datacamp.png'
import deepaiLogo from '@/assets/logos/platforms/deep-ai.webp'
import geeksforgeeksLogo from '@/assets/logos/platforms/geeksforgeeks.png'
import ibmLogo from '@/assets/logos/platforms/ibm.png'
import googledevLogo from '@/assets/logos/platforms/google-developers.png'

const Certifications = () => {
  const { t } = useLanguage()

  const certifications = [
    {
      id: 1,
      title: t('certifications.ml'),
      issuer: 'DeepLearning.AI, Stanford',
      issuerLogo: stanfordLogo,
      date: 'Sep 2024',
      credentialId: 'PXIYWQUNFUDX',
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and neural networks.',
      skills: ['Machine Learning', 'Neural Networks', 'Python', 'TensorFlow', 'Deep Learning'],
      credentialUrl: 'https://coursera.org/verify/specialization/PXIYWQUNFUDX',
      color: 'primary'
    },
    {
      id: 2,
      title: t('certifications.python'),
      issuer: 'IBM',
      issuerLogo: ibmLogo,
      date: 'Dec 2023',
      credentialId: 'KGCAWCQ8R2BW',
      description: 'Python programming fundamentals for data science and AI development applications.',
      skills: ['Python', 'Data Science', 'AI Development', 'Pandas', 'NumPy'],
      credentialUrl: 'https://coursera.org/share/02f4094cc1adfe8f2e481f744add2ff8',
      color: 'secondary'
    },
    {
      id: 3,
      title: t('certifications.algorithms'),
      issuer: 'University of Colorado Boulder',
      issuerLogo: coloradoLogo,
      date: 'Nov 2022',
      credentialId: 'R5A4ZNVAXDJY',
      description: 'Advanced algorithms for searching, sorting, and indexing with practical implementations.',
      skills: ['Algorithms', 'Data Structures', 'Sorting', 'Searching', 'Complexity Analysis'],
      credentialUrl: 'https://coursera.org/share/707783a18068a5c6f024d35c64bce449',
      color: 'accent'
    }
  ]

  const learningPlatforms = [
    {
      name: 'DeepLearning.AI',
      description: 'Stanford University Partnership',
      logo: deepaiLogo
    },
    {
      name: 'IBM',
      description: 'Professional Development',
      logo: ibmLogo
    },
    {
      name: 'Coursera',
      description: 'Online Learning Platform',
      logo: courserqaLogo
    },
    {
      name: 'Google Developers',
      description: 'Developer Resources and Tools',
      logo: googledevLogo
    },
    {
      name: 'DataCamp',
      description: 'Data Science Learning',
      logo: datacampLogo
    },
    {
      name: 'GeeksforGeeks',
      description: 'Programming Practice',
      logo: geeksforgeeksLogo
    }
  ]

  return (
    <section id="certifications" className="section-padding">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('certifications.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional certifications demonstrating expertise in AI, machine learning, and software development
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="space-y-8 mb-16">
            {certifications.map((cert) => (
              <div key={cert.id} className="project-card p-6 hover-lift">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  
                  {/* Certificate Icon & Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4 lg:text-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <img 
                          src={cert.issuerLogo} 
                          alt={cert.issuer}
                          className="w-20 h-20 md:w-28 md:h-28 object-contain filter-primary"
                          onError={(e) => {
                            console.error(`Failed to load ${cert.issuer} logo:`, e);
                            e.currentTarget.src = 'fallback';
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.innerHTML = '<svg class="h-20 md:h-28 w-20 md:w-28 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>';
                          }}
                        />
                      </div>
                      <div className="lg:text-center">
                        <div className="text-sm text-muted-foreground flex items-center lg:justify-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold text-primary">{cert.issuer}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Credential Info & Actions */}
                  <div className="lg:col-span-1 lg:text-right">
                    <div className="space-y-4">
                      
                      {/* Credential ID */}
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Credential ID</div>
                        <div className="font-mono text-sm break-all">{cert.credentialId}</div>
                      </div>

                      {/* View Credential Button */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => window.open(cert.credentialUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Credential
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Platforms */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-8">Learning Platforms</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {learningPlatforms.map((platform, index) => (
                <div key={index} className="project-card p-6 text-center hover-lift">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <img 
                      src={platform.logo} 
                      alt={platform.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain filter-primary"
                      onError={(e) => {
                        console.error(`Failed to load ${platform.name} logo:`, e);
                        e.currentTarget.src = 'fallback';
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<svg class="h-12 md:h-16 w-12 md:w-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>';
                      }}
                    />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{platform.name}</h4>
                  <p className="text-xs text-muted-foreground">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-card border rounded-lg p-6">
              <div>
                <h3 className="font-bold mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Always expanding my knowledge through new certifications and courses
                </p>
                <Button className="gradient-primary text-white">
                  <Award className="h-4 w-4 mr-2" />
                  View All Credentials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications