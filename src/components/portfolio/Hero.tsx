import { useState, useEffect } from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

import profilePicture from '@/assets/profile_picture.jpeg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { t } = useLanguage();

  const roles = [
    'Computer Science Student',
    'Full-Stack Developer',
    'AI & NLP Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2600); // Légèrement plus rapide

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-50 flex items-center justify-center"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/10" />

      {/* Glow Effects */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-[26rem] h-[26rem] bg-teal-500/20 rounded-full blur-3xl"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">

          {/* Photo de profil - plus petite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-6"
          >
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
              <img
                src={profilePicture}
                alt="Othmane Abder"
                className="w-full h-full rounded-full object-cover shadow-2xl shadow-emerald-500/40 border-[5px] border-background"
              />
              <div className="absolute inset-0 rounded-full border-4 border-emerald-500/30 animate-ping" />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground mb-2"
          >
            {t('hero.greeting')} 👋
          </motion.p>

          {/* Nom - légèrement réduit */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
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
                className="text-2xl md:text-4xl font-bold text-emerald-500"
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
            className="max-w-xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
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
              className="group px-8 py-6 text-base rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 active:scale-95 transition-all duration-300 shadow-lg shadow-emerald-500/30"
            >
              {t('hero.viewWork')}
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-6 text-base rounded-2xl border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300"
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
            className="flex justify-center items-center gap-7"
          >
            <a
              href="https://github.com/OthmaneAbder2303"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 hover:text-emerald-500 transition-all duration-300"
            >
              <Github className="w-7 h-7" />
            </a>

            <a
              href="https://www.linkedin.com/in/oa23/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-300"
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
              className="hover:scale-125 transition-all duration-300"
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
              className="hover:scale-125 transition-all duration-300"
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