import { ExternalLink, Github, Calendar, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: t('projects.smartroute'),
      description: t('projects.smartroute.description'),
      period: 'Mar 2025 – May 2025',
      institution: 'ENSA Marrakech',
      technologies: ['React', 'Python', 'Machine Learning', 'Graph Algorithms', 'Weather API'],
      category: 'Web Development & AI',
      featured: true,
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: 2,
      title: t('projects.hackathon'),
      description: t('projects.hackathon.description'),
      period: 'May 2025',
      institution: 'UM6P - 1337',
      technologies: ['NLP', 'Speech Recognition', 'Generative AI', 'Darija', 'Web Search'],
      category: 'AI & NLP',
      featured: true,
      achievement: '7th Place',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: 3,
      title: t('projects.chatbot'),
      description: t('projects.chatbot.description'),
      period: 'Apr 2025 – May 2025',
      institution: 'Personal Project',
      technologies: ['NLP', 'Dialogflow', 'Python', 'Natural Language Processing'],
      category: 'AI & Chatbots',
      featured: false,
      githubUrl: '#'
    },
    {
      id: 4,
      title: t('projects.lis'),
      description: t('projects.lis.description'),
      period: 'Nov 2024 – Jan 2025',
      institution: 'ENSA Marrakech',
      technologies: ['ESP32', 'IoT', 'Wireless Communication', 'Real-time Systems'],
      category: 'Embedded Systems',
      featured: true,
      githubUrl: '#'
    },
    {
      id: 5,
      title: t('projects.puzzle'),
      description: t('projects.puzzle.description'),
      period: 'Mar 2024 – Jun 2024',
      institution: 'ENSA Marrakech',
      technologies: ['Computer Vision', 'OpenCV', 'Python', 'Image Processing', 'AI'],
      category: 'Computer Vision',
      featured: false,
      githubUrl: '#'
    }
  ]

  const categories = ['All', 'Web Development & AI', 'AI & NLP', 'Embedded Systems', 'Computer Vision', 'AI & Chatbots']
  
  return (
    <section id="projects" className="section-padding">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('projects.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Innovative solutions spanning AI, web development, and embedded systems
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project) => (
              <div key={project.id} className="project-card p-6 hover-lift">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.period}</span>
                      </div>
                      {project.achievement && (
                        <div className="flex items-center space-x-1 text-warning">
                          <Award className="h-4 w-4" />
                          <span className="font-medium">{project.achievement}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" className="hover-glow">
                        <Github className="h-5 w-5" />
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button variant="ghost" size="icon" className="hover-glow">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center space-x-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span>{project.category}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border hover:border-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Institution */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Institution:</span> {project.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(project => !project.featured).map((project) => (
                <div key={project.id} className="project-card p-6 hover-lift">
                  
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-card-foreground flex-1 line-clamp-2">
                      {project.title}
                    </h4>
                    <div className="flex items-center space-x-2 ml-4">
                      {project.githubUrl && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover-glow">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Category and Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                    <span className="inline-flex items-center bg-secondary/20 text-secondary px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-card border rounded-lg p-6">
              <div>
                <h3 className="font-bold mb-2">Interested in my work?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out my GitHub for more projects and contributions
                </p>
                <Button className="gradient-primary text-white">
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
