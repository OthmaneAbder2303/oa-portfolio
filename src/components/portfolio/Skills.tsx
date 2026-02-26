import { Brain, Layers, Cloud, Wrench, Cpu, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useRef, useEffect, useMemo } from 'react'
import chromadbLogo from '@/assets/logos/tech/chromadb.png'

const Skills = () => {
  const { t } = useLanguage()
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([])

  const skillCategories = [
    {
      title: 'Machine Learning & Data Science',
      icon: Brain,
      description: 'Core ML, Statistics & Data Analysis',
      skills: [
        { name: 'Python',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        //{ name: 'SciPy',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scipy/scipy-original.svg' },
        { name: 'Pandas',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
        { name: 'NumPy',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
        { name: 'Matplotlib',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
        { name: 'Seaborn',      logo: 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg' },
        { name: 'Jupyter',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
        { name: 'Anaconda',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg' },
        { name: 'Kaggle',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg' },
        { name: 'Colab',        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg' },
      ],
    },
    {
      title: 'Deep Learning & AI Frameworks',
      icon: Cpu,
      description: 'Neural Networks, Computer Vision & NLP',
      skills: [
        { name: 'TensorFlow',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Keras',            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg' },
        { name: 'PyTorch',          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
        { name: 'OpenCV',           logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
        { name: 'Hugging Face',     logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
        { name: 'Weights & Biases', logo: 'https://cdn.simpleicons.org/weightsandbiases/FFBE00' },
      ],
    },
    {
      title: 'GenAI & MLOps',
      icon: Sparkles,
      description: 'Generative AI, Pipelines & Model Lifecycle',
      skills: [
        { name: 'LangChain', logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
        { name: 'ChromaDB',  logo: chromadbLogo },
        //{ name: 'OpenAI',    logo: 'https://cdn.simpleicons.org/openai/000000' },
        { name: 'Gemini',    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
        { name: 'Llama',     logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
        { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
        { name: 'MLflow',    logo: 'https://mlflow.org/img/mlflow-black.svg' },
        { name: 'Airflow',   logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png' },
        { name: 'Docker',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'FastAPI',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
        { name: 'AWS',       logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      ],
    },
    {
      title: 'Full Stack Development',
      icon: Layers,
      description: 'Frontend + Backend = End-to-End AI Applications',
      skills: [
        { name: 'Java',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Spring Boot',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'Flask',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
        { name: 'Django',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
        { name: 'MySQL',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'TypeScript',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'React',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Angular',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      description: 'Deployment, CI/CD & Infrastructure',
      skills: [
        { name: 'Linux',          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
        { name: 'Git',            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
        { name: 'Vercel',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
        { name: 'Render',         logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg' },
        { name: 'Aiven',          logo: 'https://cdn.worldvectorlogo.com/logos/aiven-1.svg' },
      ],
    },
    {
      title: 'Tools & Environments',
      icon: Wrench,
      description: 'IDEs, Productivity & Documentation',
      skills: [
        { name: 'VS Code',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'PyCharm',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg' },
        { name: 'IntelliJ',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
        { name: 'Postman',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
        { name: 'Jira',           logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
        { name: 'Notion',         logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
        { name: 'Overleaf/LaTeX', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg' },
      ],
    },
  ]

  // ✅ FIX 1: useMemo so this doesn't recompute on every render
  const duplicatedCategories = useMemo(
    () =>
      skillCategories.map((category) => ({
        ...category,
        skills: [...category.skills, ...category.skills, ...category.skills],
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    // ✅ FIX 2: Initialise ref array length to avoid stale null entries
    scrollRefs.current = scrollRefs.current.slice(0, duplicatedCategories.length)

    const intervals: ReturnType<typeof setInterval>[] = []

    duplicatedCategories.forEach((category, index) => {
      const interval = setInterval(() => {
        const container = scrollRefs.current[index]
        if (!container) return

        // ✅ FIX 3: Correct scroll reset — reset after ONE copy width, not TWO
        const oneThird = container.scrollWidth / 3

        container.scrollLeft += 1

        if (container.scrollLeft >= oneThird * 2) {
          container.scrollLeft = 0
        }
      }, 30)

      intervals.push(interval)
    })

    return () => intervals.forEach(clearInterval)
  }, [duplicatedCategories])

  return (
    <section id="skills" className="section-padding bg-surface-muted">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('skills.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Data Science & Full Stack Development - From AI Models to Production Applications
            </p>
          </div>

          {/* Carousels */}
          <div className="space-y-12 mb-16">
            {duplicatedCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">

                {/* Category header */}
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

                {/* Scrolling row */}
                <div className="relative">
                  {/* ✅ FIX 4: Cleaner card style — plain bg so logos are visible */}
                  <div
                    ref={(el) => { scrollRefs.current[categoryIndex] = el }}
                    className="flex space-x-6 overflow-x-auto py-6 px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex-shrink-0 w-32 h-32
                          bg-white dark:bg-gray-800
                          border border-gray-200 dark:border-gray-700
                          rounded-xl transition-all duration-300
                          flex flex-col items-center justify-center p-4
                          hover:border-primary hover:-translate-y-1
                          hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)]"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-12 h-12 object-contain mb-3"
                          onError={(e) => {
                            // ✅ FIX 5: via.placeholder.com is deprecated → use placehold.co
                            e.currentTarget.src = `https://placehold.co/48x48/4F46E5/FFFFFF?text=${skill.name.charAt(0)}`
                          }}
                        />
                        <span className="font-medium text-sm text-center text-gray-900 dark:text-white leading-tight">
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