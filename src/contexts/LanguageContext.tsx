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
    'hero.title': 'Computer Science Student',
    'hero.description': 'Computer Science student stoked about building full-stack apps & digging into AI & NLP. Always hyped to explore the latest tech buzz!',
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
    'education.eilco.degree': 'Engineering Degree, Computer Science',
    'education.eilco.institution': "École d'Ingénieurs du Littoral Côte d'Opale (EILCO)",
    'education.eilco.location': 'Calais, France',
    'education.eilco.period': '2025 – Present',
    'education.eilco.description': 'Advanced computer engineering program with focus on software development, AI and embedded systems.',

    'education.ensa.degree': 'Engineering Degree, Computer Science',
    'education.ensa.institution': 'National School of Applied Sciences (ENSA) Marrakech',
    'education.ensa.location': 'Marrakech, Morocco',
    'education.ensa.period': '2023 – Present',
    'education.ensa.description': 'Comprehensive computer science curriculum covering software development and AI.',

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
    'experience.ucam.title': 'Backend Developer',
    'experience.ucam.company': 'Cadi Ayyad University - Information Systems Department (DSI)',
    'experience.ucam.location': 'Marrakech, Morocco',
    'experience.ucam.period': 'July – August 2025',
    'experience.ucam.type': 'Summer Internship',
    'experience.ucam.description': 'Contributed to the backend development of a platform for monitoring and reporting Sustainable Development Goals (SDGs) for university institutions. Designed and implemented secure REST APIs for managing and visualizing indicators.',
    'experience.ucam.achievement1': 'Developed secure REST APIs using Django REST Framework and Django ORM',
    'experience.ucam.achievement2': 'Designed PostgreSQL database schema and implemented models for SDG indicators',
    'experience.ucam.achievement3': 'Applied web security best practices (authentication, authorization, input validation)',
    'experience.ucam.achievement4': 'Collaborated with the DSI team on architecture and code reviews',
    
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
    "skills.tools_platforms": "Tools & Platforms",
    "skills.environments": "Development Environments",


    // Certifications
    'certifications.title': 'Certifications',
    'certifications.description': 'Professional certifications demonstrating expertise in AI, machine learning, and software development',
    'certifications.subtitle': 'Professional certifications demonstrating expertise in AI, Machine Learning, and software development',
    'certifications.ml': 'Machine Learning Specialization',
    'certifications.python': 'Python for Data Science, AI & Development',
    'certifications.algorithms': 'Algorithms for Searching, Sorting, and Indexing',
    'certifications.ml.description': 'Specialization program covering deep learning, neural networks, and advanced machine learning techniques.',
    'certifications.python.description': 'Comprehensive course on Python programming for data science, AI development, and practical projects.',
    'certifications.algorithms.description': 'Course focused on algorithms, data structures, sorting, searching, and complexity analysis.',
    'certifications.skillsCovered': 'Skills Covered:',
    'certifications.credentialId': 'Credential ID',
    'certifications.viewCredential': 'View Credential',
    'certifications.learningPlatforms': 'Learning Platforms',
    'certifications.continuousLearning': 'Continuous Learning',
    'certifications.continuousLearningDesc': 'Always expanding my knowledge through new certifications and courses',
    'certifications.viewAllCredentials': 'View All Credentials',

    'certifications.platforms.coursera': 'Online courses from top universities and companies.',
    'certifications.platforms.oracle': 'Oracle Academy provides learning paths for developers and IT professionals.',
    'certifications.platforms.datacamp': 'Interactive learning platform focused on data science and analytics.',
    'certifications.platforms.deepai': 'DeepLearning.AI courses specializing in AI and machine learning.',
    'certifications.platforms.google': 'Resources and courses from Google Developers.',
    'certifications.platforms.geeksforgeeks': 'Coding tutorials and computer science resources for all levels.',


    // Awards
    'awards.title': 'Awards & Recognition',
    'awards.description': 'Recognition for excellence in academics, competitions, and community leadership',
    'awards.participants': 'participants',
    'awards.seeDetails': 'See Details',
    'awards.moreAchievements': 'Want to see more achievements?',
    'awards.linkedinCta': 'Visit my LinkedIn profile for a complete overview of my accomplishments',
    'awards.viewLinkedin': 'View LinkedIn Profile',
    
    // Individual Awards
    'awards.hackai.title': '7th Place – HackAI 2025',
    'awards.hackai.organization': 'UM6P - 1337',
    'awards.hackai.location': 'Ben Guerir, Morocco',
    'awards.hackai.date': 'May 2025',
    'awards.hackai.description': 'Developed a conversational assistant in Darija for administrative information access in Morocco.',
    'awards.hackai.category': 'Hackathon',
    'awards.hackai.rank': '7th',
    'awards.hackai.participants': '100+',
    
    'awards.gameofcodes.title': '1st Place – Game Of Codes',
    'awards.gameofcodes.organization': 'ENSA Marrakech',
    'awards.gameofcodes.location': 'Marrakech, Morocco',
    'awards.gameofcodes.date': 'May 2024',
    'awards.gameofcodes.description': 'Won first place in competitive programming contest featuring algorithmic problem solving.',
    'awards.gameofcodes.category': 'Programming Contest',
    'awards.gameofcodes.rank': '1st',
    'awards.gameofcodes.participants': '50+',
    
    'awards.excellence.title': 'Excellence Award',
    'awards.excellence.organization': 'Banque Populaire Marrakech-Safi',
    'awards.excellence.location': 'Marrakech, Morocco',
    'awards.excellence.date': 'Dec 2021',
    'awards.excellence.description': 'Recognized for outstanding academic performance and leadership potential.',
    'awards.excellence.category': 'Academic Excellence',
    'awards.excellence.rank': 'Winner',
    'awards.excellence.participants': 'Regional',

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
    'nav.about': 'À propos',
    'nav.education': 'Formation',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.certifications': 'Certifications',
    'nav.awards': 'Distinctions',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.name': 'Othmane Abderrazik',
    'hero.title': 'Étudiant en Génie Informatique',
    'hero.description': 'Étudiant en génie informatique passionné par le développement d\'applications complètes et l\'exploration de l\'IA et du traitement du langage naturel. Toujours enthousiaste à l\'idée de découvrir les dernières innovations technologiques !',
    'hero.specialization': 'Spécialiste en Science des Données et IA',
    'hero.cta.projects': 'Voir mes projets',
    'hero.contact': 'Me contacter',
    'hero.viewWork': 'Découvrir mon travail',
    'hero.cta.contact': 'Entrer en contact',

    // About
    'about.title': 'À propos de moi',
    'about.description': 'Étudiant passionné en génie informatique avec une expertise en intelligence artificielle, apprentissage automatique et développement full-stack.',

    // Education
    'education.title': 'Formation académique',
    'education.eilco.degree': 'Diplôme d\'Ingénieur en Informatique',
    'education.eilco.institution': "École d'Ingénieurs du Littoral Côte d'Opale (EILCO)",
    'education.eilco.location': 'Calais, France',
    'education.eilco.period': '2025 – En cours',
    'education.eilco.description': 'Formation avancée en génie informatique axée sur le développement logiciel, l\'intelligence artificielle et les systèmes embarqués.',

    'education.ensa.degree': 'Diplôme d\'Ingénieur en Informatique',
    'education.ensa.institution': 'École Nationale des Sciences Appliquées (ENSA) Marrakech',
    'education.ensa.location': 'Marrakech, Maroc',
    'education.ensa.period': '2023 – En cours',
    'education.ensa.description': 'Cursus complet en génie informatique couvrant le développement logiciel et l\'IA.',

    'education.ensa.prep.degree': 'Classes Préparatoires Intégrées',
    'education.ensa.prep.institution': 'École Nationale des Sciences Appliquées (ENSA) Marrakech',
    'education.ensa.prep.location': 'Marrakech, Maroc',
    'education.ensa.prep.period': '2021 – 2023',
    'education.ensa.prep.description': 'Formation préparatoire intensive en mathématiques, physique et fondamentaux de l\'informatique.',

    'education.status.current': 'En cours',
    'education.status.completed': 'Terminé',

    // Experience
    'experience.title': 'Parcours professionnel',
    'experience.professional': 'Expérience professionnelle',
    'experience.leadership': 'Leadership et engagement',
    'experience.achievements': 'Réalisations principales :',
    'experience.seeDetails': 'Voir les détails',
    'experience.noImages': 'Aucune image disponible pour cette expérience.',
    
    // Professional Experience - Superprof
    'experience.ucam.title': 'Développeur Backend',
    'experience.ucam.company': 'Université Cadi Ayyad - Direction des Systèmes d’Information (DSI)',
    'experience.ucam.location': 'Marrakech, Maroc',
    'experience.ucam.period': 'Juillet – Août 2025',
    'experience.ucam.type': 'Stage d’été',
    'experience.ucam.description': 'Contribution au développement backend d’une plateforme de suivi et de reporting des Objectifs de Développement Durable (ODD) pour les établissements universitaires. Conception et implémentation d’API REST sécurisées pour la gestion et la visualisation des indicateurs.',
    'experience.ucam.achievement1': 'Développement d’API REST sécurisées avec Django REST Framework et Django ORM',
    'experience.ucam.achievement2': 'Conception du schéma de base de données PostgreSQL et implémentation des modèles ODD',
    'experience.ucam.achievement3': 'Application des bonnes pratiques de sécurité web (authentification, autorisation, validation)',
    'experience.ucam.achievement4': 'Collaboration avec l’équipe DSI sur l’architecture et les revues de code',
    
    // Professional Experience - DELL
    'experience.dell.title': 'Stagiaire en Génie Logiciel',
    'experience.dell.company': 'DELL Technologies',
    'experience.dell.location': 'Casablanca, Maroc',
    'experience.dell.period': 'Mi-juillet – Mi-août 2024',
    'experience.dell.type': 'Stage',
    'experience.dell.description': 'Stage d\'immersion de 4 semaines axé sur l\'ingénierie logicielle et la transformation digitale au sein de DELL Technologies.',
    'experience.dell.achievement1': 'Collaboration avec des équipes pluridisciplinaires',
    'experience.dell.achievement2': 'Découverte des solutions technologiques d\'entreprise',
    'experience.dell.achievement3': 'Observation des processus de transformation numérique',
    'experience.dell.achievement4': 'Approfondissement de la compréhension des workflows d\'entreprise',
    'experience.dell.image1': 'En mission au bureau DELL Technologies de Casablanca',
    'experience.dell.image2': 'Installations et espaces de travail DELL Technologies',
    'experience.dell.image3': 'Couverture du rapport de stage - documentation complète du projet',
    
    // Extracurricular Activities - JLM
    'experience.jlm.title': 'Responsable de la Cellule Action Sociale',
    'experience.jlm.organization': 'JLM ENSA Marrakech',
    'experience.jlm.period': 'Nov 2023 – Mai 2025',
    'experience.jlm.description': 'Animation et coordination d\'actions sociales et solidaires, notamment des caravanes humanitaires et visites d\'orphelinats.',
    'experience.jlm.image1': 'Visite à l\'orphelinat Dar Bouidar - partage de joie et soutien',
    'experience.jlm.image2': 'Action solidaire au centre Dar Tifl',
    'experience.jlm.image3': 'Caravane humanitaire au village Douar Tamatiylt',
    
    // Extracurricular Activities - Enactus
    'experience.enactus.title': 'Membre de la Cellule Sponsoring et Partenariats',
    'experience.enactus.organization': 'Enactus ENSA Marrakech',
    'experience.enactus.period': 'Jan 2022 – Avr 2025',
    'experience.enactus.description': 'Participation active à la recherche de partenaires et à la gestion des relations sponsors pour l\'association.',
    'experience.enactus.image1': 'Organisation d\'hackathons et d\'événements d\'innovation',
    'experience.enactus.image2': 'Rencontre partenariat avec des entrepreneurs locaux',
    
    // Extracurricular Activities - BrainX
    'experience.brainx.title': 'Membre de la Cellule Formation et Projets',
    'experience.brainx.organization': 'BrainX - ENSA Marrakech',
    'experience.brainx.period': 'Nov 2023 – Juin 2024',
    'experience.brainx.description': 'Animation de sessions de formation et d\'ateliers pratiques sur l\'apprentissage automatique.',
    'experience.brainx.image1': 'Animation d\'ateliers Machine Learning pour étudiants',
    'experience.brainx.image2': 'Formation pratique en IA et science des données',

    // Projects
    'projects.title': 'Projets remarquables',
    'projects.smartroute': 'SmartRoute - Planification de Transport Intelligente',
    'projects.smartroute.description': 'Application web d\'optimisation d\'itinéraires basée sur les conditions de trafic et météorologiques, intégrant des algorithmes de graphes et des modèles d\'apprentissage automatique.',
    'projects.hackathon': 'Assistant Administratif Intelligent (HackAI)',
    'projects.hackathon.description': 'Assistant conversationnel en darija pour faciliter l\'accès aux informations administratives au Maroc, utilisant le traitement du langage naturel et la reconnaissance vocale.',
    'projects.chatbot': 'Chatbot Cuisine Marocaine',
    'projects.chatbot.description': 'Assistant virtuel intelligent pour la prise de commandes de plats marocains, utilisant le traitement du langage naturel pour l\'interprétation des intentions.',
    'projects.lis': 'Système d\'Information Laboratoire',
    'projects.lis.description': 'Système de gestion de laboratoire avec communication sans fil via ESP32 et synchronisation de données en temps réel.',
    'projects.puzzle': 'Reconstructeur de Puzzles d\'Images par IA',
    'projects.puzzle.description': 'Système intelligent de reconstitution automatique d\'images à partir de fragments désordonnés, utilisant des techniques de vision par ordinateur.',
    'projects.log_classification': 'Système de Classification de Logs',
    'projects.log_classification.description': 'Système robuste de classification de messages de logs utilisant des expressions régulières, des embeddings BERT et un LLM alimenté par Groq, conçu pour la surveillance et l\'analyse.',

    // Compétences
    "skills.title": "Compétences Techniques",
    "skills.languages": "Langages de Programmation",
    "skills.frameworks_libraries": "Frameworks & Bibliothèques",
    "skills.tools_platforms": "Outils & Plateformes",
    "skills.environments": "Environnements de Développement",


    // Certifications
    'certifications.title': 'Certifications',
    'certifications.description': 'Certifications professionnelles démontrant l\'expertise en IA, apprentissage automatique et développement logiciel',
    'certifications.subtitle': 'Certifications professionnelles démontrant l\'expertise en IA, apprentissage automatique et développement logiciel',
    'certifications.ml': 'Spécialisation en Apprentissage Automatique',
    'certifications.python': 'Python pour la Science des Données, IA et Développement',
    'certifications.algorithms': 'Algorithmes de Recherche, Tri et Indexation',
    'certifications.ml.description': 'Programme de spécialisation couvrant le deep learning, les réseaux de neurones et les techniques avancées d\'apprentissage automatique.',
    'certifications.python.description': 'Cours complet sur la programmation Python pour la science des données, le développement en IA et les projets pratiques.',
    'certifications.algorithms.description': 'Cours axé sur les algorithmes, les structures de données, le tri, la recherche et l\'analyse de complexité.',
    'certifications.skillsCovered': 'Compétences couvertes :',
    'certifications.credentialId': 'ID du certificat',
    'certifications.viewCredential': 'Voir le certificat',
    'certifications.learningPlatforms': 'Plateformes d\'apprentissage',
    'certifications.continuousLearning': 'Apprentissage continu',
    'certifications.continuousLearningDesc': 'J\'enrichis constamment mes connaissances par de nouvelles certifications et formations',
    'certifications.viewAllCredentials': 'Voir toutes les certifications',

    'certifications.platforms.coursera': 'Cours en ligne provenant des meilleures universités et entreprises.',
    'certifications.platforms.oracle': 'Oracle Academy propose des parcours d’apprentissage pour développeurs et professionnels IT.',
    'certifications.platforms.datacamp': 'Plateforme d’apprentissage interactive axée sur la data science et l’analyse de données.',
    'certifications.platforms.deepai': 'Cours DeepLearning.AI spécialisés en intelligence artificielle et apprentissage automatique.',
    'certifications.platforms.google': 'Ressources et cours proposés par Google Developers.',
    'certifications.platforms.geeksforgeeks': 'Tutoriels de codage et ressources en informatique pour tous les niveaux.',



    // Awards
    'awards.title': 'Prix et reconnaissances',
    'awards.description': 'Reconnaissance de l\'excellence académique, en compétition et dans le leadership communautaire',
    'awards.participants': 'participants',
    'awards.seeDetails': 'Voir les détails',
    'awards.moreAchievements': 'Découvrir plus de réalisations ?',
    'awards.linkedinCta': 'Consultez mon profil LinkedIn pour un aperçu complet de mes accomplissements',
    'awards.viewLinkedin': 'Voir le profil LinkedIn',
    
    // Individual Awards
    'awards.hackai.title': '7ᵉ place – HackAI 2025',
    'awards.hackai.organization': 'UM6P - 1337',
    'awards.hackai.location': 'Ben Guérir, Maroc',
    'awards.hackai.date': 'Mai 2025',
    'awards.hackai.description': 'Développement d\'un assistant conversationnel en darija pour faciliter l\'accès aux informations administratives au Maroc.',
    'awards.hackai.category': 'Hackathon',
    'awards.hackai.rank': '7ᵉ',
    'awards.hackai.participants': '100+',
    
    'awards.gameofcodes.title': '1ʳᵉ place – Game Of Codes',
    'awards.gameofcodes.organization': 'ENSA Marrakech',
    'awards.gameofcodes.location': 'Marrakech, Maroc',
    'awards.gameofcodes.date': 'Mai 2024',
    'awards.gameofcodes.description': 'Victoire au concours de programmation compétitive centré sur la résolution de problèmes algorithmiques.',
    'awards.gameofcodes.category': 'Concours de programmation',
    'awards.gameofcodes.rank': '1ʳᵉ',
    'awards.gameofcodes.participants': '50+',
    
    'awards.excellence.title': 'Prix d\'Excellence',
    'awards.excellence.organization': 'Banque Populaire Marrakech-Safi',
    'awards.excellence.location': 'Marrakech, Maroc',
    'awards.excellence.date': 'Déc 2021',
    'awards.excellence.description': 'Distinction pour d\'exceptionnelles performances académiques et un potentiel de leadership reconnu.',
    'awards.excellence.category': 'Excellence académique',
    'awards.excellence.rank': 'Lauréat',
    'awards.excellence.participants': 'Régional',

    // Contact
    'contact.title': 'Prenons contact',
    'contact.description': 'Échangeons ensemble sur les opportunités en science des données, intelligence artificielle et développement logiciel.',
    'contact.email': 'E-mail',
    'contact.location': 'Localisation',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.leetcode': 'LeetCode',
    'contact.hackerrank': 'HackerRank'
  },




  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.education': 'التكوين',
    'nav.experience': 'الخبرة',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.certifications': 'الشهادات',
    'nav.awards': 'الجوائز',
    'nav.contact': 'التواصل',

    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'عثمان عبد الرزاق',
    'hero.title': 'طالب هندسة المعلوميات',
    'hero.description': 'طالب في هندسة المعلوميات شغوف ببناء التطبيقات المتكاملة واستكشاف الذكاء الاصطناعي ومعالجة اللغات الطبيعية. متحمس دائماً لاكتشاف أحدث الابتكارات التقنية!',
    'hero.specialization': 'متخصص في علوم البيانات والذكاء الاصطناعي',
    'hero.cta.projects': 'استعرض مشاريعي',
    'hero.contact': 'تواصل معي',
    'hero.viewWork': 'اكتشف أعمالي',
    'hero.cta.contact': 'ابدأ التواصل',

    // About
    'about.title': 'نبذة عني',
    'about.description': 'طالب شغوف في هندسة المعلوميات متخصص في الذكاء الاصطناعي والتعلم الآلي والتطوير الشامل.',

    // Education
    'education.title': 'المسار الأكاديمي',
    'education.eilco.degree': 'شهادة مهندس في المعلوميات',
    'education.eilco.institution': "مدرسة مهندسي الساحل كوت دوبال (EILCO)",
    'education.eilco.location': 'كاليه، فرنسا',
    'education.eilco.period': '2025 – جاري',
    'education.eilco.description': 'برنامج متقدم في هندسة المعلوميات يركز على تطوير البرمجيات ,الذكاء الاصطناعي والأنظمة المدمجة.',

    'education.ensa.degree': 'شهادة مهندس في المعلوميات',
    'education.ensa.institution': 'المدرسة الوطنية للعلوم التطبيقية (ENSA) مراكش',
    'education.ensa.location': 'مراكش، المغرب',
    'education.ensa.period': '2023 – جاري',
    'education.ensa.description': 'مسار شامل في هندسة المعلوميات يغطي تطوير البرمجيات والذكاء الاصطناعي',

    'education.ensa.prep.degree': 'الأقسام التحضيرية المدمجة',
    'education.ensa.prep.institution': 'المدرسة الوطنية للعلوم التطبيقية (ENSA) مراكش',
    'education.ensa.prep.location': 'مراكش، المغرب',
    'education.ensa.prep.period': '2021 – 2023',
    'education.ensa.prep.description': 'تكوين تحضيري مكثف في الرياضيات والفيزياء وأساسيات المعلوميات.',

    'education.status.current': 'جاري',
    'education.status.completed': 'مكتمل',

    // Experience
    'experience.title': 'المسار المهني',
    'experience.professional': 'التجربة المهنية',
    'experience.leadership': 'القيادة والمشاركة',
    'experience.achievements': 'الإنجازات الرئيسية:',
    'experience.seeDetails': 'عرض التفاصيل',
    'experience.noImages': 'لا توجد صور متاحة لهذه التجربة.',
    
    // Professional Experience - Superprof
    'experience.ucam.title': 'مطور باك-إند',
    'experience.ucam.company': 'جامعة القاضي عياض - مديرية أنظمة المعلومات (DSI)',
    'experience.ucam.location': 'مراكش، المغرب',
    'experience.ucam.period': 'يوليوز – غشت 2025',
    'experience.ucam.type': 'تدريب صيفي',
    'experience.ucam.description': 'المساهمة في تطوير الجانب الخلفي لمنصة تتبع وإعداد تقارير أهداف التنمية المستدامة للمؤسسات الجامعية. تصميم وتنفيذ واجهات برمجة تطبيقات REST آمنة لإدارة وعرض المؤشرات.',
    'experience.ucam.achievement1': 'تطوير واجهات REST آمنة باستخدام Django REST Framework و Django ORM',
    'experience.ucam.achievement2': 'تصميم هيكل قاعدة بيانات PostgreSQL وتنفيذ نماذج مؤشرات التنمية المستدامة',
    'experience.ucam.achievement3': 'تطبيق أفضل ممارسات أمان الويب (المصادقة، التفويض، التحقق من المدخلات)',
    'experience.ucam.achievement4': 'التعاون مع فريق الـ DSI في الهندسة المعمارية ومراجعات الكود',
    
    // Professional Experience - DELL
    'experience.dell.title': 'متدرب في هندسة البرمجيات',
    'experience.dell.company': 'DELL Technologies',
    'experience.dell.location': 'الدار البيضاء، المغرب',
    'experience.dell.period': 'منتصف يوليو – منتصف أغسطس 2024',
    'experience.dell.type': 'تدريب',
    'experience.dell.description': 'تدريب انغماسي لمدة 4 أسابيع يركز على هندسة البرمجيات والتحول الرقمي في شركة DELL Technologies.',
    'experience.dell.achievement1': 'تعاون مع فرق متعددة التخصصات',
    'experience.dell.achievement2': 'اكتشاف الحلول التقنية للمؤسسات',
    'experience.dell.achievement3': 'مراقبة عمليات التحول الرقمي',
    'experience.dell.achievement4': 'تعميق فهم سير العمل في المؤسسات',
    'experience.dell.image1': 'العمل في مكتب DELL Technologies بالدار البيضاء',
    'experience.dell.image2': 'منشآت ومساحات العمل في DELL Technologies',
    'experience.dell.image3': 'غلاف تقرير التدريب - توثيق شامل للمشروع',
    
    // Extracurricular Activities - JLM
    'experience.jlm.title': 'مسؤول خلية العمل الاجتماعي',
    'experience.jlm.organization': 'JLM ENSA مراكش',
    'experience.jlm.period': 'نوفمبر 2023 – مايو 2025',
    'experience.jlm.description': 'تنظيم وتنسيق الأنشطة الاجتماعية والتضامنية، خاصة القوافل الإنسانية وزيارات دور الأيتام.',
    'experience.jlm.image1': 'زيارة دار بويدار للأيتام - نشر الفرح والدعم',
    'experience.jlm.image2': 'عمل تضامني في مركز دار الطفل',
    'experience.jlm.image3': 'قافلة إنسانية لقرية دوار تماطيلت',
    
    // Extracurricular Activities - Enactus
    'experience.enactus.title': 'عضو في خلية الرعاية والشراكات',
    'experience.enactus.organization': 'Enactus ENSA مراكش',
    'experience.enactus.period': 'يناير 2022 – أبريل 2025',
    'experience.enactus.description': 'مشاركة فعالة في البحث عن الشركاء وإدارة علاقات الرعاة للجمعية.',
    'experience.enactus.image1': 'تنظيم الهاكاثونات وفعاليات الابتكار',
    'experience.enactus.image2': 'لقاء شراكة مع رواد أعمال محليين',
    
    // Extracurricular Activities - BrainX
    'experience.brainx.title': 'عضو في خلية التكوين والمشاريع',
    'experience.brainx.organization': 'BrainX - ENSA مراكش',
    'experience.brainx.period': 'نوفمبر 2023 – يونيو 2024',
    'experience.brainx.description': 'تنشيط دورات تكوينية وورشات عملية حول التعلم الآلي.',
    'experience.brainx.image1': 'تنشيط ورشات التعلم الآلي للطلاب',
    'experience.brainx.image2': 'تكوين عملي في الذكاء الاصطناعي وعلوم البيانات',

    // Projects
    'projects.title': 'مشاريع مميزة',
    'projects.smartroute': 'SmartRoute - تخطيط النقل الذكي',
    'projects.smartroute.description': 'تطبيق ويب لتحسين المسارات بناءً على ظروف المرور والطقس، يدمج خوارزميات الرسوم البيانية ونماذج التعلم الآلي.',
    'projects.hackathon': 'مساعد إداري ذكي (HackAI)',
    'projects.hackathon.description': 'مساعد محادثة بالدارجة لتسهيل الوصول للمعلومات الإدارية في المغرب، باستخدام معالجة اللغة الطبيعية والتعرف الصوتي.',
    'projects.chatbot': 'روبوت المطبخ المغربي',
    'projects.chatbot.description': 'مساعد افتراضي ذكي لاستقبال طلبات الأطباق المغربية، باستخدام معالجة اللغة الطبيعية لتفسير النوايا.',
    'projects.lis': 'نظام معلومات المختبر',
    'projects.lis.description': 'نظام إدارة المختبر مع تواصل لاسلكي عبر ESP32 ومزامنة البيانات في الوقت الفعلي.',
    'projects.puzzle': 'مُعيد تركيب الألغاز المصورة بالذكاء الاصطناعي',
    'projects.puzzle.description': 'نظام ذكي لإعادة تركيب الصور تلقائياً من قطع مبعثرة، باستخدام تقنيات الرؤية الحاسوبية.',
    'projects.log_classification': 'نظام تصنيف السجلات',
    'projects.log_classification.description': 'نظام قوي لتصنيف رسائل السجلات باستخدام التعبيرات النمطية وتضمينات BERT ونموذج لغوي مدعوم من Groq، مُصمم للمراقبة والتحليل.',

    // المهارات
    "skills.title": "المهارات التقنية",
    "skills.languages": "لغات البرمجة",
    "skills.frameworks_libraries": "الأطر والمكتبات",
    "skills.tools_platforms": "الأدوات والمنصات",
    "skills.environments": "بيئات التطوير",


    // Certifications
    'certifications.title': 'الشهادات',
    'certifications.description': 'شهادات مهنية تُظهر الخبرة في الذكاء الاصطناعي والتعلم الآلي وتطوير البرمجيات',
    'certifications.subtitle': 'شهادات مهنية تُظهر الخبرة في الذكاء الاصطناعي والتعلم الآلي وتطوير البرمجيات',
    'certifications.ml': 'تخصص في التعلم الآلي',
    'certifications.python': 'بايثون لعلوم البيانات والذكاء الاصطناعي والتطوير',
    'certifications.algorithms': 'خوارزميات البحث والترتيب والفهرسة',
    'certifications.ml.description': 'برنامج تخصصي يغطي التعلم العميق، الشبكات العصبية، وتقنيات التعلم الآلي المتقدمة.',
    'certifications.python.description': 'دورة شاملة في برمجة بايثون لعلوم البيانات وتطوير الذكاء الاصطناعي والمشاريع العملية.',
    'certifications.algorithms.description': 'دورة تركز على الخوارزميات، هياكل البيانات، الفرز، البحث، وتحليل التعقيد.',
    'certifications.skillsCovered': 'المهارات المشمولة:',
    'certifications.credentialId': 'رقم الشهادة',
    'certifications.viewCredential': 'عرض الشهادة',
    'certifications.learningPlatforms': 'منصات التعلم',
    'certifications.continuousLearning': 'التعلم المستمر',
    'certifications.continuousLearningDesc': 'أعمل دائماً على توسيع معرفتي من خلال شهادات ودورات جديدة',
    'certifications.viewAllCredentials': 'عرض جميع الشهادات',

    'certifications.platforms.coursera': 'دورات عبر الإنترنت من أفضل الجامعات والشركات.',
    'certifications.platforms.oracle': 'توفر Oracle Academy مسارات تعلم للمطورين والمحترفين في تكنولوجيا المعلومات.',
    'certifications.platforms.datacamp': 'منصة تعلم تفاعلية تركز على علوم البيانات والتحليلات.',
    'certifications.platforms.deepai': 'دورات DeepLearning.AI المتخصصة في الذكاء الاصطناعي والتعلم الآلي.',
    'certifications.platforms.google': 'موارد ودورات من Google Developers.',
    'certifications.platforms.geeksforgeeks': 'دروس برمجية وموارد في علوم الحاسوب لجميع المستويات.',

    // Awards
    'awards.title': 'الجوائز والتقديرات',
    'awards.description': 'تقدير للتميز الأكاديمي والمسابقات والقيادة المجتمعية',
    'awards.participants': 'مشارك',
    'awards.seeDetails': 'عرض التفاصيل',
    'awards.moreAchievements': 'تريد اكتشاف المزيد من الإنجازات؟',
    'awards.linkedinCta': 'تفضل بزيارة ملفي الشخصي على LinkedIn لاطلاع شامل على إنجازاتي',
    'awards.viewLinkedin': 'عرض الملف الشخصي على LinkedIn',
    
    // Individual Awards
    'awards.hackai.title': 'المركز السابع – HackAI 2025',
    'awards.hackai.organization': 'UM6P - 1337',
    'awards.hackai.location': 'بن جرير، المغرب',
    'awards.hackai.date': 'مايو 2025',
    'awards.hackai.description': 'تطوير مساعد محادثة بالدارجة لتسهيل الوصول للمعلومات الإدارية في المغرب.',
    'awards.hackai.category': 'هاكاثون',
    'awards.hackai.rank': 'السابع',
    'awards.hackai.participants': '100+',
    
    'awards.gameofcodes.title': 'المركز الأول – Game Of Codes',
    'awards.gameofcodes.organization': 'ENSA مراكش',
    'awards.gameofcodes.location': 'مراكش، المغرب',
    'awards.gameofcodes.date': 'مايو 2024',
    'awards.gameofcodes.description': 'الفوز في مسابقة البرمجة التنافسية المتخصصة في حل المشكلات الخوارزمية.',
    'awards.gameofcodes.category': 'مسابقة برمجة',
    'awards.gameofcodes.rank': 'الأول',
    'awards.gameofcodes.participants': '50+',
    
    'awards.excellence.title': 'جائزة التميز',
    'awards.excellence.organization': 'البنك الشعبي مراكش-آسفي',
    'awards.excellence.location': 'مراكش، المغرب',
    'awards.excellence.date': 'ديسمبر 2021',
    'awards.excellence.description': 'تقدير للأداء الأكاديمي الاستثناري وإمكانيات القيادة المعترف بها.',
    'awards.excellence.category': 'التميز الأكاديمي',
    'awards.excellence.rank': 'فائز',
    'awards.excellence.participants': 'جهوي',

    // Contact
    'contact.title': 'لنتواصل',
    'contact.description': 'لنتبادل الأفكار حول الفرص في علوم البيانات والذكاء الاصطناعي وتطوير البرمجيات.',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    'contact.linkedin': 'لينكد إن',
    'contact.github': 'جيت هاب',
    'contact.leetcode': 'ليت كود',
    'contact.hackerrank': 'هاكر رانك'
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