import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Phone, MapPin, Code, Database, Rocket, Wrench } from 'lucide-react';
import './App.css';

const content = {
  fr: {
    title: "Simon Dumas",
    subtitle: "Data Engineer Junior \n Développeur Python Full Stack",
    download: "Télécharger PDF",
    status: "Disponible pour missions",
    contact: "Contact",
    license: "Permis B",
    skills: "Expertise Technique",
    languages: "Langues",
    langItems: [
      { flag: "🇫🇷", name: "Français", level: "Langue maternelle" },
      { flag: "🇬🇧", name: "Anglais", level: "TOEIC 965 pts (Mai 2025)\nFCL 055 VFR Niveau 5" }
    ],
    sections: {
      profil: {
        title: "Profil",
        text: "Expert en ingénierie de données et développement de solutions SaaS métier. Mon parcours à la DGAC m'a permis de me spécialiser dans l'optimisation de pipelines ETL critiques et le traitement de standards complexes (AIXM). Passionné par l'efficacité technique, je transforme des problématiques métier lourdes en architectures fluides, performantes et scalables."
      },
      services: {
        title: "Services Freelance",
        intro: "J'interviens sur la modernisation de vos flux de données et la création d'applications métier à forte valeur ajoutée.",
        cards: [
          { title: "Ingénierie de Données", text: "Industrialisation et optimisation de pipelines ETL/ELT (Python). Ingestion de flux complexes (XML, API) et tuning de bases de données." },
          { title: "Développement SaaS & API", text: "Conception d'applications full-stack avec FastAPI (Python) et React. Architecture robuste et sécurisée." },
          { title: "Solutions Temps Réel", text: "Dashboards interactifs et outils de monitoring avec mise à jour instantanée via WebSockets." },
          { title: "DevOps & Infrastructure", text: "Déploiement sur VPS, gestion de serveurs Linux et conteneurisation Docker" }
        ]
      },
      experience: {
        title: "Expérience Professionnelle",
        items: [
          {
            date: "Avril 2026 - Présent",
            job: "Data Engineer (Mission DGAC)",
            company: "CRNA-Ouest, DGAC - Brest",
            tasks: [
              "Optimisation de l'ETL : Refonte complète et industrialisation d'un flux monolithique pour le traitement de données aéronautiques",
              "Performance Data : Gain de performance majeur via le tuning de requêtes SQL complexes et l'optimisation de scripts Python",
              "Ingestion de flux critiques : Gestion de pipelines haute disponibilité pour le chargement de données AIXM (XML) vers PostgreSQL",
              "Qualité & Fiabilité : Mise en place d'un framework de tests de cohérence et de validation de données automatisée",
              "Infrastructure : Exploitation et configuration de ressources serveur dédiées pour le traitement de données à grande échelle"
            ]
          },
          {
            date: "Avril - Juin 2025",
            job: "Développeur Full Stack (Mission DGAC)",
            company: "CRNA-Ouest, DGAC - Brest",
            tasks: [
              "Conception d'une application de monitoring temps réel pour la gestion des zones militaires",
              "Flux de données Live : Implémentation de WebSockets pour la synchronisation instantanée des données d'exploitation",
              "Digitalisation métier : Remplacement d'un processus critique manuel par une solution numérique centralisée",
              "Technologies : Python, WebSockets, MySQL, JavaScript"
            ]
          }
        ]
      },
      projets: {
        title: "Projets & SaaS",
        items: [
          {
            date: "2025 - Présent",
            title: "WingFuel — Gestion Logistique SaaS",
            subtitle: "Fondateur & Développeur · wingfuel.fr",
            url: "https://wingfuel.fr",
            tasks: [
              "Architecture Multi-tenant : Développement d'un SaaS complet de gestion carburant (Aviation Générale)",
              "Algorithmique métier : Moteur de calcul de stock et de valorisation financière (PMP).",
              "Autonomie technique : Gestion totale du cycle de vie, du développement au déploiement en production sur VPS",
              "Usage réel : Solution adoptée et utilisée quotidiennement par des pilotes d'aeroclub."
            ]
          }
        ]
      },
      formation: {
        title: "Formation",
        items: [
          { date: "2025 - 2027", title: "Master Informatique", school: "UBO - Brest", desc: "Ingénierie du Logiciel" },
          { date: "2022 - 2025", title: "Licence en Informatique", school: "UBO - Brest", desc: "Fondements, algorithmique et bases de données" },
          { date: "2022", title: "Baccalauréat Général", school: "Lycée de l'Iroise - Brest", desc: "Spécialités Mathématiques et Physique, Mention Bien." }
        ]
      },
      activites: {
        title: "Activités & Engagement",
        ppl: {
          date: "2023",
          title: "Licence de Pilote Privé (PPL)",
          school: "Aéroclub Brest Finistère",
          desc: "140+ heures de vol. Qualifications : EFIS, Pas Variable, Train Classique. FCL 055 (Anglais radio)."
        }
      }
    },
    footer: "© 2026 Simon Dumas - Expert Data & Software"
  },
  en: {
    title: "Simon Dumas",
    subtitle: "Data Engineer & Full Stack Python Developer",
    download: "Download PDF",
    status: "Available for projects",
    contact: "Contact",
    license: "Driving License",
    skills: "Technical Expertise",
    languages: "Languages",
    langItems: [
      { flag: "🇫🇷", name: "French", level: "Native speaker" },
      { flag: "🇬🇧", name: "English", level: "TOEIC 965 pts (May 2025)\nFCL 055 VFR Level 5 (ICAO)" }
    ],
    sections: {
      profil: {
        title: "Profile",
        text: "Expert in data engineering and SaaS development. My experience at the French DGAC focuses on optimizing critical ETL pipelines and processing complex standards (AIXM). Driven by technical efficiency, I transform heavy business logic into fluid, high-performance, and scalable architectures."
      },
      services: {
        title: "Freelance Services",
        intro: "I help businesses modernize their data flows and build high-value custom software solutions.",
        cards: [
          { title: "Data Engineering", text: "ETL/ELT pipeline industrialization and optimization (Python). Complex data ingestion (XML, API) and database tuning." },
          { title: "SaaS & API Dev", text: "Full-stack application design using FastAPI (Python) and React. Focused on performance and security." },
          { title: "Real-time Solutions", text: "Interactive monitoring dashboards with instant data updates via WebSockets." },
          { title: "DevOps & Infra", text: "VPS management, Linux server configuration and Docker containerization" }
        ]
      },
      experience: {
        title: "Work Experience",
        items: [
          {
            date: "April 2026 - Present",
            job: "Data Engineer (DGAC Mission)",
            company: "CRNA-Ouest, French ATC - Brest",
            tasks: [
              "ETL Optimization: Complete overhaul and industrialization of a monolithic flow for aeronautical data",
              "Data Performance: Significant performance gains through complex SQL tuning and Python script optimization",
              "Critical Flow Ingestion: Managing high-availability pipelines for AIXM (XML) ingestion into PostgreSQL",
              "Quality & Reliability: Implementing an automated data validation and consistency testing framework",
              "Infrastructure: Managing and configuring dedicated server resources for large-scale data processing"
            ]
          },
          {
            date: "April - June 2025",
            job: "Full Stack Developer (DGAC Mission)",
            company: "CRNA-Ouest, French ATC - Brest",
            tasks: [
              "Developed a real-time monitoring application for military airspace data",
              "Live Data Flows: Implemented WebSockets for instant synchronization of operational data",
              "Digital Impact: Replaced a critical manual process with a centralized digital solution",
              "Stack: Python, WebSockets, MySQL, JavaScript"
            ]
          }
        ]
      },
      projets: {
        title: "Projects & SaaS",
        items: [
          {
            date: "2025 - Present",
            title: "WingFuel — Logistics SaaS",
            subtitle: "Founder & Lead Developer · wingfuel.fr",
            url: "https://wingfuel.fr",
            tasks: [
              "Multi-tenant Architecture: Full-stack development of a fuel management SaaS for general aviation",
              "Business Logic: Implementation of stock tracking and Weighted Average Cost algorithms",
              "Full Ownership: Managing the entire lifecycle from development to production deployment on VPS",
              "Real-world Impact: Currently live and used daily by air clubs pilots."
            ]
          }
        ]
      },
      formation: {
        title: "Education",
        items: [
          { date: "2025 - 2027", title: "Master's in Computer Science", school: "UBO - Brest", desc: "Software Engineering track" },
          { date: "2022 - 2025", title: "Bachelor's in Computer Science", school: "UBO - Brest", desc: "Algorithms and database foundations" },
          { date: "2022", title: "High School Diploma", school: "Lycée de l'Iroise - Brest", desc: "Math & Physics major, graduated with Honors." }
        ]
      },
      activites: {
        title: "Skills & Interests",
        ppl: {
          date: "2023",
          title: "Private Pilot License (PPL)",
          school: "Brest Finistère Flying Club",
          desc: "140+ flight hours. Ratings: EFIS, Variable Pitch, Tailwheel. FCL 055 (English Proficiency)."
        }
      }
    },
    footer: "© 2026 Simon Dumas - Data & Software Expert"
  }
};

