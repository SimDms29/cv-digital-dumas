import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Phone, MapPin, Code, Database, Rocket, Wrench } from 'lucide-react';
import './App.css';

const content = {
  fr: {
    title: "Simon Dumas",
    subtitle: "Développeur Full Stack, \nMaster Ingénierie du Logiciel",
    download: "Télécharger PDF",
    status: "Disponible",
    contact: "Contact",
    license: "🚗 Permis B",
    skills: "Compétences",
    languages: "Langues",
    langItems: [
      { flag: "🇫🇷", name: "Français", level: "Langue maternelle" },
      { flag: "🇬🇧", name: "Anglais", level: "TOEIC 965 pts, Mai 2025\nFCL 055 VFR Niveau 5" }
    ],
    sections: {
      profil: {
        title: "Profil",
        text: "Ce qui me motive dans le code, c'est de créer de la valeur concrète. En parallèle de mes études, j'ai lancé WingFuel, un SaaS de gestion carburant pour aéroclubs. Passionné par l'aviation, j'ai développé une approche rigoureuse et une capacité à gérer le stress, des qualités que j'applique dans mes projets tech et mes ambitions entrepreneuriales. Disponible en freelance, remote de préférence, ouvert aux opportunités en France et à l'international."
      },
      services: {
        title: "Services Freelance",
        intro: "En complément de mon parcours académique et de mes projets personnels comme WingFuel, je propose mes services en freelance pour transformer vos besoins métiers en solutions numériques robustes.",
        cards: [
          { title: "Développement Web & SaaS", text: "Conception d'applications full-stack modernes avec React, Node.js ou Python. De l'idée à la mise en production." },
          { title: "Architecture de Données", text: "Optimisation de bases de données, normalisation SQL et traitement de flux complexes (AIXM/XML)." },
          { title: "Déploiement", text: "Configuration de serveurs (VPS), conteneurisation Docker et mise en place de pipelines de déploiement fiables." },
          { title: "Maintenance & Évolutions", text: "Forfaits de maintenance personnalisés : correctifs de sécurité et ajout de fonctionnalités." }
        ]
      },
      experience: {
        title: "Expérience Professionnelle",
        items: [
          {
            date: "Avril 2026 - Aujourd'hui",
            job: "Stagiaire Data Engineer",
            company: "CRNA-Ouest, DGAC - Brest",
            tasks: [
              "Modernisation de l'architecture : Transition d'un flux ETL monolithique vers une architecture ELT agile",
              "Ingestion de flux complexes : Développement de pipelines Python pour le chargement de données XML (AIXM) brutes en Landing Zone (PostgreSQL JSONB)",
              "Modélisation dbt : Conception de modèles SQL modulaires pour le nettoyage, la résolution de FK et la création de Data Marts",
              "Qualité & Performance : Implémentation de tests dbt automatisés et optimisation des performances via le moteur SQL natif",
              "Technologies : dbt, PostgreSQL (JSONB), Python, AIXM/XML, SQL"
            ]
          },
          {
            date: "Avril - Juin 2025",
            job: "Stagiaire Développement Informatique",
            company: "CRNA-Ouest, DGAC - Brest",
            tasks: [
              "Développement full stack d'un outil web pour la gestion des zones militaires",
              "Collaboration multi-sites (Brest, Rennes, Nantes) pour la sécurité des données",
              "Technologies : Python, WebSockets, MySQL, JS"
            ]
          }
        ]
      },
      projets: {
        title: "Projets",
        items: [
          {
            date: "2025 - Aujourd'hui",
            title: "WingFuel — wingfuel.fr",
            subtitle: "Projet Personnel · SaaS",
            tasks: [
              "SaaS de gestion carburant pour aéroclubs : remplace les feuilles Excel",
              "Saisie par QR code, suivi de stock, exports comptables et dossier TICPE Douanes",
              "Déployé en production sur VPS, utilisé par le Quiberon Air Club",
              "Technologies : React, Node.js, Docker, VPS"
            ]
          }
        ]
      },
      formation: {
        title: "Formation",
        items: [
          { date: "2025 - 2027", title: "Master Informatique", school: "UBO - Brest", desc: "Ingénierie du logiciel" },
          { date: "2022 - 2025", title: "Licence en Informatique", school: "UBO - Brest", desc: "Fondements et applications" },
          { date: "2022", title: "Baccalauréat Général", school: "Lycée de l'Iroise - Brest", desc: "Spécialités Mathématiques et Physique, Mention Bien." }
        ]
      },
      activites: {
        title: "Activités Extracurriculaires",
        ppl: {
          date: "2023",
          title: "Licence de Pilote Privé (PPL)",
          school: "Aéroclub Brest Finistère",
          desc: "140+ heures de vol. Qualifications : EFIS, Pas Variable, TW. FCL 055 (Anglais radio)."
        }
      }
    },
    footer: "© 2026 Simon Dumas - Tous droits réservés"
  },
  en: {
    title: "Simon Dumas",
    subtitle: "Software Engineer\nMaster's in Software Engineering",
    download: "Download PDF",
    status: "Available",
    contact: "Contact",
    license: "🚗 Full Driver's License",
    skills: "Skills",
    languages: "Languages",
    langItems: [
      { flag: "🇫🇷", name: "French", level: "Native speaker" },
      { flag: "🇬🇧", name: "English", level: "TOEIC 965 pts, May 2025\nFCL 055 VFR Level 5 (ICAO)" }
    ],
    sections: {
      profil: {
        title: "Profile",
        text: "I am driven by building tangible value through code. Alongside my studies, I launched WingFuel, a fuel management SaaS for flying clubs. My passion for aviation has instilled in me a rigorous approach and the ability to perform under pressure—qualities I apply to my tech projects and entrepreneurial goals. Available for freelance, preferably remote, open to opportunities in France and worldwide."
      },
      services: {
        title: "Freelance Services",
        intro: "In addition to my academic background and personal projects like WingFuel, I offer freelance services to transform business needs into robust digital solutions.",
        cards: [
          { title: "Web & SaaS Development", text: "Designing modern full-stack applications with React, Node.js, or Python. From concept to production." },
          { title: "Data Architecture", text: "Database optimization, SQL normalization, and complex data flow processing (AIXM/XML)." },
          { title: "Deployment ", text: "Server configuration (VPS), Docker containerization, and reliable deployment pipelines." },
          { title: "Maintenance & Support", text: "Custom maintenance packages: security patches, technical updates, and feature additions." }
        ]
      },
      experience: {
        title: "Work Experience",
        items: [
          {
            date: "April 2026 - Present",
            job: "Data Engineer Intern",
            company: "CRNA-Ouest, DGAC (French ATC) - Brest",
            tasks: [
              "Architecture Modernization: Transitioning from a monolithic ETL flow to an agile ELT architecture",
              "Complex Data Ingestion: Developing Python pipelines for raw XML (AIXM) data loading into a PostgreSQL Landing Zone (JSONB)",
              "dbt Modeling: Designing modular SQL models for data cleaning, FK resolution, and Data Mart creation",
              "Quality & Performance: Implementing automated dbt tests and optimizing performance using the native SQL engine",
              "Technologies: dbt, PostgreSQL (JSONB), Python, AIXM/XML, SQL"
            ]
          },
          {
            date: "April - June 2025",
            job: "Software Development Intern",
            company: "CRNA-Ouest, DGAC - Brest",
            tasks: [
              "Developed a web application for managing military airspace data",
              "Collaborated with IT teams across Brest, Rennes, and Nantes for data security",
              "Technologies: Python, WebSockets, MySQL, JS"
            ]
          }
        ]
      },
      projets: {
        title: "Projects",
        items: [
          {
            date: "2025 - Present",
            title: "WingFuel — wingfuel.fr",
            subtitle: "Personal Project · SaaS",
            tasks: [
              "Fuel management SaaS for flying clubs: digitizing manual logs",
              "Pilot entry via QR code, stock tracking, accounting exports and tax compliance",
              "Live in production on VPS, currently used by Quiberon Air Club",
              "Technologies: React, Node.js, Docker, VPS Deployment"
            ]
          }
        ]
      },
      formation: {
        title: "Education",
        items: [
          { date: "2025 - 2027", title: "Master’s in Computer Science", school: "UBO - Brest", desc: "Software Engineering track." },
          { date: "2022 - 2025", title: "Bachelor’s in Computer Science", school: "UBO - Brest", desc: "Focus on programming, algorithms, and practical applications." },
          { date: "2022", title: "High School Diploma", school: "Lycée de l'Iroise - Brest", desc: "Specializing in Math & Physics, graduated with Honors." }
        ]
      },
      activites: {
        title: "Extracurricular Activities",
        ppl: {
          date: "2023",
          title: "Private Pilot License (PPL)",
          school: "Brest Finistère Flying Club",
          desc: "140+ flight hours. Ratings: EFIS, Variable Pitch, Tailwheel. FCL 055 (English Radio Proficiency)."
        }
      }
    },
    footer: "© 2026 Simon Dumas - All rights reserved"
  }
};

