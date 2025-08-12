
import { Mail, MapPin, Github, Linkedin, ExternalLink, Send, Phone, Zap, Globe, Clock, CheckCircle, Globe2, Clock3, BadgeCheck, Rocket   } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

// Import logos
import leetcodeLogo from '@/assets/logos/platforms/leetcode.png'
import hackerrankLogo from '@/assets/logos/platforms/hackerrank.png'
import githubLogo from '@/assets/logos/platforms/github.png'

const Contact = () => {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'othmane232004@gmail.com',
      href: 'mailto:othmane232004@gmail.com',
      color: 'text-primary',
      bgColor: 'bg-primary/20'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Calais, France',
      href: '#',
      color: 'text-secondary',
      bgColor: 'bg-secondary/20'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/oa23',
      href: 'https://www.linkedin.com/in/oa23/',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/20',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'github.com/OthmaneAbder2303',
      href: 'https://github.com/OthmaneAbder2303',
      color: 'text-gray-700 dark:text-gray-300',
      bgColor: 'bg-pink-700/20',
      logo: githubLogo
    },
    {
      icon: ExternalLink,
      label: t('contact.leetcode'),
      value: 'leetcode.com/u/othmane232004',
      href: 'https://leetcode.com/u/othmane232004/',
      color: 'text-orange-600',
      bgColor: 'bg-orange-600/20',
      logo: leetcodeLogo
    },
    {
      icon: ExternalLink,
      label: t('contact.hackerrank'),
      value: 'hackerrank.com/profile/othmane232004',
      href: 'https://www.hackerrank.com/profile/othmane232004',
      color: 'text-green-600',
      bgColor: 'bg-green-600/20',
      logo: hackerrankLogo
    }
  ]


const quickStats = [
  { label: 'Response Time', value: '< 24h', icon: Rocket },
  { label: 'Languages', value: '3', icon: Globe2 },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock3 },
  { label: 'Available', value: 'Yes', icon: BadgeCheck }
];

  return (
    <section id="contact" className="section-padding">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 rounded-lg border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <div className={`w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center`}>
                      <contact.icon className={`h-6 w-6 ${contact.color}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {contact.label}
                      </div>
                      <div className="text-muted-foreground">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {quickStats.map((stat, index) => (
                  <div key={index} className="project-card p-4 text-center">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Available for */}
              <div className="project-card p-6 bg-gradient-card">
                <h4 className="font-bold mb-4">Available for:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span>Full-time opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span>Internship programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span>Freelance projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span>Collaboration opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links & Quick Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Find Me Online</h3>
              
              {/* Social Links Grid */}
              <div className="space-y-6 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <div className={`w-12 h-12 ${social.bgColor} rounded-lg flex items-center justify-center`}>
                      <img 
                        src={social.logo} 
                        alt={social.label}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex';
                        }}
                      />
                      <social.icon className={`h-6 w-6 ${social.color} hidden`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </div>
                      <div className="text-muted-foreground text-sm">{social.value}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              {/* Quick Contact Card */}
              <div className="project-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Ready to Connect?</h4>
                <p className="text-muted-foreground mb-6 text-sm">
                  Send me an email and let's discuss how we can work together on exciting projects.
                </p>
                <Button 
                  className="gradient-primary text-white w-full"
                  onClick={() => window.open('mailto:othmane232004@gmail.com', '_blank')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2025 Othmane Abderrazik. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
