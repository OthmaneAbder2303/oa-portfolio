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
    'nav.home': 'Home',
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
    'hero.description': 'Computer Engineering student stoked about building full-stack apps & digging into AI + NLP. Always hyped to explore the latest tech buzz!',
    'hero.specialization': 'Data Science & AI Specialist',
    'hero.cta.projects': 'View Projects',
    'hero.contact': 'Get In Touch',
    'hero.viewWork': 'See My Work',
    'hero.cta.contact': 'Get In Touch',

    // About
    'about.title': 'About Me',
    'about.description': 'Passionate computer engineering student with expertise in AI, machine learning, and full-stack development.',

    // Education
    'education.title': 'Education',
    'education.eilco.degree': 'Engineering Degree, Computer Engineering',
    'education.eilco.institution': "École d'Ingénieurs du Littoral Côte d'Opale (EILCO)",
    'education.eilco.location': 'Calais, France',
    'education.eilco.period': '2025 – Present',
    'education.eilco.description': 'Advanced computer engineering program with focus on software development and artificial intelligence.',

    'education.ensa.degree': 'Engineering Degree, Computer Engineering',
    'education.ensa.institution': 'National School of Applied Sciences (ENSA) Marrakech',
    'education.ensa.location': 'Marrakech, Morocco',
    'education.ensa.period': '2023 – Present',
    'education.ensa.description': 'Comprehensive computer engineering curriculum covering software development, AI, and embedded systems.',

    'education.ensa.prep.degree': 'Integrated Preparatory Cycle',
    'education.ensa.prep.institution': 'National School of Applied Sciences (ENSA) Marrakech',
    'education.ensa.prep.location': 'Marrakech, Morocco',
    'education.ensa.prep.period': '2021 – 2023',
    'education.ensa.prep.description': 'Intensive preparatory program in mathematics, physics, and computer science fundamentals.',

    'education.status.current': 'Currently Enrolled',
    'education.status.completed': 'Completed',

    // Experience
    'experience.title': 'Experience',
    'experience.professional': 'Professional Experience',
    'experience.leadership': 'Leadership & Activities',
    'experience.achievements': 'Key Achievements:',
    'experience.seeDetails': 'See Details',
    'experience.noImages': 'No images available for this experience.',
    
    // Professional Experience - Superprof
    'experience.superprof.title': 'Private Tutor',
    'experience.superprof.company': 'Superprof',
    'experience.superprof.location': 'Online & France',
    'experience.superprof.period': 'Aug 2025 – Present',
    'experience.superprof.type': 'Freelance',
    'experience.superprof.description': 'Provided personalized tutoring in Mathematics, Algorithmics, Programming (Python, Java, C), and Databases, combining clear explanations, practical exercises, and tailored methods to strengthen logic, autonomy, and confidence.',
    'experience.superprof.achievement1': 'Delivered tailored lessons to students of different levels',
    'experience.superprof.achievement2': 'Helped learners strengthen logical reasoning and autonomy',
    'experience.superprof.achievement3': 'Supported academic projects and exam preparation',
    'experience.superprof.achievement4': 'Adapted teaching methods to individual learning styles',
    
    // Professional Experience - DELL
    'experience.dell.title': 'Software Engineering Intern',
    'experience.dell.company': 'DELL Technologies',
    'experience.dell.location': 'Casablanca, Morocco',
    'experience.dell.period': 'Mid Jul 2024 – Mid Aug 2024',
    'experience.dell.type': 'Internship',
    'experience.dell.description': 'Participated in a 4-week internship program focused on software engineering and digital transformation at DELL Technologies.',
    'experience.dell.achievement1': 'Collaborated with cross-functional teams',
    'experience.dell.achievement2': 'Gained insights into enterprise technology solutions',
    'experience.dell.achievement3': 'Observed digital transformation processes',
    'experience.dell.achievement4': 'Enhanced understanding of corporate workflows',
    'experience.dell.image1': 'Working at DELL Technologies office in Casablanca',
    'experience.dell.image2': 'DELL Technologies facility and workspace',
    'experience.dell.image3': 'Internship report cover page - comprehensive project documentation',
    
    // Extracurricular Activities - JLM
    'experience.jlm.title': 'Head of the Social Action Cell',
    'experience.jlm.organization': 'JLM ENSA Marrakech',
    'experience.jlm.period': 'Nov 2023 – May 2025',
    'experience.jlm.description': 'Lead the organization of social and solidarity actions, including humanitarian caravans and orphanage visits.',
    'experience.jlm.image1': 'Visit to Dar Bouidar orphanage - spreading joy and support',
    'experience.jlm.image2': 'Community outreach at Dar Tifl center',
    'experience.jlm.image3': 'Humanitarian caravan to Douar Tamatiylt village',
    
    // Extracurricular Activities - Enactus
    'experience.enactus.title': 'Member of the Sponsorship and Partnerships Cell',
    'experience.enactus.organization': 'Enactus ENSA Marrakech',
    'experience.enactus.period': 'Jan 2022 – Apr 2025',
    'experience.enactus.description': 'Contributed to sponsor search and partnership management for the club.',
    'experience.enactus.image1': 'Organizing hackathons and innovation events',
    'experience.enactus.image2': 'Partnership visit with local entrepreneurs',
    
    // Extracurricular Activities - BrainX
    'experience.brainx.title': 'Member of the Training and Projects Cell',
    'experience.brainx.organization': 'BrainX - ENSA Marrakech',
    'experience.brainx.period': 'Nov 2023 – Jun 2024',
    'experience.brainx.description': 'Conducted training sessions and practical workshops on Machine Learning.',
    'experience.brainx.image1': 'Leading machine learning workshops for students',
    'experience.brainx.image2': 'Hands-on training in AI and data science',

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
    'projects.log_classification': 'Log Classification System',
    'projects.log_classification.description': 'A robust system for classifying log messages using regex patterns, BERT embeddings, and Groq-powered LLM, designed for monitoring and analytics.',

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
    'nav.home': 'Accueil',
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
    'education.eilco.degree': 'Diplôme d\'Ingénieur, Génie Informatique',
    'education.eilco.institution': "École d'Ingénieurs du Littoral Côte d'Opale (EILCO)",
    'education.eilco.location': 'Calais, France',
    'education.eilco.period': '2025 – Présent',
    'education.eilco.description': 'Programme avancé de génie informatique axé sur le développement logiciel et l\'intelligence artificielle.',

    'education.ensa.degree': 'Diplôme d\'Ingénieur, Génie Informatique',
    'education.ensa.institution': 'École Nationale des Sciences Appliquées (ENSA) Marrakech',
    'education.ensa.location': 'Marrakech, Maroc',
    'education.ensa.period': '2023 – Présent',
    'education.ensa.description': 'Programme complet de génie informatique couvrant le développement logiciel, l\'IA et les systèmes embarqués.',

    'education.ensa.prep.degree': 'Cycle Préparatoire Intégré',
    'education.ensa.prep.institution': 'École Nationale des Sciences Appliquées (ENSA) Marrakech',
    'education.ensa.prep.location': 'Marrakech, Maroc',
    'education.ensa.prep.period': '2021 – 2023',
    'education.ensa.prep.description': 'Programme préparatoire intensif en mathématiques, physique et informatique fondamentale.',

    'education.status.current': 'En Cours',
    'education.status.completed': 'Terminé',

    // Experience
    'experience.title': 'Expérience',
    'experience.professional': 'Expérience Professionnelle',
    'experience.leadership': 'Leadership et Activités',
    'experience.achievements': 'Réalisations Clés :',
    'experience.seeDetails': 'Voir Détails',
    'experience.noImages': 'Aucune image disponible pour cette expérience.',
    
    // Professional Experience - Superprof
    'experience.superprof.title': 'Professeur Particulier',
    'experience.superprof.company': 'Superprof',
    'experience.superprof.location': 'En ligne et France',
    'experience.superprof.period': 'Août 2025 – Présent',
    'experience.superprof.type': 'Freelance',
    'experience.superprof.description': 'Fourni du tutorat personnalisé en Mathématiques, Algorithmique, Programmation (Python, Java, C) et Bases de données, combinant explications claires, exercices pratiques et méthodes adaptées pour renforcer la logique, l\'autonomie et la confiance.',
    'experience.superprof.achievement1': 'Dispensé des cours adaptés à des étudiants de différents niveaux',
    'experience.superprof.achievement2': 'Aidé les apprenants à renforcer le raisonnement logique et l\'autonomie',
    'experience.superprof.achievement3': 'Soutenu des projets académiques et la préparation aux examens',
    'experience.superprof.achievement4': 'Adapté les méthodes d\'enseignement aux styles d\'apprentissage individuels',
    
    // Professional Experience - DELL
    'experience.dell.title': 'Stagiaire en Génie Logiciel',
    'experience.dell.company': 'DELL Technologies',
    'experience.dell.location': 'Casablanca, Maroc',
    'experience.dell.period': 'Mi-Juillet 2024 – Mi-Août 2024',
    'experience.dell.type': 'Stage',
    'experience.dell.description': 'Participé à un programme de stage de 4 semaines axé sur le génie logiciel et la transformation numérique chez DELL Technologies.',
    'experience.dell.achievement1': 'Collaboré avec des équipes transversales',
    'experience.dell.achievement2': 'Acquis des connaissances sur les solutions technologiques d\'entreprise',
    'experience.dell.achievement3': 'Observé les processus de transformation numérique',
    'experience.dell.achievement4': 'Amélioré la compréhension des flux de travail d\'entreprise',
    'experience.dell.image1': 'Travail au bureau DELL Technologies à Casablanca',
    'experience.dell.image2': 'Installation et espace de travail DELL Technologies',
    'experience.dell.image3': 'Page de garde du rapport de stage - documentation complète du projet',
    
    // Extracurricular Activities - JLM
    'experience.jlm.title': 'Responsable de la Cellule Action Sociale',
    'experience.jlm.organization': 'JLM ENSA Marrakech',
    'experience.jlm.period': 'Nov 2023 – Mai 2025',
    'experience.jlm.description': 'Dirigé l\'organisation d\'actions sociales et de solidarité, incluant des caravanes humanitaires et des visites d\'orphelinats.',
    'experience.jlm.image1': 'Visite à l\'orphelinat Dar Bouidar - répandre la joie et le soutien',
    'experience.jlm.image2': 'Action communautaire au centre Dar Tifl',
    'experience.jlm.image3': 'Caravane humanitaire au village Douar Tamatiylt',
    
    // Extracurricular Activities - Enactus
    'experience.enactus.title': 'Membre de la Cellule Sponsoring et Partenariats',
    'experience.enactus.organization': 'Enactus ENSA Marrakech',
    'experience.enactus.period': 'Jan 2022 – Avr 2025',
    'experience.enactus.description': 'Contribué à la recherche de sponsors et à la gestion des partenariats pour le club.',
    'experience.enactus.image1': 'Organisation de hackathons et d\'événements d\'innovation',
    'experience.enactus.image2': 'Visite de partenariat avec des entrepreneurs locaux',
    
    // Extracurricular Activities - BrainX
    'experience.brainx.title': 'Membre de la Cellule Formation et Projets',
    'experience.brainx.organization': 'BrainX - ENSA Marrakech',
    'experience.brainx.period': 'Nov 2023 – Juin 2024',
    'experience.brainx.description': 'Animé des sessions de formation et des ateliers pratiques sur l\'Apprentissage Automatique.',
    'experience.brainx.image1': 'Animation d\'ateliers d\'apprentissage automatique pour étudiants',
    'experience.brainx.image2': 'Formation pratique en IA et science des données',

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
    'projects.log_classification': 'Système de Classification de Logs',
    'projects.log_classification.description': 'Un système robuste pour classer les messages de logs en utilisant des motifs regex, des embeddings BERT et un LLM alimenté par Groq, conçu pour la surveillance et l\'analyse.',

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
    'nav.home': 'الرئيسية',
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
    'education.eilco.degree': 'شهادة هندسة الحاسوب',
    'education.eilco.institution': "مدرسة المهندسين لشاطئ كوت دوبال (EILCO)",
    'education.eilco.location': 'كاليه، فرنسا',
    'education.eilco.period': '2025 – حتى الآن',
    'education.eilco.description': 'برنامج متقدم في هندسة الحاسوب مع التركيز على تطوير البرمجيات والذكاء الاصطناعي.',

    'education.ensa.degree': 'شهادة هندسة الحاسوب',
    'education.ensa.institution': 'المدرسة الوطنية للعلوم التطبيقية (ENSA) مراكش',
    'education.ensa.location': 'مراكش، المغرب',
    'education.ensa.period': '2023 – حتى الآن',
    'education.ensa.description': 'منهج شامل لهندسة الحاسوب يغطي تطوير البرمجيات والذكاء الاصطناعي والأنظمة المدمجة.',

    'education.ensa.prep.degree': 'الدورة التحضيرية المتكاملة',
    'education.ensa.prep.institution': 'المدرسة الوطنية للعلوم التطبيقية (ENSA) مراكش',
    'education.ensa.prep.location': 'مراكش، المغرب',
    'education.ensa.prep.period': '2021 – 2023',
    'education.ensa.prep.description': 'برنامج تحضيري مكثف في الرياضيات والفيزياء وأساسيات علوم الحاسوب.',

    'education.status.current': 'جارٍ الدراسة',
    'education.status.completed': 'منتهي',

    // Experience
    'experience.title': 'الخبرة',
    'experience.professional': 'الخبرة المهنية',
    'experience.leadership': 'القيادة والأنشطة',
    'experience.achievements': 'الإنجازات الرئيسية:',
    'experience.seeDetails': 'عرض التفاصيل',
    'experience.noImages': 'لا توجد صور متاحة لهذه الخبرة.',
    
    // Professional Experience - Superprof
    'experience.superprof.title': 'مدرس خصوصي',
    'experience.superprof.company': 'Superprof',
    'experience.superprof.location': 'عبر الإنترنت وفرنسا',
    'experience.superprof.period': 'أغسطس 2025 – حتى الآن',
    'experience.superprof.type': 'عمل حر',
    'experience.superprof.description': 'تقديم دروس خصوصية مخصصة في الرياضيات، الخوارزميات، البرمجة (Python، Java، C)، وقواعد البيانات، مع دمج التفسيرات الواضحة والتمارين العملية والطرق المصممة خصيصاً لتقوية المنطق والاستقلالية والثقة.',
    'experience.superprof.achievement1': 'تقديم دروس مصممة خصيصاً للطلاب من مستويات مختلفة',
    'experience.superprof.achievement2': 'مساعدة المتعلمين على تقوية التفكير المنطقي والاستقلالية',
    'experience.superprof.achievement3': 'دعم المشاريع الأكاديمية والتحضير للامتحانات',
    'experience.superprof.achievement4': 'تكييف طرق التدريس مع أساليب التعلم الفردية',
    
    // Professional Experience - DELL
    'experience.dell.title': 'متدرب هندسة البرمجيات',
    'experience.dell.company': 'DELL Technologies',
    'experience.dell.location': 'الدار البيضاء، المغرب',
    'experience.dell.period': 'منتصف يوليو 2024 – منتصف أغسطس 2024',
    'experience.dell.type': 'تدريب',
    'experience.dell.description': 'شارك في برنامج تدريبي لمدة 4 أسابيع يركز على هندسة البرمجيات والتحول الرقمي في DELL Technologies.',
    'experience.dell.achievement1': 'تعاون مع فرق متعددة الوظائف',
    'experience.dell.achievement2': 'اكتساب رؤى حول حلول التكنولوجيا للمؤسسات',
    'experience.dell.achievement3': 'مراقبة عمليات التحول الرقمي',
    'experience.dell.achievement4': 'تعزيز فهم سير العمل المؤسسي',
    'experience.dell.image1': 'العمل في مكتب DELL Technologies في الدار البيضاء',
    'experience.dell.image2': 'مرافق ومساحة عمل DELL Technologies',
    'experience.dell.image3': 'صفحة غلاف تقرير التدريب - وثائق شاملة للمشروع',
    
    // Extracurricular Activities - JLM
    'experience.jlm.title': 'رئيس خلية العمل الاجتماعي',
    'experience.jlm.organization': 'JLM ENSA مراكش',
    'experience.jlm.period': 'نوفمبر 2023 – مايو 2025',
    'experience.jlm.description': 'قيادة تنظيم الأعمال الاجتماعية والتضامنية، بما في ذلك القوافل الإنسانية وزيارات دور الأيتام.',
    'experience.jlm.image1': 'زيارة دار بويدار للأيتام - نشر الفرح والدعم',
    'experience.jlm.image2': 'العمل المجتمعي في مركز دار الطفل',
    'experience.jlm.image3': 'القافلة الإنسانية إلى قرية دوار تماطيلت',
    
    // Extracurricular Activities - Enactus
    'experience.enactus.title': 'عضو خلية الرعاية والشراكات',
    'experience.enactus.organization': 'Enactus ENSA مراكش',
    'experience.enactus.period': 'يناير 2022 – أبريل 2025',
    'experience.enactus.description': 'ساهم في البحث عن الرعاة وإدارة الشراكات للنادي.',
    'experience.enactus.image1': 'تنظيم الهاكاثونات وفعاليات الابتكار',
    'experience.enactus.image2': 'زيارة شراكة مع رواد أعمال محليين',
    
    // Extracurricular Activities - BrainX
    'experience.brainx.title': 'عضو خلية التدريب والمشاريع',
    'experience.brainx.organization': 'BrainX - ENSA مراكش',
    'experience.brainx.period': 'نوفمبر 2023 – يونيو 2024',
    'experience.brainx.description': 'إجراء جلسات تدريبية وورش عمل عملية حول التعلم الآلي.',
    'experience.brainx.image1': 'قيادة ورش عمل التعلم الآلي للطلاب',
    'experience.brainx.image2': 'التدريب العملي في الذكاء الاصطناعي وعلوم البيانات',

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
    'projects.log_classification': 'نظام تصنيف السجلات',
    'projects.log_classification.description': 'نظام قوي لتصنيف رسائل السجلات باستخدام أنماط regex وتضمينات BERT وLLM مدعوم من Groq، مصمم للمراقبة والتحليلات.',

    // Skills
    'skills.title': 'المهارات التقنية',
    'skills.languages': 'لغات البرمجة',
    'skills.frameworks_libraries': 'الأطر والمكتبات',
    'skills.tools_platforms': 'الأدوات والتقنيات',

    // Certifications
    'certifications.title': 'الشهادات',
    'certifications.ml': 'تخصص التعلم الآلي',
    'certifications.python': 'Python لعلوم البيانات والذكاء الاصطناعي والتطوير',
    'certifications.algorithms': 'خوارزميات البحث والترتيب والفهرسة',

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