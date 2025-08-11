
import { useLanguage } from '@/contexts/LanguageContext'

// Import logos
import pythonLogo from '@/assets/logos/tech/python.png'
import reactLogo from '@/assets/logos/tech/react.svg'
import tensorflowLogo from '@/assets/logos/tech/tensorflow.svg'
import dockerLogo from '@/assets/logos/tech/docker.png'
import mysqlLogo from '@/assets/logos/tech/mysql.svg'
import postgresqlLogo from '@/assets/logos/tech/postgresql.svg'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.languages'),
      icon: '💻',
      skills: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', logo: pythonLogo },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      title: t('skills.frameworks'),
      icon: '🚀',
      skills: [
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'React', logo: reactLogo },
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Jakarta EE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow', logo: tensorflowLogo },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
        { name: 'Dialogflow', logo: 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.min.css' },
        { name: 'NLP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Computer Vision', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' }
      ]
    },
    {
      title: t('skills.databases'),
      icon: '🗄️',
      skills: [
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'PostgreSQL', logo: postgresqlLogo },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
      ]
    },
    {
      title: t('skills.tools'),
      icon: '🛠️',
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', logo: dockerLogo },
        { name: 'ESP32', logo: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/_static/espressif-logo.svg' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
      ]
    }
  ]

  const languages = [
    { name: 'Arabic', level: 100, flag: '🇲🇦', proficiency: 'Native' },
    { name: 'French', level: 95, flag: '🇫🇷', proficiency: 'Fluent' },
    { name: 'English', level: 90, flag: '🇺🇸', proficiency: 'Fluent' }
  ]

  return (
    <section id="skills" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('skills.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for modern software development and AI applications
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="project-card p-6 hover-lift">
                
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-card">
                      
                      {/* Skill Header */}
                      <div className="flex items-center justify-center mb-3 flex-col space-y-2">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="font-medium text-sm text-center">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Language Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Language Proficiency</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {languages.map((lang, index) => (
                <div key={index} className="project-card p-6 text-center hover-lift">
                  <div className="text-4xl mb-4">{lang.flag}</div>
                  <h4 className="font-bold text-lg mb-2">{lang.name}</h4>
                  <p className="text-primary font-semibold mb-4">{lang.proficiency}</p>
                  
                  {/* Circular Progress */}
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        strokeDashoffset={`${2 * Math.PI * 45 * (1 - lang.level / 100)}`}
                        className="text-primary transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold">{lang.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="project-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="project-card p-6">
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Frameworks</div>
            </div>
            <div className="project-card p-6">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="project-card p-6">
              <div className="text-3xl font-bold text-emerald mb-2">3</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
