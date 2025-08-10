import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'fr' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education', 
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.awards': 'Awards',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Othmane Abderrazik',
    'hero.title': 'Computer Engineering Student',
    'hero.description': 'CompEng student stoked about building full-stack apps & digging into AI + NLP. Always hyped to explore the latest tech buzz!',
    'hero.viewWork': 'View My Work',
    'hero.contact': 'Get In Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'Passionate Computer Engineering student at EILCO & ENSA Marrakech, specializing in AI, embedded systems, and full-stack development.',
    
    // Education Section
    'education.title': 'Educational Journey',
    'education.eilco': 'École d\'Ingénieurs du Littoral Côte d\'Opale (EILCO)',
    'education.eilco.degree': 'Engineering Degree, Computer Engineering',
    'education.eilco.location': 'Calais, France',
    'education.ensa': 'National School of Applied Sciences (ENSA)',
    'education.ensa.degree': 'Engineering Degree, Computer Engineering',
    'education.ensa.location': 'Marrakech, Morocco',
    'education.prep': 'Integrated Preparatory Cycle',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.dell': 'Observation Internship – DELL Technologies',
    'experience.dell.description': 'Collaborated with sales and technical teams on process digitalization.',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.smartroute': 'SmartRoute – Intelligent Transport Planning Platform',
    'projects.smartroute.description': 'Web application for optimized route planning based on traffic and weather with graph algorithms and ML models.',
    'projects.hackathon': 'Smart Bureaucracy Assistant (Hackathon HackAI)',
    'projects.hackathon.description': 'Conversational assistant in Darija to simplify access to administrative information in Morocco.',
    'projects.chatbot': 'Moroccan Food Chatbot',
    'projects.chatbot.description': 'Chatbot to take orders for Moroccan dishes via written messages using NLP.',
    'projects.lis': 'Laboratory Information System (LIS)',
    'projects.lis.description': 'Laboratory management system with wireless communication via ESP32.',
    'projects.puzzle': 'AI-Powered Image Puzzle Solver',
    'projects.puzzle.description': 'Intelligent system capable of automatically reconstructing images from unordered fragments.',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.languages': 'Programming Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.databases': 'Databases',
    'skills.tools': 'Tools & Technologies',
    
    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.ml': 'Machine Learning Specialization',
    'certifications.python': 'Python for Data Science, AI and Development',
    'certifications.algorithms': 'Algorithms for Searching, Sorting, and Indexing',
    
    // Awards Section
    'awards.title': 'Awards & Honors',
    'awards.hackathon': '7th Place – Hackathon HackAI 2025',
    'awards.gameofcodes': '1st Place – Game Of Codes',
    'awards.excellence': 'Excellence Award',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new opportunities and interesting projects.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.leetcode': 'LeetCode',
    'contact.hackerrank': 'HackerRank',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.education': 'Formation',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.certifications': 'Certifications',
    'nav.awards': 'Récompenses',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Othmane Abderrazik',
    'hero.title': 'Étudiant en Génie Informatique',
    'hero.description': 'Étudiant en génie informatique passionné par le développement d\'applications full-stack et l\'exploration de l\'IA et du NLP. Toujours excité d\'explorer les dernières technologies !',
    'hero.viewWork': 'Voir Mon Travail',
    'hero.contact': 'Me Contacter',
    
    // About Section
    'about.title': 'À Propos De Moi',
    'about.description': 'Étudiant passionné en génie informatique à l\'EILCO et l\'ENSA Marrakech, spécialisé en IA, systèmes embarqués et développement full-stack.',
    
    // Education Section
    'education.title': 'Parcours Éducatif',
    'education.eilco': 'École d\'Ingénieurs du Littoral Côte d\'Opale (EILCO)',
    'education.eilco.degree': 'Diplôme d\'Ingénieur, Génie Informatique',
    'education.eilco.location': 'Calais, France',
    'education.ensa': 'École Nationale des Sciences Appliquées (ENSA)',
    'education.ensa.degree': 'Diplôme d\'Ingénieur, Génie Informatique',
    'education.ensa.location': 'Marrakech, Maroc',
    'education.prep': 'Cycle Préparatoire Intégré',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    'experience.dell': 'Stage d\'Observation – DELL Technologies',
    'experience.dell.description': 'Collaboration avec les équipes commerciales et techniques sur la digitalisation des processus.',
    
    // Projects Section
    'projects.title': 'Projets Phares',
    'projects.smartroute': 'SmartRoute – Plateforme de Planification de Transport Intelligente',
    'projects.smartroute.description': 'Application web pour la planification optimisée d\'itinéraires basée sur le trafic et la météo avec des algorithmes de graphes et des modèles ML.',
    'projects.hackathon': 'Assistant Bureaucratique Intelligent (Hackathon HackAI)',
    'projects.hackathon.description': 'Assistant conversationnel en darija pour simplifier l\'accès aux informations administratives au Maroc.',
    'projects.chatbot': 'Chatbot de Cuisine Marocaine',
    'projects.chatbot.description': 'Chatbot pour prendre des commandes de plats marocains via des messages écrits utilisant le NLP.',
    'projects.lis': 'Système d\'Information de Laboratoire (SIL)',
    'projects.lis.description': 'Système de gestion de laboratoire avec communication sans fil via ESP32.',
    'projects.puzzle': 'Résolveur de Puzzle d\'Images Alimenté par l\'IA',
    'projects.puzzle.description': 'Système intelligent capable de reconstruire automatiquement des images à partir de fragments désordonnés.',
    
    // Skills Section
    'skills.title': 'Compétences Techniques',
    'skills.languages': 'Langages de Programmation',
    'skills.frameworks': 'Frameworks et Bibliothèques',
    'skills.databases': 'Bases de Données',
    'skills.tools': 'Outils et Technologies',
    
    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.ml': 'Spécialisation en Apprentissage Automatique',
    'certifications.python': 'Python pour la Science des Données, l\'IA et le Développement',
    'certifications.algorithms': 'Algorithmes de Recherche, Tri et Indexation',
    
    // Awards Section
    'awards.title': 'Récompenses et Honneurs',
    'awards.hackathon': '7ème Place – Hackathon HackAI 2025',
    'awards.gameofcodes': '1ère Place – Game Of Codes',
    'awards.excellence': 'Prix d\'Excellence',
    
    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.description': 'Je suis toujours ouvert à discuter de nouvelles opportunités et de projets intéressants.',
    'contact.email': 'Email',
    'contact.location': 'Localisation',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.leetcode': 'LeetCode',
    'contact.hackerrank': 'HackerRank',
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.education': 'التعليم',
    'nav.experience': 'الخبرة',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.certifications': 'الشهادات',
    'nav.awards': 'الجوائز',
    'nav.contact': 'التواصل',
    
    // Hero Section
    'hero.greeting': 'مرحبا، أنا',
    'hero.name': 'عثمان عبد الرازق',
    'hero.title': 'طالب هندسة الحاسوب',
    'hero.description': 'طالب هندسة حاسوب متحمس لبناء تطبيقات كاملة واستكشاف الذكاء الاصطناعي ومعالجة اللغات الطبيعية. دائماً متحمس لاستكشاف أحدث التقنيات!',
    'hero.viewWork': 'عرض أعمالي',
    'hero.contact': 'تواصل معي',
    
    // About Section
    'about.title': 'عني',
    'about.description': 'طالب متحمس في هندسة الحاسوب في EILCO و ENSA مراكش، متخصص في الذكاء الاصطناعي والأنظمة المدمجة والتطوير الكامل.',
    
    // Education Section
    'education.title': 'المسار التعليمي',
    'education.eilco': 'مدرسة مهندسي الساحل الأوبالي (EILCO)',
    'education.eilco.degree': 'شهادة الهندسة، هندسة الحاسوب',
    'education.eilco.location': 'كاليه، فرنسا',
    'education.ensa': 'المدرسة الوطنية للعلوم التطبيقية (ENSA)',
    'education.ensa.degree': 'شهادة الهندسة، هندسة الحاسوب',
    'education.ensa.location': 'مراكش، المغرب',
    'education.prep': 'السلك التحضيري المدمج',
    
    // Experience Section
    'experience.title': 'الخبرة المهنية',
    'experience.dell': 'تدريب الملاحظة – DELL Technologies',
    'experience.dell.description': 'التعاون مع فرق المبيعات والتقنية في رقمنة العمليات.',
    
    // Projects Section
    'projects.title': 'المشاريع المميزة',
    'projects.smartroute': 'SmartRoute – منصة التخطيط الذكي للنقل',
    'projects.smartroute.description': 'تطبيق ويب لتخطيط المسارات المحسن بناءً على حركة المرور والطقس مع خوارزميات الرسوم البيانية ونماذج التعلم الآلي.',
    'projects.hackathon': 'مساعد البيروقراطية الذكي (هاكاثون HackAI)',
    'projects.hackathon.description': 'مساعد محادثة بالدارجة لتبسيط الوصول إلى المعلومات الإدارية في المغرب.',
    'projects.chatbot': 'شات بوت الطعام المغربي',
    'projects.chatbot.description': 'شات بوت لأخذ طلبات الأطباق المغربية عبر الرسائل المكتوبة باستخدام معالجة اللغات الطبيعية.',
    'projects.lis': 'نظام معلومات المختبر (LIS)',
    'projects.lis.description': 'نظام إدارة المختبر مع الاتصال اللاسلكي عبر ESP32.',
    'projects.puzzle': 'حلال ألغاز الصور بالذكاء الاصطناعي',
    'projects.puzzle.description': 'نظام ذكي قادر على إعادة بناء الصور تلقائياً من القطع غير المرتبة.',
    
    // Skills Section
    'skills.title': 'المهارات التقنية',
    'skills.languages': 'لغات البرمجة',
    'skills.frameworks': 'الأطر والمكتبات',
    'skills.databases': 'قواعد البيانات',
    'skills.tools': 'الأدوات والتقنيات',
    
    // Certifications Section
    'certifications.title': 'الشهادات',
    'certifications.ml': 'تخصص التعلم الآلي',
    'certifications.python': 'بايثون لعلوم البيانات والذكاء الاصطناعي والتطوير',
    'certifications.algorithms': 'خوارزميات البحث والترتيب والفهرسة',
    
    // Awards Section
    'awards.title': 'الجوائز والأوسمة',
    'awards.hackathon': 'المركز السابع – هاكاثون HackAI 2025',
    'awards.gameofcodes': 'المركز الأول – Game Of Codes',
    'awards.excellence': 'جائزة التميز',
    
    // Contact Section
    'contact.title': 'تواصل معي',
    'contact.description': 'أنا مفتوح دائماً لمناقشة الفرص الجديدة والمشاريع المثيرة للاهتمام.',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    'contact.linkedin': 'لينكد إن',
    'contact.github': 'جيت هاب',
    'contact.leetcode': 'ليت كود',
    'contact.hackerrank': 'هاكر رانك',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language')
    return (saved as Language) || 'en'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}