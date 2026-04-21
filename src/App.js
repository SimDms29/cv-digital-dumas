import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Phone, MapPin, Code, Database, Rocket, Wrench } from 'lucide-react';
import './App.css';

export default function CVApp() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profil', 'services', 'experience', 'projets', 'formation', 'activites'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const handleDownloadPDF = () => {
    window.print();
  };

  const skills = [
    'Ingénierie Logiciel', 'Java', 'Python', 'Git', 'HTML/CSS/JS',
    'SQL', 'WebSockets', 'MySQL', 'Docker', 'VPS / Prod', 'React'
  ];

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Header fixe */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Simon Dumas</h1>
          <div className="header-actions">
            <button onClick={handleDownloadPDF} className="btn-download">
              <Download size={18} />
              <span className="btn-text">Télécharger PDF</span>
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className="btn-theme">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <div className="main-wrapper">
        <div className="grid-container">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="avatar-container">
              <div className="avatar">
                <img 
                  src="/avatar.JPG" 
                  alt="Simon Dumas" 
                  className="avatar-image"
                />
              </div>
              <div className="availability-badge">Disponible</div>
            </div>

            <h2 className="sidebar-name">Simon Dumas</h2>
            <p className="sidebar-subtitle">
              Développeur Logiciel<br />Master Ingénierie du Logiciel
            </p>

            <div className="sidebar-section">
              <h3 className="section-label">Contact</h3>
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
                <span className="contact-text">🚗 Permis B</span>
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="section-label">Compétences</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="section-label">Langues</h3>
              <div className="languages-container">
                <div className="language-item">
                  <div className="language-header">
                    <span>🇫🇷</span>
                    <span className="language-name">Français</span>
                  </div>
                  <p className="language-level">Langue maternelle</p>
                </div>
                <div className="language-item">
                  <div className="language-header">
                    <span>🇬🇧</span>
                    <span className="language-name">Anglais</span>
                  </div>
                  <p className="language-level">TOEIC 965 pts, Mai 2025<br />FCL 055 VFR Niveau 5</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Contenu principal */}
          <main className="main-content">
            {/* Profil */}
            <section id="profil" className={`content-section ${activeSection === 'profil' ? 'active' : ''}`}>
              <h2 className="section-title">Profil</h2>
              <p className="section-text">
                Ce qui me motive dans le code, c'est de créer de la valeur concrète. En parallèle de mes études, j'ai lancé WingFuel, un SaaS de gestion carburant pour aéroclubs. Passioné par l'aviation, j'ai développé une approche rigoureuse et une capacité à gérer le stress, des qualités que j'applique dans mes projets tech et mes ambitions entrepreneuriales. J'ambitionne une carrière en ingénierie logicielle à l'internationale, à l'intersection de la technique et du business.
              </p>
            </section>

            {/* Section Services Freelance */}
            <section id="services" className={`content-section ${activeSection === 'services' ? 'active' : ''}`}>
              <h2 className="section-title">Services Freelance</h2>
              <p className="section-text">
                En complément de mon parcours académique et de mes projets personnels comme <strong>WingFuel</strong>, je propose mes services en freelance pour transformer vos besoins métiers en solutions numériques robustes et pérennes.
              </p>
              
              <div className="services-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', // FORÇAGE ICI
                gap: '1.2rem', 
                marginTop: '1.5rem' 
              }}>
                <div className="service-card" style={{ 
                  padding: '1.25rem', 
                  borderRadius: '12px', 
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Code className="accent-color" size={24} style={{ marginBottom: '0.75rem' }} />
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Développement Web & SaaS</h3>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>Conception d'applications full-stack modernes avec React, Node.js ou Python. De l'idée à la mise en production.</p>
                </div>

                <div className="service-card" style={{ 
                  padding: '1.25rem', 
                  borderRadius: '12px', 
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Database className="accent-color" size={24} style={{ marginBottom: '0.75rem' }} />
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Architecture de Données</h3>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>Optimisation de bases de données, normalisation SQL et traitement de flux complexes (AIXM/XML).</p>
                </div>

                <div className="service-card" style={{ 
                  padding: '1.25rem', 
                  borderRadius: '12px', 
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Rocket className="accent-color" size={24} style={{ marginBottom: '0.75rem' }} />
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Déploiement</h3>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>Configuration de serveurs (VPS), conteneurisation Docker et mise en place de pipelines de déploiement fiables.</p>
                </div>

                <div className="service-card" style={{ 
                  padding: '1.25rem', 
                  borderRadius: '12px', 
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Wrench className="accent-color" size={24} style={{ marginBottom: '0.75rem' }} />
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Maintenance & Évolutions</h3>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>Forfaits de maintenance personnalisés : correctifs de sécurité, mises à jour techniques et ajout de fonctionnalités.</p>
                </div>
              </div>
            </section>

            {/* Le reste de tes sections (Expérience, Projets, etc.) suit ici sans changement */}
            <section id="experience" className={`content-section ${activeSection === 'experience' ? 'active' : ''}`}>
              <h2 className="section-title">Expérience Professionnelle</h2>
              <div className="timeline">
                <div className="timeline-dot primary" />
                <div className="timeline-content">
                  <span className="timeline-badge">Avril 2026 - Aujourd'hui</span>
                  <h3 className="timeline-title">Stagiaire Data Engineer</h3>
                  <p className="timeline-subtitle">CRNA-Ouest, DGAC - Brest</p>
                  <ul className="timeline-list">
                    <li>Reverse engineering du modèle AIXM d'EuroControl pour base SQL.</li>
                    <li>Technologies utilisées : SQL, XML/XSD, modélisation de données.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="projets" className={`content-section ${activeSection === 'projets' ? 'active' : ''}`}>
              <h2 className="section-title">Projets</h2>
              <div className="timeline">
                <div className="timeline-dot accent" />
                <div className="timeline-content">
                  <span className="timeline-badge accent">2025 - Aujourd'hui</span>
                  <h3 className="timeline-title">WingFuel — <a href="https://wingfuel.fr" target="_blank" rel="noopener noreferrer" className="project-link">wingfuel.fr</a></h3>
                  <p className="timeline-subtitle">Projet Personnel · SaaS</p>
                  <ul className="timeline-list">
                    <li>Application SaaS de gestion carburant pour aéroclubs.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="formation" className={`content-section ${activeSection === 'formation' ? 'active' : ''}`}>
              <h2 className="section-title">Formation</h2>
              <div className="timeline">
                <div className="timeline-dot primary" />
                <div className="timeline-content">
                  <span className="timeline-badge">2025 - 2027</span>
                  <h3 className="timeline-title">Master Informatique</h3>
                  <p className="timeline-subtitle">UBO - Brest</p>
                </div>
              </div>
            </section>

            <section id="activites" className={`content-section ${activeSection === 'activites' ? 'active' : ''}`}>
              <h2 className="section-title">Activités Extracurriculaires</h2>
              <div className="activites-layout">
                <div className="timeline">
                  <div className="timeline-dot accent" />
                  <div className="timeline-content">
                    <span className="timeline-badge accent">2023</span>
                    <h3 className="timeline-title">Licence de Pilote Privé (PPL)</h3>
                  </div>
                </div>
                <div className="avion-photo-wrapper">
                  <img src="/avion.PNG" alt="En vol" className="avion-photo" />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2026 Simon Dumas - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}