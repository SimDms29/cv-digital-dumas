import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Download, Mail, Phone, MapPin, Code, Database, Rocket, Wrench, ExternalLink, Globe } from 'lucide-react';
import './App.css';

function useTypewriter(text, speed = 38) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text]);
  return displayed;
}

function CountUp({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    started.current = false;
    setVal(0);
  }, [to]);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 1200, 1);
          setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' in-view' : ''}${className ? ' ' + className : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const content = {
  fr: {
    title: "Simon Dumas",
    subtitle: "Data Engineer Junior\nDéveloppeur Python Full Stack",
    download: "Télécharger PDF",
    status: "Disponible pour missions",
    contact: "Contact",
    license: "Permis B",
    skills: "Expertise Technique",
    languages: "Langues",
    statLabels: { flight: 'h de vol', internships: 'stages DGAC' },
    langItems: [
      { flag: "🇫🇷", name: "Français", level: "Langue maternelle" },
      { flag: "🇬🇧", name: "Anglais", level: "TOEIC 965 pts (Mai 2025)\nFCL 055 VFR Niveau 5" }
    ],
    sections: {
      profil: {
        title: "Profil",
        text: "Data engineer junior, mon parcours à la DGAC m'a permis de me spécialiser dans l'optimisation de pipelines ETL et le traitement de données complexes (XML / SQL)."
      },
      services: {
        title: "Compétences",
        subtitle: "Disponible pour des missions de courtes durées",
        intro: "J'interviens sur la modernisation de flux de données et la création d'applications métier à forte valeur ajoutée.",
        cards: [
          { title: "Ingénierie de Données", text: "Industrialisation et optimisation de pipelines ETL/ELT (Python). Ingestion de flux complexes (XML, API)." },
          { title: "Développement SaaS & API", text: "Conception d'applications full-stack avec FastAPI (Python) et React. Architecture robuste et sécurisée." },
          { title: "Solutions Temps Réel", text: "Dashboards interactifs et outils de monitoring avec mise à jour instantanée via WebSockets." },
          { title: "Infrastructure", text: "Déploiement sur VPS, conteneurisation Docker" }
        ]
      },
      experience: {
        title: "Expérience Professionnelle",
        items: [
          {
            date: "Avril 2026 - Présent",
            job: "Data Engineer (Stage DGAC)",
            company: "CRNA-Ouest, DGAC - Brest",
            tasks: [
              "Optimisation de l'ETL : Refonte complète et industrialisation d'un flux monolithique pour le traitement de données aéronautiques",
              "Performance Data : Gain de performance majeur via le tuning de requêtes SQL complexes et l'optimisation de scripts Python",
              "Qualité & Fiabilité : Mise en place d'un ensemble de tests de cohérence et de validation de données automatisée",
              "Infrastructure : Exploitation et configuration de ressources serveur dédiées pour le traitement de données à grande échelle"
            ]
          },
          {
            date: "Avril - Juin 2025",
            job: "Développeur Full Stack (Stage DGAC)",
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
        title: "Projets",
        items: [
          {
            badgeLabel: "SaaS · Production",
            badgeType: "production",
            title: "WingFuel — Gestion Logistique SaaS",
            subtitle: "Fondateur & Développeur · wingfuel.fr",
            desc: "SaaS complet de gestion carburant pour l'Aviation Générale. Architecture multi-tenant, moteur de valorisation financière (PMP), déploiement VPS — utilisé quotidiennement par des pilotes d'aéroclub.",
            stack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "VPS"],
            link: { url: "https://wingfuel.fr", label: "wingfuel.fr →" }
          },
          {
            badgeLabel: "Projet Personnel · En production",
            badgeType: "personal",
            title: "WingJobs",
            subtitle: "Veille Recrutement PNT · jobs.wingfuel.fr",
            desc: "Dashboard automatisé qui agrège les offres d'emploi pilote de 7 compagnies européennes. Scraping multi-sources toutes les 12h, API REST de filtrage, notifications Discord et déclenchement manuel.",
            stack: ["Python", "FastAPI", "Web Scraping", "REST API", "Discord API"],
            link: { url: "https://jobs.wingfuel.fr", label: "jobs.wingfuel.fr →" }
          }
        ],
        secondary: [
          {
            badgeLabel: "Académique",
            badgeType: "academic",
            title: "UBHome",
            subtitle: "Plateforme SaaS Étudiante · M1, équipe de 3",
            desc: "Hub étudiant : forum, messagerie, calendrier interactif CRUD, profils et dashboards par rôle. Auth sociale via django-allauth.",
            stack: ["Django 5", "PostgreSQL", "Tailwind CSS", "JavaScript"],
            link: { url: "https://github.com/SimDms29/UBHome", label: "GitHub →" }
          }
        ],
        mention: {
          label: "Également",
          title: "java-idl-network-architecture",
          desc: "Architecture réseau Java · Design Patterns GoF : Visitor, Factory, Facade, Observer · JUnit",
          url: "https://github.com/SimDms29/java-idl-network-architecture"
        }
      },
      formation: {
        title: "Formation",
        items: [
          { date: "2025 - 2027", title: "Master ILIADE", school: "UBO - Brest", desc: "Ingénierie du Logiciel" },
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
    footer: "© 2026 Simon Dumas - Junior Data & Software"
  },
  en: {
    title: "Simon Dumas",
    subtitle: "Junior Data Engineer & Full Stack Python Developer",
    download: "Download PDF",
    status: "Available for projects",
    contact: "Contact",
    license: "Driving License",
    skills: "Technical Expertise",
    languages: "Languages",
    statLabels: { flight: 'flight hrs', internships: 'DGAC terms' },
    langItems: [
      { flag: "🇫🇷", name: "French", level: "Native speaker" },
      { flag: "🇬🇧", name: "English", level: "TOEIC 965 pts (May 2025)\nFCL 055 VFR Level 5 (ICAO)" }
    ],
    sections: {
      profil: {
        title: "Profile",
        text: "Junior in data engineering and SaaS development. My experience at the French DGAC focuses on optimizing critical ETL pipelines and processing complex standards (AIXM). Driven by technical efficiency, I transform heavy business logic into fluid, high-performance, and scalable architectures."
      },
      services: {
        title: "Expertise",
        subtitle: "Available for short terme mission",
        intro: "I  modernize data flows and build high-value custom software solutions.",
        cards: [
          { title: "Data Engineering", text: "ETL/ELT pipeline industrialization and optimization (Python). Complex data ingestion (XML, API)." },
          { title: "SaaS & API Dev", text: "Full-stack application design using FastAPI (Python) and React. Focused on performance and security." },
          { title: "Real-time Solutions", text: "Interactive monitoring dashboards with instant data updates via WebSockets." },
          { title: "Infra", text: "VPS management and Docker containerization" }
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
        title: "Projects",
        items: [
          {
            badgeLabel: "SaaS · Live",
            badgeType: "production",
            title: "WingFuel — Aviation Fuel SaaS",
            subtitle: "Founder & Lead Developer · wingfuel.fr",
            desc: "Full-stack fuel management SaaS for general aviation. Multi-tenant architecture, Weighted Average Cost engine, VPS deployment — used daily by air club pilots.",
            stack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "VPS"],
            link: { url: "https://wingfuel.fr", label: "wingfuel.fr →" }
          },
          {
            badgeLabel: "Personal Project · Coming Soon",
            badgeType: "personal",
            title: "WingJobs",
            subtitle: "Pilot Job Monitor · jobs.wingfuel.fr",
            desc: "Automated dashboard aggregating pilot job listings from 7 European airlines. Multi-source scraping every 12h, REST filtering API, Discord notifications and manual scan trigger.",
            stack: ["Python", "FastAPI", "Web Scraping", "REST API", "Discord API"],
            link: { url: "https://jobs.wingfuel.fr", label: "jobs.wingfuel.fr →" }
          }
        ],
        secondary: [
          {
            badgeLabel: "Academic",
            badgeType: "academic",
            title: "UBHome",
            subtitle: "Student SaaS Platform · M1, 3-person team",
            desc: "Student hub: forum, messaging, interactive calendar (CRUD), profiles and role-based dashboards. Social auth via django-allauth.",
            stack: ["Django 5", "PostgreSQL", "Tailwind CSS", "JavaScript"],
            link: { url: "https://github.com/SimDms29/UBHome", label: "GitHub →" }
          }
        ],
        mention: {
          label: "Also",
          title: "java-idl-network-architecture",
          desc: "Java network architecture · GoF Design Patterns: Visitor, Factory, Facade, Observer · JUnit coverage",
          url: "https://github.com/SimDms29/java-idl-network-architecture"
        }
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
    footer: "© 2026 Simon Dumas - Data & Software Junior"
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
  const typedSubtitle = useTypewriter(t.subtitle, 38);

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
      <div className="ambient-glow ambient-glow--tr" />
      <div className="ambient-glow ambient-glow--bl" />

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
            <Reveal delay={0}>
              <div className="avatar-container">
                <div className="avatar">
                  <img src="/avatar.JPG" alt={t.title} className="avatar-image" />
                </div>
                <div className="availability-badge">{t.status}</div>
              </div>
              <h2 className="sidebar-name">{t.title}</h2>
              <p className="sidebar-subtitle" style={{ whiteSpace: 'pre-line' }}>
                {typedSubtitle}<span className="typing-cursor">|</span>
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="sidebar-section">
                <h3 className="section-label">{t.contact}</h3>
                <a href="https://cv.wingfuel.fr" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <Globe size={18} className="contact-icon" />
                  <span className="contact-text">cv.wingfuel.fr</span>
                </a>
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
            </Reveal>

            <Reveal delay={250}>
              <div className="sidebar-section">
                <h3 className="section-label">{t.skills}</h3>
                <div className="skills-container">
                  {skillsList.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="stats-strip">
                <div className="stat-item">
                  <span className="stat-value"><CountUp to={140} suffix="+" /></span>
                  <span className="stat-label">{t.statLabels.flight}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value"><CountUp to={965} /></span>
                  <span className="stat-label">TOEIC</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value"><CountUp to={2} /></span>
                  <span className="stat-label">{t.statLabels.internships}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={450}>
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
            </Reveal>
          </aside>

          <main className="main-content">
            <Reveal>
              <section id="profil" className={`content-section ${activeSection === 'profil' ? 'active' : ''}`}>
                <h2 className="section-title">{t.sections.profil.title}</h2>
                <p className="section-text">{t.sections.profil.text}</p>
              </section>
            </Reveal>

            <Reveal>
              <section id="services" className={`content-section ${activeSection === 'services' ? 'active' : ''}`}>
                <h2 className="section-title">{t.sections.services.title}</h2>
                <p className="section-subtitle-tag">{t.sections.services.subtitle}</p>
                <p className="section-text" style={{ marginBottom: '1.5rem' }}>{t.sections.services.intro}</p>
                <div className="services-grid">
                  {t.sections.services.cards.map((card, i) => (
                    <Reveal key={i} delay={i * 90} className="service-reveal">
                      <div className="service-card">
                        {i === 0 && <Database className="service-icon" size={24} />}
                        {i === 1 && <Code className="service-icon" size={24} />}
                        {i === 2 && <Rocket className="service-icon" size={24} />}
                        {i === 3 && <Wrench className="service-icon" size={24} />}
                        <h3 className="service-title">{card.title}</h3>
                        <p className="service-text">{card.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="experience" className={`content-section ${activeSection === 'experience' ? 'active' : ''}`}>
                <h2 className="section-title">{t.sections.experience.title}</h2>
                <div className="timeline-list-container">
                  {t.sections.experience.items.map((exp, i) => (
                    <Reveal key={i} delay={i * 120}>
                      <div className="timeline">
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
                    </Reveal>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="projets" className={`content-section ${activeSection === 'projets' ? 'active' : ''}`}>
                <h2 className="section-title">{t.sections.projets.title}</h2>

                {t.sections.projets.items.map((proj, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className={`portfolio-featured${proj.badgeType === 'production' ? ' production' : ''}`}>
                      <span className={`proj-badge proj-badge--${proj.badgeType}`}>{proj.badgeLabel}</span>
                      <h3 className="portfolio-featured-title">{proj.title}</h3>
                      <p className="portfolio-featured-subtitle">{proj.subtitle}</p>
                      <p className="portfolio-featured-desc">{proj.desc}</p>
                      <div className="portfolio-stack">
                        {proj.stack.map((s, j) => <span key={j} className="stack-tag">{s}</span>)}
                      </div>
                      <a href={proj.link.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        <ExternalLink size={14} />
                        {proj.link.label}
                      </a>
                    </div>
                  </Reveal>
                ))}

                <div className="portfolio-grid">
                  {t.sections.projets.secondary.map((proj, i) => (
                    <Reveal key={i} delay={80} className="portfolio-card-reveal">
                      <div className="portfolio-card">
                        <span className={`proj-badge proj-badge--${proj.badgeType}`}>{proj.badgeLabel}</span>
                        <h3 className="portfolio-card-title">{proj.title}</h3>
                        <p className="portfolio-card-subtitle">{proj.subtitle}</p>
                        <p className="portfolio-card-desc">{proj.desc}</p>
                        <div className="portfolio-stack">
                          {proj.stack.map((s, j) => <span key={j} className="stack-tag">{s}</span>)}
                        </div>
                        <a href={proj.link.url} target="_blank" rel="noopener noreferrer" className="portfolio-card-link">
                          <ExternalLink size={12} /> {proj.link.label}
                        </a>
                      </div>
                    </Reveal>
                  ))}

                  <Reveal delay={160}>
                    <div className="portfolio-mention">
                      <span className="mention-label">{t.sections.projets.mention.label}</span>
                      <a href={t.sections.projets.mention.url} target="_blank" rel="noopener noreferrer" className="mention-item">
                        <span className="mention-title">{t.sections.projets.mention.title}</span>
                        <span className="mention-desc">{t.sections.projets.mention.desc}</span>
                      </a>
                    </div>
                  </Reveal>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="formation" className={`content-section ${activeSection === 'formation' ? 'active' : ''}`}>
                <h2 className="section-title">{t.sections.formation.title}</h2>
                <div className="timeline-list-container">
                  {t.sections.formation.items.map((form, i) => (
                    <Reveal key={i} delay={i * 100}>
                      <div className="timeline">
                        <div className="timeline-dot primary" />
                        <div className="timeline-content">
                          <span className="timeline-badge">{form.date}</span>
                          <h3 className="timeline-title">{form.title}</h3>
                          <p className="timeline-subtitle">{form.school}</p>
                          <p className="timeline-description">{form.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
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
            </Reveal>

            <Reveal>
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
            </Reveal>
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
