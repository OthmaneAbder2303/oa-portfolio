import { ExternalLink, Github, Calendar, Award, Code, Eye, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

import smartrouteDiagram from '@/assets/projects/info_itin.jpg'
import hackathonDiagram from '@/assets/projects/lm9dem-platform.png'
import ebankingDiagram from '@/assets/projects/client-chatbot.jpg'
import chatbotDiagram from '@/assets/projects/chatfood-business.png'
import lisDiagram from '@/assets/projects/medfile.jpg'
import puzzleDiagram from '@/assets/projects/puzzle-game.png'
import logClassificationDiagram from '@/assets/projects/log_class-docker.png'

const Projects = () => {
  const { t } = useLanguage()
  const [imageLoaded, setImageLoaded] = useState<{[key: number]: boolean}>({})
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({})
  
  const projects = [
    {
      id: 1,
      title: t('projects.smartroute'),
      description: t('projects.smartroute.description'),
      period: t('projects.smartroute.period'),
      institution: 'ENSA Marrakech',
      technologies: ['Spring Boot', 'Angular', 'Python', 'Machine Learning', 'Graph Algorithms', 'XgBoost', 'Random Forest', 'Weather API', 'Flask', 'PostgreSQL'],
      category: t('projects.category.webMl'),
      featured: true,
      githubUrl: 'https://github.com/OthmaneAbder2303/SmartRoute',
      demoUrl: '#',
      imageSrc: smartrouteDiagram,
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
      period: t('projects.hackathon.period'),
      institution: 'UM6P - 1337',
      technologies: ['AI Agents', 'NLP', 'Speech Recognition', 'Generative AI', 'Web Search', 'Google Gemini'],
      category: t('projects.category.aiNlp'),
      featured: true,
      achievement: t('projects.hackathon.rank'),
      githubUrl: 'https://github.com/zakariaayl/HackAi_ZHO_logs',
      demoUrl: '#',
      imageSrc: hackathonDiagram,
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
      title: t('projects.banking.title'),
      description: t('projects.banking.description'),
      period: t('projects.banking.period'),
      institution: 'ENSA Marrakech',
      technologies: ['JEE', 'Spring', 'Angular', 'REST API', 'PostgreSQL', 'Dialogflow'],
      category: t('projects.category.web'),
      featured: true,
      githubUrl: 'https://github.com/Elamghar/e-banking.git',
      imageSrc: ebankingDiagram,
      theme: 'banking-app',
      brandColors: {
        primary: '#3a41caff',
        background: 'linear-gradient(135deg, rgba(0, 51, 102, 0.05) 0%, rgba(128, 128, 128, 0.02) 100%)',
        accent: 'rgba(0, 51, 102, 0.1)',
        border: 'rgba(128, 128, 128, 0.2)'
      },
      achievements: [
        'Implemented customer and account management with CRUD operations',
        'Enabled viewing accounts and transaction history',
        'Developed secure financial transactions using JWT authentication',
        'Designed a modular architecture with RESTful services'
      ]
    },
    {
      id: 4,
      title: t('projects.log.title'),
      description: t('projects.log_classification.description'),
      period: t('projects.log.period'),
      institution: t('projects.personal'),
      // Added Docker and Sentence-Transformers to technologies
      technologies: ['Python', 'BERT', 'Groq LLM', 'FastAPI', 'Docker', 'NLP', 'Regex'],
      category: t('projects.category.aiNlp'),
      featured: true,
      githubUrl: 'https://github.com/OthmaneAbder2303/log_classification_system',
      demoUrl: '#',
      imageSrc: logClassificationDiagram,
      theme: 'log-classification',
      brandColors: {
        primary: '#efcf1a',
        background: 'linear-gradient(135deg, rgba(239, 207, 26, 0.05) 0%, rgba(239, 207, 26, 0.02) 100%)',
        accent: 'rgba(239, 207, 26, 0.1)',
        border: 'rgba(239, 207, 26, 0.2)'
      },
      achievements: [
        'Engineered a 3-tier hybrid escalation pipeline (Regex, BERT, LLM) achieving 98% classification accuracy.',
        'Integrated Groq LPU™ for ultra-low latency inference using Llama 3 & DeepSeek models.',
        'Developed source-aware classification logic to adapt processing based on log origin.',
        'Containerized the entire ecosystem with Docker for seamless production-ready deployment.'
      ]
    },
    {
      id: 5,
      title: t('projects.chatbot'),
      description: t('projects.chatbot.description'),
      period: t('projects.chatbot.period'),
      institution: t('projects.personal'),
      technologies: ['Python', 'NLP', 'Dialogflow', 'FastAPI'],
      category: t('projects.category.aiChatbots'),
      featured: false,
      githubUrl: 'https://github.com/OthmaneAbder2303/chatbot_food_business',
      imageSrc: chatbotDiagram,
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
      id: 6,
      title: t('projects.puzzle'),
      description: t('projects.puzzle.description'),
      period: t('projects.puzzle.period'),
      institution: 'ENSA Marrakech',
      technologies: ['Computer Vision', 'OpenCV', 'Python', 'Image Processing', 'AI', 'Transformers'],
      category: t('projects.category.computerVision'),
      featured: false,
      githubUrl: 'https://github.com/NadaMaliki/puzzle-solver',
      imageSrc: puzzleDiagram,
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
      id: 7,
      title: t('projects.lis'),
      description: t('projects.lis.description'),
      period: t('projects.lis.period'),
      institution: 'ENSA Marrakech',
      technologies: ['Java', 'JavaFX', 'ESP32', 'Real-time Systems', 'MySQL'],
      category: t('projects.category.web'),
      featured: true,
      githubUrl: 'https://github.com/Elamghar/LIS',
      imageSrc: lisDiagram,
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

  const handleImageLoad = (projectId: number) => {
    setImageLoaded(prev => ({ ...prev, [projectId]: true }))
  }

  const handleImageError = (projectId: number) => {
    setImageError(prev => ({ ...prev, [projectId]: true }))
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
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,19rem),1fr))] gap-5 md:gap-7 mb-12">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card p-6 hover-lift relative overflow-hidden group"
                style={{ borderLeft: '4px solid hsl(var(--primary))' }}
              >
                <div className="relative z-10">
                  {/* Project Image Preview */}
                  {project.imageSrc && (
                    <div className="mb-6 rounded-lg overflow-hidden relative bg-black/5">
                      {!imageLoaded[project.id] && !imageError[project.id] && (
                        <div className="w-full h-48 flex items-center justify-center bg-primary/5">
                          <div className="animate-pulse flex flex-col items-center space-y-2">
                            <ImageIcon className="h-8 w-8 text-primary" />
                            <span className="text-sm text-primary">{t('projects.loading')}</span>
                          </div>
                        </div>
                      )}
                      {imageError[project.id] ? (
                        <div className="w-full h-48 flex items-center justify-center bg-primary/5">
                          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
                            <ImageIcon className="h-8 w-8" />
                            <span className="text-sm">{t('projects.preview')}</span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={project.imageSrc}
                          alt={`${project.title} workflow diagram`}
                          className={`w-full h-48 object-cover transition-all duration-700 ease-out ${
                            imageLoaded[project.id] 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-95'
                          } group-hover:scale-105`}
                          onLoad={() => handleImageLoad(project.id)}
                          onError={() => handleImageError(project.id)}
                          loading="lazy"
                        />
                      )}
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-card-foreground mb-1">
                            {project.title}
                          </h3>
                          <p className="font-semibold text-sm text-primary">
                            {project.institution}
                          </p>
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
                  </div>

                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                    <span>{project.category}</span>
                  </div>

                  {/* Description - GARDÉ ICI */}
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies - GARDÉ ICI */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-xs rounded-full font-medium bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* See Details Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full text-sm border-primary/50 text-primary hover:bg-primary/5"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {t('projects.viewDetails')}
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="w-full max-w-[90vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3 text-base sm:text-lg">
                          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                          <span>{project.title}</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {project.imageSrc && !imageError[project.id] && (
                          <div className="rounded-lg overflow-hidden border-2 border-primary/20">
                            <img src={project.imageSrc} alt={project.title} className="w-full h-auto object-contain max-h-96" />
                          </div>
                        )}

                        {/* Achievements - AFFICHÉS UNIQUEMENT ICI */}
                        <div>
                          <h4 className="font-semibold mb-2">{t('projects.achievements')}</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-primary" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">{t('projects.techStack')}</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="px-3 py-1 text-xs rounded-full font-medium bg-primary/10 text-primary">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2 pt-4">
                          {project.githubUrl && (
                            <Button onClick={() => handleGithubClick(project.githubUrl)} className="flex-1 gradient-primary text-primary-foreground">
                              <Github className="h-4 w-4 mr-2" />
                              {t('projects.viewCode')}
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
                <h3 className="font-bold mb-2">{t('projects.cta.title')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('projects.cta.description')}
                </p>
                <Button className="gradient-primary text-white" onClick={() => window.open('https://github.com/OthmaneAbder2303', '_blank', 'noopener,noreferrer')}>
                  <Github className="h-4 w-4 mr-2" />
                  {t('projects.cta.button')}
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
