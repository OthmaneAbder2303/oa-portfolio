import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'fr' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.awards': 'Awards',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Othmane Abderrazik',
    'hero.title': 'Computer Engineering Student',
    'hero.description': 'CompEng student stoked about building full-stack apps & digging into AI + NLP. Always hyped to explore the latest tech buzz!',
    'hero.specialization': 'Data Science & AI Specialist',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get In Touch',

    // About
    'about.title': 'About Me',
    'about.description': 'Passionate computer engineering student with expertise in AI, machine learning, and full-stack development.',

    // Education
    'education.title': 'Education',

    // Experience
    'experience.title': 'Experience',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.smartroute': 'SmartRoute - Intelligent Transport Planning',
    'projects.smartroute.description': 'A web application for optimized route planning based on traffic and weather conditions, integrating graph algorithms and machine learning models.',
    'projects.hackathon': 'Smart Bureaucracy Assistant (HackAI)',
    'projects.hackathon.description': 'Conversational assistant in Darija to simplify access to administrative information in Morocco using NLP and speech recognition.',
    'projects.chatbot': 'Moroccan Food Chatbot',
    'projects.chatbot.description': 'Intelligent chatbot for taking orders of Moroccan dishes using natural language processing to interpret intents.',
    'projects.lis': 'Laboratory Information System',
    'projects.lis.description': 'Laboratory management system with wireless communication via ESP32 and real-time data synchronization.',
    'projects.puzzle': 'AI-Powered Image Puzzle Solver',
    'projects.puzzle.description': 'Intelligent system for automatically reconstructing images from unordered fragments using computer vision techniques.',

    // Skills
    "skills.title": "Technical Skills",
    "skills.languages": "Programming Languages",
    "skills.frameworks_libraries": "Frameworks & Libraries",
    "skills.tools_platforms": "Tools & Technologies",

    // Certifications
    'certifications.title': 'Certifications',
    'certifications.ml': 'Machine Learning Specialization',
    'certifications.python': 'Python for Data Science, AI & Development',
    'certifications.algorithms': 'Algorithms for Searching, Sorting, and Indexing',

    // Awards
    'awards.title': 'Awards & Recognition',
    'awards.description': 'Recognition for excellence in academics, competitions, and community leadership',
    'awards.hackai': '7th Place – Hackathon HackAI 2025',
    'awards.hackai.description': 'Developed a conversational assistant in Darija for administrative information access in Morocco.',
    'awards.gameofcodes': '1st Place – Game Of Codes',
    'awards.gameofcodes.description': 'Won first place in competitive programming contest featuring algorithmic problem solving.',
    'awards.excellence': 'Excellence Award',
    'awards.excellence.description': 'Recognized for outstanding academic performance and leadership potential.',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s connect and discuss opportunities in data science, AI, and software development.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.leetcode': 'LeetCode',
    'contact.hackerrank': 'HackerRank'
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.education': 'Formation',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.certifications': 'Certifications',
    'nav.awards': 'Récompenses',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Othmane Abderrazik',
    'hero.title': 'Étudiant en Génie Informatique',
    'hero.description': 'Étudiant en génie informatique passionné par le développement d\'applications full-stack et l\'exploration de l\'IA et du NLP. Toujours enthousiaste d\'explorer les dernières tendances technologiques !',
    'hero.specialization': 'Spécialiste en Science des Données et IA',
    'hero.cta.projects': 'Voir Projets',
    'hero.cta.contact': 'Me Contacter',

    // About
    'about.title': 'À Propos de Moi',
    'about.description': 'Étudiant passionné en génie informatique avec une expertise en IA, apprentissage automatique et développement full-stack.',

    // Education
    'education.title': 'Formation',

    // Experience
    'experience.title': 'Expérience',

    // Projects
    'projects.title': "Projets Phares",
    'projects.smartroute': 'SmartRoute - Planification de Transport Intelligente',
    'projects.smartroute.description': 'Application web pour la planification d\'itinéraires optimisés basée sur le trafic et les conditions météorologiques, intégrant des algorithmes de graphe et des modèles d\'apprentissage automatique.',
    'projects.hackathon': 'Assistant Bureaucratique Intelligent (HackAI)',
    'projects.hackathon.description': 'Assistant conversationnel en Darija pour simplifier l\'accès aux informations administratives au Maroc utilisant le NLP et la reconnaissance vocale.',
    'projects.chatbot': 'Chatbot de Cuisine Marocaine',
    'projects.chatbot.description': 'Chatbot intelligent pour prendre des commandes de plats marocains utilisant le traitement du langage naturel pour interpréter les intentions.',
    'projects.lis': 'Système d\'Information de Laboratoire',
    'projects.lis.description': 'Système de gestion de laboratoire avec communication sans fil via ESP32 et synchronisation de données en temps réel.',
    'projects.puzzle': 'Résolveur de Puzzle d\'Images par IA',
    'projects.puzzle.description': 'Système intelligent pour reconstituer automatiquement des images à partir de fragments désordonnés utilisant des techniques de vision par ordinateur.',

    // Skills
    'skills.title': 'Compétences Techniques',
    'skills.languages': 'Langages de Programmation',
    'skills.frameworks_libraries': 'Frameworks et Bibliothèques',
    'skills.tools_platforms': 'Outils et Technologies',

    // Certifications
    'certifications.title': 'Certifications',
    'certifications.ml': 'Spécialisation en Apprentissage Automatique',
    'certifications.python': 'Python pour la Science des Données, IA et Développement',
    'certifications.algorithms': 'Algorithmes de Recherche, Tri et Indexation',

    // Awards
    'awards.title': 'Récompenses et Reconnaissance',
    'awards.description': 'Reconnaissance pour l\'excellence académique, les compétitions et le leadership communautaire',
    'awards.hackai': '7e Place – Hackathon HackAI 2025',
    'awards.hackai.description': 'Développement d\'un assistant conversationnel en Darija pour faciliter l\'accès aux informations administratives au Maroc.',
    'awards.gameofcodes': '1re Place – Game Of Codes',
    'awards.gameofcodes.description': 'Remporté la première place dans un concours de programmation compétitive axé sur la résolution de problèmes algorithmiques.',
    'awards.excellence': 'Prix d\'Excellence',
    'awards.excellence.description': 'Reconnu pour des performances académiques exceptionnelles et un potentiel de leadership.',

    // Contact
    'contact.title': 'Me Contacter',
    'contact.description': 'Connectons-nous et discutons des opportunités en science des données, IA et développement logiciel.',
    'contact.email': 'Email',
    'contact.location': 'Localisation',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.leetcode': 'LeetCode',
    'contact.hackerrank': 'HackerRank'
  },
  ar: {
    // Navigation
    'nav.about': 'حولي',
    'nav.education': 'التعليم',
    'nav.experience': 'الخبرة',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.certifications': 'الشهادات',
    'nav.awards': 'الجوائز',
    'nav.contact': 'التواصل',

    // Hero
    'hero.greeting': 'مرحبا، أنا',
    'hero.name': 'عثمان عبد الرزاق',
    'hero.title': 'طالب هندسة الحاسوب',
    'hero.description': 'طالب هندسة الحاسوب متحمس لبناء تطبيقات متكاملة واستكشاف الذكاء الاصطناعي ومعالجة اللغات الطبيعية. دائماً متحمس لاستكشاف أحدث التقنيات!',
    'hero.specialization': 'متخصص في علوم البيانات والذكاء الاصطناعي',
    'hero.cta.projects': 'عرض المشاريع',
    'hero.cta.contact': 'تواصل معي',

    // About
    'about.title': 'نبذة عني',
    'about.description': 'طالب هندسة الحاسوب شغوف بخبرة في الذكاء الاصطناعي والتعلم الآلي والتطوير الشامل.',

    // Education
    'education.title': 'التعليم',

    // Experience
    'experience.title': 'الخبرة',

    // Projects
    'projects.title': 'المشاريع المميزة',
    'projects.smartroute': 'SmartRoute - تخطيط النقل الذكي',
    'projects.smartroute.description': 'تطبيق ويب لتخطيط المسارات المحسنة بناءً على حركة المرور والظروف الجوية، يدمج خوارزميات الرسم البياني ونماذج التعلم الآلي.',
    'projects.hackathon': 'مساعد البيروقراطية الذكي (HackAI)',
    'projects.hackathon.description': 'مساعد محادثة بالدارجة لتبسيط الوصول إلى المعلومات الإدارية في المغرب باستخدام معالجة اللغات الطبيعية والتعرف على الكلام.',
    'projects.chatbot': 'روبوت الطعام المغربي',
    'projects.chatbot.description': 'روبوت ذكي لأخذ طلبات الأطباق المغربية باستخدام معالجة اللغة الطبيعية لتفسير النوايا.',
    'projects.lis': 'نظام معلومات المختبر',
    'projects.lis.description': 'نظام إدارة المختبر مع الاتصال اللاسلكي عبر ESP32 ومزامنة البيانات في الوقت الفعلي.',
    'projects.puzzle': 'حلال ألغاز الصور بالذكاء الاصطناعي',
    'projects.puzzle.description': 'نظام ذكي لإعادة تكوين الصور تلقائياً من شظايا غير مرتبة باستخدام تقنيات الرؤية الحاسوبية.',

    // Skills
    'skills.title': 'المهارات التقنية',
    'skills.languages': 'لغات البرمجة',
    'skills.frameworks_libraries': 'الأطر والمكتبات',
    'skills.tools_platforms': 'الأدوات والتقنيات',

    // Certifications
    'certifications.title': 'الشهادات',
    'certifications.ml': 'تخصص التعلم الآلي',
    'certifications.python': 'Python لعلوم البيانات والذكاء الاصطناعي والتطوير',
    'certifications.algorithms': 'خوارzmيات البحث والترتيب والفهرسة',

    // Awards
    'awards.title': 'الجوائز والتقدير',
    'awards.description': 'التقدير للتميز في الأكاديميات والمسابقات وقيادة المجتمع',
    'awards.hackai': 'المركز السابع – هاكاثون HackAI 2025',
    'awards.hackai.description': 'تطوير مساعد محادثة بالدارجة لتسهيل الوصول إلى المعلومات الإدارية في المغرب.',
    'awards.gameofcodes': 'المركز الأول – Game Of Codes',
    'awards.gameofcodes.description': 'فاز بالمركز الأول في مسابقة برمجة تنافسية تركز على حل المشكلات الخوارزمية.',
    'awards.excellence': 'جائزة التميز',
    'awards.excellence.description': 'حصل على تقدير للأداء الأكاديمي المتميز وإمكانيات القيادة.',

    // Contact
    'contact.title': 'تواصل معي',
    'contact.description': 'دعنا نتواصل ونناقش الفرص في علوم البيانات والذكاء الاصطناعي وتطوير البرمجيات.',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.leetcode': 'LeetCode',
    'contact.hackerrank': 'HackerRank'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
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