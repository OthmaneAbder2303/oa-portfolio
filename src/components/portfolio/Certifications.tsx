import { ExternalLink, Award, Calendar, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

const Certifications = () => {
  const { t } = useLanguage()

  const certifications = [
    {
      id: 1,
      title: t('certifications.ml'),
      issuer: 'DeepLearning.AI, Stanford',
      date: 'Sep 2024',
      credentialId: 'ML-SPEC-2024-001',
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and neural networks.',
      skills: ['Machine Learning', 'Neural Networks', 'Python', 'TensorFlow', 'Deep Learning'],
      credentialUrl: '#',
      logo: '🧠',
      color: 'primary'
    },
    {
      id: 2,
      title: t('certifications.python'),
      issuer: 'IBM',
      date: 'Dec 2023',
      credentialId: 'IBM-PY-DS-2023-456',
      description: 'Python programming fundamentals for data science and AI development applications.',
      skills: ['Python', 'Data Science', 'AI Development', 'Pandas', 'NumPy'],
      credentialUrl: '#',
      logo: '🐍',
      color: 'secondary'
    },
    {
      id: 3,
      title: t('certifications.algorithms'),
      issuer: 'University of Colorado Boulder',
      date: 'Nov 2022',
      credentialId: 'UCB-ALG-2022-789',
      description: 'Advanced algorithms for searching, sorting, and indexing with practical implementations.',
      skills: ['Algorithms', 'Data Structures', 'Sorting', 'Searching', 'Complexity Analysis'],
      credentialUrl: '#',
      logo: '⚡',
      color: 'accent'
    }
  ]

  const stats = [
    { label: 'Certifications', value: '3+', icon: '🏆' },
    { label: 'Total Hours', value: '200+', icon: '⏱️' },
    { label: 'Platforms', value: '3', icon: '🌐' },
    { label: 'Skills Gained', value: '15+', icon: '🎯' }
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
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{cert.logo}</span>
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

          {/* Certification Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="project-card p-6 text-center hover-lift">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Learning Platforms */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-8">Learning Platforms</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              
              <div className="project-card p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h4 className="font-semibold mb-2">DeepLearning.AI</h4>
                <p className="text-sm text-muted-foreground">Stanford University Partnership</p>
              </div>

              <div className="project-card p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💙</span>
                </div>
                <h4 className="font-semibold mb-2">IBM</h4>
                <p className="text-sm text-muted-foreground">Professional Development</p>
              </div>

              <div className="project-card p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🏔️</span>
                </div>
                <h4 className="font-semibold mb-2">UC Boulder</h4>
                <p className="text-sm text-muted-foreground">Computer Science Excellence</p>
              </div>
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