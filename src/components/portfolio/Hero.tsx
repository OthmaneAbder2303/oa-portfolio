import { useState, useEffect } from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// import profilePicture from '@/assets/profile_picture.jpeg';
import profilePicture from '@/assets/pdp_othmane_sans_background.png';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { t } = useLanguage();

  const roles = [
    t('hero.role.student'),
    t('hero.role.developer'),
    t('hero.role.enthusiast'),
    t('hero.role.solver')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2600); // Légèrement plus rapide

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-20 flex items-center justify-center"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-wash" />

      {/* Glow Effects */}
      <motion.div
        animate={{ x: [0, 34, 0], y: [0, -22, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-[8%] w-72 h-72 bg-primary/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -34, 0], y: [0, 28, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-[8%] w-[26rem] h-[26rem] bg-emerald/15 rounded-full blur-3xl"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.38] hero-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">

          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
            className="relative mb-7"
          >
            <div className="relative mx-auto w-40 h-46 md:w-52 md:h-60 hero-portrait">
              <img
                src={profilePicture}
                alt="Othmane Abder"
                className="w-full h-full object-cover drop-shadow-2xl"
              />

              <div className="absolute inset-2 rounded-full border border-primary/30 pointer-events-none" />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-primary mb-4"
          >
            {t('hero.greeting')} 👋
          </motion.p>

          {/* Nom - légèrement réduit */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.055em] mb-5"
          >
            <span className="gradient-text">
              {t('hero.name')}
            </span>
          </motion.h1>

          {/* Rôles */}
          <div className="h-16 md:h-20 flex justify-center items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl font-semibold text-foreground"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description - plus courte */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-9"
          >
            {t('hero.description')}
          </motion.p>

          {/* Boutons - plus compacts */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group px-7 py-6 text-base rounded-xl gradient-primary text-primary-foreground hover:brightness-105 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20"
            >
              {t('hero.viewWork')}
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="px-7 py-6 text-base rounded-xl border-primary/25 bg-background/40 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
            >
              {t('hero.contact')}
              <Mail className="ml-2" />
            </Button>
          </motion.div>

          {/* Liens sociaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center items-center gap-3"
          >
            <a
              href="https://github.com/OthmaneAbder2303"
              target="_blank"
              rel="noopener noreferrer"
              className="social-orb"
            >
              <Github className="w-7 h-7" />
            </a>

            <a
              href="https://www.linkedin.com/in/oa23/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-orb"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-7 h-7"
              />
            </a>

            <a
              href="https://leetcode.com/u/othmane232004/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-orb"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg"
                alt="LeetCode"
                className="w-7 h-7"
              />
            </a>

            <a
              href="https://huggingface.co/OthmaneAbder2303"
              target="_blank"
              rel="noopener noreferrer"
              className="social-orb"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg"
                alt="Hugging Face"
                className="w-7 h-7"
                
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-emerald-500/60" />
      </motion.div>
    </section>
  );
};

export default Hero;
