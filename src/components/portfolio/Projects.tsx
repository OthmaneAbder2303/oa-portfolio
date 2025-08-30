import { ExternalLink, Github, Calendar, Award, Code, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

const Projects = () => {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<any>(null)
  
  const projects = [
    {
      id: 1,
      title: t('projects.smartroute'),
      description: t('projects.smartroute.description'),
      period: 'Mar 2025 – May 2025',
      institution: 'ENSA Marrakech',
      technologies: ['Spring Boot', 'Angular', 'Python', 'Machine Learning', 'Graph Algorithms', 'Weather API', 'Flask', 'PostgreSQL'],
      category: 'Web Development & Machine Learning',
      featured: true,
      githubUrl: 'https://github.com/OthmaneAbder2303/SmartRoute',
      demoUrl: '#',
      theme: 'smart-route',
      brandColors: {
        primary: '#FF8000',
        background: 'linear-gradient(135deg, rgba(255, 128, 0, 0.05) 0%, rgba(255, 128, 0, 0.02) 100%)',
        accent: 'rgba(255, 128, 0, 0.1)',
        border: 'rgba(255, 128, 0, 0.2)'
      },
      achievements: [
        'Implemented intelligent route optimization using machine learning algorithms',
        'Integrated real-time weather data for enhanced route planning',
        'Built full-stack application with modern tech stack',
        'Achieved 30% improvement in route efficiency'
      ]
    },
    {
      id: 2,
      title: t('projects.hackathon'),
      description: t('projects.hackathon.description'),
      period: 'May 2025',
      institution: 'UM6P - 1337',
      technologies: ['AI Agents', 'NLP', 'Speech Recognition', 'Generative AI', 'Web Search', 'Google Gemini'],
      category: 'AI & NLP',
      featured: true,
      achievement: '7th Place',
      githubUrl: 'https://github.com/zakariaayl/HackAi_ZHO_logs',
      demoUrl: '#',
      theme: 'ai-hackathon',
      brandColors: {
        primary: '#8F00FF',
        background: 'linear-gradient(135deg, rgba(143, 0, 255, 0.05) 0%, rgba(143, 0, 255, 0.02) 100%)',
        accent: 'rgba(143, 0, 255, 0.1)',
        border: 'rgba(143, 0, 255, 0.2)'
      },
      achievements: [
        'Secured 7th place out of 50+ teams in competitive hackathon',
        'Developed AI agents with advanced NLP capabilities',
        'Implemented speech recognition and generative AI features',
        'Collaborated effectively in high-pressure 48-hour sprint'
      ]
    },
    {
      id: 3,
      title: t('projects.chatbot'),
      description: t('projects.chatbot.description'),
      period: 'Apr 2025 – May 2025',
      institution: 'Personal Project',
      technologies: ['Python', 'NLP', 'Dialogflow', 'FastAPI'],
      category: 'AI & Chatbots',
      featured: false,
      githubUrl: 'https://github.com/OthmaneAbder2303/chatbot_food_business',
      theme: 'chatbot',
      brandColors: {
        primary: '#C44536',
        background: 'linear-gradient(135deg, rgba(196, 69, 54, 0.05) 0%, rgba(196, 69, 54, 0.02) 100%)',
        accent: 'rgba(196, 69, 54, 0.1)',
        border: 'rgba(196, 69, 54, 0.2)'
      },
      achievements: [
        'Built intelligent chatbot for food business automation',
        'Implemented natural language processing for order handling',
        'Integrated Dialogflow for conversational AI',
        'Deployed scalable FastAPI backend architecture'
      ]
    },
    {
      id: 4,
      title: t('projects.lis'),
      description: t('projects.lis.description'),
      period: 'Nov 2024 – Jan 2025',
      institution: 'ENSA Marrakech',
      technologies: ['Java', 'JavaFX', 'ESP32', 'Real-time Systems', 'MySQL'],
      category: 'Embedded Systems',
      featured: true,
      githubUrl: 'https://github.com/Elamghar/LIS',
      theme: 'embedded',
      brandColors: {
        primary: '#2196f3',
        background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(33, 150, 243, 0.02) 100%)',
        accent: 'rgba(33, 150, 243, 0.1)',
        border: 'rgba(33, 150, 243, 0.2)'
      },
      achievements: [
        'Developed comprehensive laboratory information system',
        'Integrated ESP32 microcontrollers for IoT functionality',
        'Built real-time data processing and monitoring system',
        'Created intuitive JavaFX user interface'
      ]
    },
    {
      id: 5,
      title: t('projects.puzzle'),
      description: t('projects.puzzle.description'),
      period: 'Mar 2024 – Jun 2024',
      institution: 'ENSA Marrakech',
      technologies: ['Computer Vision', 'OpenCV', 'Python', 'Image Processing', 'AI', 'Transformers'],
      category: 'Computer Vision',
      featured: false,
      githubUrl: 'https://github.com/NadaMaliki/puzzle-solver',
      theme: 'computer-vision',
      brandColors: {
        primary: '#9c27b0',
        background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.05) 0%, rgba(156, 39, 176, 0.02) 100%)',
        accent: 'rgba(156, 39, 176, 0.1)',
        border: 'rgba(156, 39, 176, 0.2)'
      },
      achievements: [
        'Implemented advanced computer vision algorithms for puzzle solving',
        'Utilized OpenCV for sophisticated image processing',
        'Applied transformer models for pattern recognition',
        'Achieved high accuracy in automated puzzle assembly'
      ]
    },
    {
      id: 6,
      title: t('projects.log_classification'),
      description: t('projects.log_classification.description'),
      period: 'May 2025 – Jun 2025',
      institution: 'Personal Project',
      technologies: ['Python', 'BERT', 'Groq LLM', 'Regex', 'NLP', 'FastAPI', 'Pandas'],
      category: 'AI & NLP',
      featured: true,
      githubUrl: 'https://github.com/OthmaneAbder2303/log_classification_system',
      demoUrl: '#',
      theme: 'log-classification',
      brandColors: {
        primary: '#efcf1a',
        background: 'linear-gradient(135deg, rgba(239, 207, 26, 0.05) 0%, rgba(239, 207, 26, 0.02) 100%)',
        accent: 'rgba(239, 207, 26, 0.1)',
        border: 'rgba(239, 207, 26, 0.2)'
      },
      achievements: [
        'Developed intelligent log classification system using BERT',
        'Integrated Groq LLM for advanced text analysis',
        'Implemented efficient regex patterns for log parsing',
        'Built scalable FastAPI service for production use'
      ]
    }
  ]

  const handleGithubClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleDemoClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="section-padding bg-surface-muted">
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

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card p-6 hover-lift relative overflow-hidden"
                style={{ 
                  background: project.brandColors.background,
                  borderLeft: `4px solid ${project.brandColors.primary}`
                }}
              >
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-card-foreground mb-1">
                            {project.title}
                          </h3>
                          <p className="font-semibold text-sm" style={{ color: project.brandColors.primary }}>
                            {project.institution}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          {project.githubUrl && (
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="hover-glow backdrop-blur-sm bg-white/10 h-8 w-8"
                              onClick={() => handleGithubClick(project.githubUrl)}
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="hover-glow backdrop-blur-sm bg-white/10 h-8 w-8"
                              onClick={() => handleDemoClick(project.demoUrl)}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                    {project.achievement && (
                      <div className="flex items-center space-x-2 text-warning">
                        <Award className="h-4 w-4" />
                        <span className="font-medium">{project.achievement}</span>
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div 
                    className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium mb-4"
                    style={{ backgroundColor: project.brandColors.accent, color: project.brandColors.primary }}
                  >
                    <span>{project.category}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: project.brandColors.primary }} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 6).map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: project.brandColors.accent, color: project.brandColors.primary }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: project.brandColors.accent, color: project.brandColors.primary }}>
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* See Details Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="w-full sm:w-auto text-sm sm:text-base hover:opacity-90"
                        style={{ borderColor: project.brandColors.primary, color: project.brandColors.primary }}
                        aria-label={`View details for ${project.title}`}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-[90vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3 text-base sm:text-lg">
                          <Code className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: project.brandColors.primary }} />
                          <span>{project.title}</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.period}</span>
                          </div>
                          <div>
                            <span className="font-medium">Institution:</span> {project.institution}
                          </div>
                        </div>
                        
                        <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: project.brandColors.accent, color: project.brandColors.primary }}>
                          <span>{project.category}</span>
                        </div>

                        <p className="text-sm sm:text-base text-muted-foreground">
                          {project.description}
                        </p>

                        <div>
                          <h4 className="font-semibold mb-2">All Achievements:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: project.brandColors.primary }} />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: project.brandColors.accent, color: project.brandColors.primary }}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2 pt-4">
                          {project.githubUrl && (
                            <Button onClick={() => handleGithubClick(project.githubUrl)} className="flex-1" style={{ backgroundColor: project.brandColors.primary, color: 'white' }}>
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button variant="outline" onClick={() => handleDemoClick(project.demoUrl)} className="flex-1" style={{ borderColor: project.brandColors.primary, color: project.brandColors.primary }}>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-card border rounded-lg p-6">
              <div>
                <h3 className="font-bold mb-2">Interested in my work?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out my GitHub for more projects and contributions
                </p>
                <Button className="gradient-primary text-white" onClick={() => window.open('https://github.com/OthmaneAbder2303', '_blank', 'noopener,noreferrer')}>
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