const skillsList = [
  'Software Engineering', 'Java', 'Python', 'Git', 'HTML/CSS/JS',
  'SQL', 'WebSockets', 'MySQL', 'Docker', 'VPS / Prod', 'React'
];

export default function CVApp() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('fr');
  const [activeSection, setActiveSection] = useState('');

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profil', 'services', 'experience', 'projets', 'formation', 'activites'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
  <div className="header-content">
    <h1 className="header-title">{t.title}</h1>
    <div className="header-actions">
      <button onClick={() => window.print()} className="btn-download">
        <Download size={18} />
        <span className="btn-text">{t.download}</span>
      </button>
      
      {/* Bouton de Langue avec Drapeaux */}
      <button 
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} 
        className="btn-theme" 
        title={lang === 'fr' ? "Switch to English" : "Passer en Français"}
      >
        <span style={{ fontSize: '20px', lineHeight: '1' }}>
          {lang === 'fr' ? '🇫🇷' : '🇬🇧'}
        </span>
        <span style={{ marginLeft: '8px', fontSize: '14px', fontWeight: 'bold' }}>
          {lang.toUpperCase()}
        </span>
      </button>

      <button onClick={() => setDarkMode(!darkMode)} className="btn-theme">
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  </div>
</header>

      <div className="main-wrapper">
        <div className="grid-container">
          <aside className="sidebar">
            <div className="avatar-container">
              <div className="avatar">
                <img src="/avatar.JPG" alt={t.title} className="avatar-image" />
              </div>
              <div className="availability-badge">{t.status}</div>
            </div>

            <h2 className="sidebar-name">{t.title}</h2>
            <p className="sidebar-subtitle">{t.subtitle}</p>

            <div className="sidebar-section">
              <h3 className="section-label">{t.contact}</h3>
              <a href="mailto:dumassimon22@gmail.com" className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span className="contact-text">dumassimon22@gmail.com</span>
              </a>
              <a href="tel:0769684922" className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span className="contact-text">07 69 68 49 22</span>
              </a>
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span className="contact-text">22 bis rue Lacordaire<br />29200 Brest</span>
              </div>
              <div className="contact-item">
                <span className="contact-text">{t.license}</span>
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="section-label">{t.skills}</h3>
              <div className="skills-container">
                {skillsList.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="section-label">{t.languages}</h3>
              <div className="languages-container">
                {t.langItems.map((item, i) => (
                  <div key={i} className="language-item">
                    <div className="language-header">
                      <span>{item.flag}</span>
                      <span className="language-name">{item.name}</span>
                    </div>
                    <p className="language-level" style={{ whiteSpace: 'pre-line' }}>{item.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="main-content">
            <section id="profil" className={`content-section ${activeSection === 'profil' ? 'active' : ''}`}>
              <h2 className="section-title">{t.sections.profil.title}</h2>
              <p className="section-text">{t.sections.profil.text}</p>
            </section>

            <section id="services" className={`content-section ${activeSection === 'services' ? 'active' : ''}`}>
              <h2 className="section-title">{t.sections.services.title}</h2>
              <p className="section-text">{t.sections.services.intro}</p>
              <div className="services-grid">
                {t.sections.services.cards.map((card, i) => (
                  <div key={i} className="service-card">
                    {i === 0 && <Code className="service-icon" size={24} />}
                    {i === 1 && <Database className="service-icon" size={24} />}
                    {i === 2 && <Rocket className="service-icon" size={24} />}
                    {i === 3 && <Wrench className="service-icon" size={24} />}
                    <h3 className="service-title">{card.title}</h3>
                    <p className="service-text">{card.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="experience" className={`content-section ${activeSection === 'experience' ? 'active' : ''}`}>
              <h2 className="section-title">{t.sections.experience.title}</h2>
              <div className="timeline-list-container">
                {t.sections.experience.items.map((exp, i) => (
                  <div key={i} className="timeline">
                    <div className={`timeline-dot ${i === 0 ? 'primary' : 'secondary'}`} />
                    <div className="timeline-content">
                      <span className="timeline-badge">{exp.date}</span>
                      <h3 className="timeline-title">{exp.job}</h3>
                      <p className="timeline-subtitle">{exp.company}</p>
                      <ul className="timeline-list">
                        {exp.tasks.map((task, j) => <li key={j}>{task}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="projets" className={`content-section ${activeSection === 'projets' ? 'active' : ''}`}>
              <h2 className="section-title">{t.sections.projets.title}</h2>
              <div className="timeline-list-container">
                {t.sections.projets.items.map((proj, i) => (
                  <div key={i} className="timeline">
                    <div className="timeline-dot accent" />
                    <div className="timeline-content">
                      <span className="timeline-badge accent">{proj.date}</span>
                      <h3 className="timeline-title">{proj.title}</h3>
                      <p className="timeline-subtitle">{proj.subtitle}</p>
                      <ul className="timeline-list">
                        {proj.tasks.map((task, j) => <li key={j}>{task}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
                {/* On garde les projets UBO simplifiés ou on les ajoute au dictionnaire si besoin */}
              </div>
            </section>

            <section id="formation" className={`content-section ${activeSection === 'formation' ? 'active' : ''}`}>
              <h2 className="section-title">{t.sections.formation.title}</h2>
              <div className="timeline-list-container">
                {t.sections.formation.items.map((form, i) => (
                  <div key={i} className="timeline">
                    <div className="timeline-dot primary" />
                    <div className="timeline-content">
                      <span className="timeline-badge">{form.date}</span>
                      <h3 className="timeline-title">{form.title}</h3>
                      <p className="timeline-subtitle">{form.school}</p>
                      <p className="timeline-description">{form.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="activites" className={`content-section ${activeSection === 'activites' ? 'active' : ''}`}>
              <h2 className="section-title">{t.sections.activites.title}</h2>
              <div className="activites-layout">
                <div className="timeline">
                  <div className="timeline-dot accent" />
                  <div className="timeline-content">
                    <span className="timeline-badge accent">{t.sections.activites.ppl.date}</span>
                    <h3 className="timeline-title">{t.sections.activites.ppl.title}</h3>
                    <p className="timeline-subtitle">{t.sections.activites.ppl.school}</p>
                    <p className="timeline-description">{t.sections.activites.ppl.desc}</p>
                  </div>
                </div>
                <div className="avion-photo-wrapper">
                  <img src="/avion.PNG" alt="Flight" className="avion-photo" />
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2 className="section-title">References</h2>
              <div className="references-grid">
                <div className="reference-card reference-card--full">
                  <h3 className="reference-name">Damien Archer</h3>
                  <p className="reference-company">CRNA Ouest, Pôle DATA</p>
                  <p className="reference-info">📧 damien.archer@aviation-civile.gouv.fr</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}