const skillsList = [
  'Data Engineering', 'Python', 'FastApi', 'SQL Optimization', 'PostgreSQL', 
  'ETL Industrialization', 'Architecture SaaS', 'React', 'TypeScript', 
  'WebSockets', 'Docker', 'Linux / VPS Management' 
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
            <p className="sidebar-subtitle" style={{ whiteSpace: 'pre-line' }}>{t.subtitle}</p>

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
                <span className="contact-text">Brest, France</span>
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
              <p className="section-text" style={{ marginBottom: '1.5rem' }}>{t.sections.services.intro}</p>
              <div className="services-grid">
                {t.sections.services.cards.map((card, i) => (
                  <div key={i} className="service-card">
                    {i === 0 && <Database className="service-icon" size={24} />}
                    {i === 1 && <Code className="service-icon" size={24} />}
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
                      <h3 className="timeline-title">
                        {proj.url ? (
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: 'inherit',
                              textDecoration: 'none',
                              borderBottom: '1px solid currentColor',
                              paddingBottom: '1px',
                              opacity: 0.85,
                              transition: 'opacity 0.2s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '0.85'}
                          >
                            {proj.title}
                          </a>
                        ) : proj.title}
                      </h3>
                      <p className="timeline-subtitle">{proj.subtitle}</p>
                      <ul className="timeline-list">
                        {proj.tasks.map((task, j) => <li key={j}>{task}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
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