import { Brain, Layers, Cloud, Wrench, Server } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useRef, useEffect } from 'react'

const Skills = () => {
  const { t } = useLanguage()
  const scrollRefs = useRef([])
  
  const skillCategories = [
    {
      title: 'Data Science & AI',
      icon: Brain,
      description: 'Machine Learning, Deep Learning & Data Analysis',
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
        { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
        { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
        { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
        { name: 'Weights & Biases', logo: 'https://cdn.simpleicons.org/weightsandbiases' },
        { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
        { name: 'Seaborn', logo: 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg' },
        { name: 'Kaggle', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png' }
      ]
    },
    {
      title: 'Full Stack Development',
      icon: Layers,
      description: 'Frontend + Backend = Complete Applications',
      skills: [

        // Backend
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
        
        // Databases & APIs
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },

        // Frontend
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      description: 'Deployment, CI/CD & Infrastructure',
      skills: [
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
        { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
        { name: 'Render', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg' },
        { name: 'Aiven', logo: 'https://cdn.worldvectorlogo.com/logos/aiven-1.svg' },
      ]
    },
    {
      title: 'Tools & Environments',
      icon: Wrench,
      description: 'Development Tools & Platforms',
      skills: [
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'IntelliJ', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
        { name: 'PyCharm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg' },
        { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
        { name: 'Jira', logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
        { name: 'Anaconda', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg' },
        { name: 'Colab', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg' },
        { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
        { name: 'Overleaf/LaTeX', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg' }
      ]
    }
  ]

  // Dupliquer les skills pour le carrousel infini
  const duplicatedCategories = skillCategories.map(category => ({
    ...category,
    skills: [...category.skills, ...category.skills, ...category.skills]
  }))

  // Animation de défilement automatique
  useEffect(() => {
    const intervals = []
    
    duplicatedCategories.forEach((_, index) => {
      const interval = setInterval(() => {
        if (scrollRefs.current[index]) {
          const scrollContainer = scrollRefs.current[index]
          const scrollWidth = scrollContainer.scrollWidth / 3
          const currentScroll = scrollContainer.scrollLeft
          
          scrollContainer.scrollLeft = currentScroll + 1
          
          if (currentScroll >= scrollWidth * 2) {
            scrollContainer.scrollLeft = 0
          }
        }
      }, 30)
      
      intervals.push(interval)
    })
    
    return () => intervals.forEach(clearInterval)
  }, [])


  return (
    <section id="skills" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('skills.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Data Science & Full Stack Development - From AI Models to Production Applications
            </p>
          </div>

          {/* Carrousel des Skills */}
          <div className="space-y-12 mb-16">
            {duplicatedCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                {/* Header de catégorie */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Carrousel */}
                <div className="relative">
                  <div 
                    ref={el => scrollRefs.current[categoryIndex] = el}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide py-6 px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex-shrink-0 w-32 h-32 bg-gradient-primary border border-primary dark:border-gray-700 rounded-xl 
                                transition-all duration-300 flex flex-col items-center justify-center p-4
                                hover:border-primary hover:-translate-y-1 
                                hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)] dark:hover:shadow-primary/5">                   
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-12 h-12 object-contain mb-3"
                          onError={(e) => { 
                            e.currentTarget.src = `https://via.placeholder.com/48/4F46E5/FFFFFF?text=${skill.name.charAt(0)}`;
                          }}
                        />
                        <span className="font-medium text-sm text-center text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}

export default Skills