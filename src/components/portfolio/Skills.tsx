import { useLanguage } from '@/contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.languages'),
      icon: '💻',
      skills: [
        { name: 'Java', level: 90, logo: '☕' },
        { name: 'Python', level: 95, logo: '🐍' },
        { name: 'TypeScript', level: 85, logo: '📘' },
        { name: 'C/C++', level: 80, logo: '⚡' },
        { name: 'SQL', level: 85, logo: '🗃️' },
        { name: 'JavaScript', level: 88, logo: '🟨' }
      ]
    },
    {
      title: t('skills.frameworks'),
      icon: '🚀',
      skills: [
        { name: 'Spring Boot', level: 85, logo: '🍃' },
        { name: 'React', level: 90, logo: '⚛️' },
        { name: 'Angular', level: 80, logo: '🔺' },
        { name: 'Flask', level: 85, logo: '🌶️' },
        { name: 'FastAPI', level: 80, logo: '⚡' },
        { name: 'Jakarta EE', level: 75, logo: '☕' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow', level: 85, logo: '🧠' },
        { name: 'Scikit-learn', level: 90, logo: '📊' },
        { name: 'OpenCV', level: 85, logo: '👁️' },
        { name: 'Dialogflow', level: 80, logo: '💬' },
        { name: 'NLP', level: 88, logo: '🗣️' },
        { name: 'Computer Vision', level: 85, logo: '📸' }
      ]
    },
    {
      title: t('skills.databases'),
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 90, logo: '🐬' },
        { name: 'PostgreSQL', level: 85, logo: '🐘' },
        { name: 'MongoDB', level: 80, logo: '🍃' },
        { name: 'Redis', level: 75, logo: '🔴' }
      ]
    },
    {
      title: t('skills.tools'),
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95, logo: '📝' },
        { name: 'Docker', level: 80, logo: '🐳' },
        { name: 'ESP32', level: 85, logo: '📡' },
        { name: 'Linux', level: 85, logo: '🐧' },
        { name: 'AWS', level: 75, logo: '☁️' },
        { name: 'Figma', level: 70, logo: '🎨' }
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
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.logo}</span>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground mt-1 block text-right">
                          {skill.level}%
                        </span>
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