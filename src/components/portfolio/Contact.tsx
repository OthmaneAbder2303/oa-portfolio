import { Mail, MapPin, Github, Linkedin, ExternalLink, Send, Rocket, Globe2, Clock3, BadgeCheck } from 'lucide-react'
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
      bgColor: 'bg-orange-200 dark:bg-orange-900',
      textColor: 'text-orange-800 dark:text-orange-200'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      href: '#',
      bgColor: 'bg-blue-200 dark:bg-blue-900',
      textColor: 'text-blue-800 dark:text-blue-200'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/oa23',
      href: 'https://www.linkedin.com/in/oa23/',
      bgColor: 'bg-blue-600/20 dark:bg-blue-600/30',
      textColor: 'text-blue-600 dark:text-blue-300',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'github.com/OthmaneAbder2303',
      href: 'https://github.com/OthmaneAbder2303',
      bgColor: 'bg-gray-700/20 dark:bg-gray-700/30',
      textColor: 'text-gray-700 dark:text-gray-300',
      logo: githubLogo
    },
    {
      icon: ExternalLink,
      label: t('contact.leetcode'),
      value: 'leetcode.com/u/othmane232004',
      href: 'https://leetcode.com/u/othmane232004/',
      bgColor: 'bg-orange-600/20 dark:bg-orange-600/30',
      textColor: 'text-orange-600 dark:text-orange-300',
      logo: leetcodeLogo
    },
    {
      icon: ExternalLink,
      label: t('contact.hackerrank'),
      value: 'hackerrank.com/profile/othmane232004',
      href: 'https://www.hackerrank.com/profile/othmane232004',
      bgColor: 'bg-green-600/20 dark:bg-green-600/30',
      textColor: 'text-green-600 dark:text-green-300',
      logo: hackerrankLogo
    }
  ]

  const quickStats = [
    { label: t('contact.responseTime'), value: '< 24h', icon: Rocket },
    { label: t('contact.languages'), value: '3', icon: Globe2 },
    { label: t('contact.timeZone'), value: 'GMT+2', icon: Clock3 },
    { label: t('contact.available'), value: t('contact.yes'), icon: BadgeCheck }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t('contact.connect')}</h3>

              {/* Contact Methods */}
              <div className="space-y-3 mb-5">
                {contactInfo.map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg border hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group ${contact.bgColor}`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${contact.bgColor}`}>
                      <contact.icon className={`h-4 w-4 ${contact.textColor}`} />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm text-card-foreground group-hover:text-primary transition-colors ${contact.textColor}`}>
                        {contact.label}
                      </div>
                      <div className="text-muted-foreground text-sm">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="project-card p-2.5 text-center">
                    <stat.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <div className="font-bold text-card-foreground text-sm">{stat.value}</div>
                    <div className="text-[10px] leading-tight text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Available for */}
              <div className="project-card p-4">
                <h4 className="font-bold text-sm mb-2">{t('contact.availableFor')}</h4>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{t('contact.fullTime')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{t('contact.internship')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{t('contact.freelance')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{t('contact.collaboration')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links & Quick Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t('contact.findOnline')}</h3>

              {/* Social Links Grid */}
              <div className="space-y-3 mb-5">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg border hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group ${social.bgColor}`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${social.bgColor}`}>
                      <img 
                        src={social.logo} 
                        alt={social.label}
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex';
                        }}
                      />
                      <social.icon className={`h-4 w-4 ${social.textColor} hidden`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold text-sm text-card-foreground group-hover:text-primary transition-colors ${social.textColor}`}>
                        {social.label}
                      </div>
                      <div className="text-muted-foreground text-xs">{social.value}</div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              {/* Quick Contact Card */}
              <div className="project-card p-4 text-center">
                <div className="w-12 h-6 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold text-sm text-card-foreground mb-1.5">{t('contact.ready')}</h4>
                <p className="text-muted-foreground mb-4 text-xs">
                  {t('contact.readyDescription')}
                </p>
                <Button 
                  size="sm"
                  className="gradient-primary text-white w-full"
                  onClick={() => window.open('mailto:othmane232004@gmail.com', '_blank')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {t('contact.sendEmail')}
                </Button>
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <div className="text-center mt-10 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Othmane Abderrazik. {t('contact.footer')}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
