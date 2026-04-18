import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Phone, MapPin } from 'lucide-react';
import './App.css';

export default function CVApp() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profil', 'experience', 'formation', 'activites'];
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
    'Ingénierie Logiciel',
    'Java',
    'Python',
    'Git',
    'HTML/CSS/JS',
    'SQL',
    'WebSockets',
    'MySQL',
    'Docker',
    'VPS / Prod',
    'React'
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
            {/* Avatar */}
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

            {/* Contact */}
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

            {/* Compétences */}
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

            {/* Langues */}
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

            {/* Expérience */}
            <section id="experience" className={`content-section ${activeSection === 'experience' ? 'active' : ''}`}>
              <h2 className="section-title">Expérience Professionnelle</h2>
              
              <div className="timeline">
                <div className="timeline-dot primary" />
                <div className="timeline-content">
                  <span className="timeline-badge">Avril 2026 - Aujourd'hui</span>
                  <h3 className="timeline-title">Stagiaire Data Engineer</h3>
                  <p className="timeline-subtitle">CRNA-Ouest, DGAC - Brest</p>
                  <ul className="timeline-list">
                    <li>Reverse engineering du modèle AIXM d'EuroControl afin de concevoir une base de données SQL simplifiée, normalisée et optimisée</li>
                    <li>Analyse et compréhension du modèle AIXM (XML/XSD), identification des entités clés et de leurs relations</li>
                    <li>Optimisation pour la performance des requêtes : normalisation, indexation</li>
                    <li>Technologies utilisées : SQL, XML/XSD, modélisation de données</li>
                  </ul>
                </div>
              </div>

              <div className="timeline" style={{ marginTop: '2rem' }}>
                <div className="timeline-dot secondary" />
                <div className="timeline-content">
                  <span className="timeline-badge">Avril - Juin 2025</span>
                  <h3 className="timeline-title">Stagiaire Développement Informatique</h3>
                  <p className="timeline-subtitle">CRNA-Ouest, DGAC - Brest</p>
                  <ul className="timeline-list">
                    <li>Développement d'une application web pour la mise à jour et la modification des données relatives à la documentation des zones militaires</li>
                    <li>Collaboration avec les équipes informatiques de Brest, Rennes et Nantes pour assurer la fiabilité et la sécurité des données</li>
                    <li>Technologies utilisées : Python, WebSockets, MySQL, HTML, CSS, JavaScript</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projets */}
            <section id="projets" className={`content-section ${activeSection === 'projets' ? 'active' : ''}`}>
              <h2 className="section-title">Projets</h2>

              <div className="timeline-list-container">
                {/* WingFuel */}
                <div className="timeline">
                  <div className="timeline-dot accent" />
                  <div className="timeline-content">
                    <span className="timeline-badge accent">2025 - Aujourd'hui</span>
                    <h3 className="timeline-title">
                      WingFuel —{' '}
                      <a
                        href="https://wingfuel.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        wingfuel.fr
                      </a>
                    </h3>
                    <p className="timeline-subtitle">Projet Personnel · SaaS</p>
                    <ul className="timeline-list">
                      <li>Application SaaS de gestion carburant pour aéroclubs : remplace les feuilles Excel par une solution connectée</li>
                      <li>Saisie pilote via QR code, suivi de stock, exports comptables (PDF, Excel, CSV) et génération automatique du dossier TICPE Douanes</li>
                      <li>Déployé en production sur VPS, déjà utilisé par le Quiberon Air Club</li>
                      <li>Technologies : React, Node.js, Docker, Python (FastAPI + Pydantic), déploiement VPS</li>
                    </ul>
                  </div>
                </div>

                {/* Premier Projet */}
                <div className="timeline">
                  <div className="timeline-dot primary" />
                  <div className="timeline-content">
                    <span className="timeline-badge">M1, Semestre 1</span>
                    <h3 className="timeline-title">Projet Architecture Logicielle</h3>
                    <p className="timeline-subtitle">UBO</p>
                    <ul className="timeline-list">
                      <li>Développement d'une application Java, réflexion menée sur l'architecture (Visiteurs, Factories, MVC...), utilisation de designs patterns.</li>
                      <li>Technologies utilisées : Java, UML.</li>
                    </ul>
                  </div>
                </div>

                {/* Deuxième Projet */}
                <div className="timeline">
                  <div className="timeline-dot secondary" />
                  <div className="timeline-content">
                    <span className="timeline-badge">M1, Semestre 1</span>
                    <h3 className="timeline-title">Projet IHM</h3>
                    <p className="timeline-subtitle">UBO</p>
                    <ul className="timeline-list">
                      <li>UBhome – Student Hub : site web communautaire (Auth, Profils, Calendrier, Messagerie, Forum).</li>
                      <li>Technologies utilisées : Python, Django, HTML, CSS, JavaScript, SQL, GitHub.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Formation */}
            <section id="formation" className={`content-section ${activeSection === 'formation' ? 'active' : ''}`}>
              <h2 className="section-title">Formation</h2>
              
              <div className="timeline-list-container">
                {/* Master */}
                <div className="timeline">
                  <div className="timeline-dot primary" />
                  <div className="timeline-content">
                    <span className="timeline-badge">2025 - 2027</span>
                    <h3 className="timeline-title">Master Informatique</h3>
                    <p className="timeline-subtitle">Université de Bretagne Occidentale - Brest</p>
                    <p className="timeline-description">
                      Diplôme National de Master, Ingénierie du logiciel.
                    </p>
                  </div>
                </div>

                {/* Licence */}
                <div className="timeline">
                  <div className="timeline-dot secondary" />
                  <div className="timeline-content">
                    <span className="timeline-badge">2022 - 2025</span>
                    <h3 className="timeline-title">Licence en Informatique</h3>
                    <p className="timeline-subtitle">Université de Bretagne Occidentale - Brest</p>
                    <p className="timeline-description">
                      Diplôme National de Licence, Parcours Fondements et Applications. Focus sur la programmation, les algorithmes et les applications pratiques.
                    </p>
                  </div>
                </div>

                {/* Bac */}
                <div className="timeline">
                  <div className="timeline-dot tertiary" />
                  <div className="timeline-content">
                    <span className="timeline-badge">2022</span>
                    <h3 className="timeline-title">Baccalauréat Général</h3>
                    <p className="timeline-subtitle">Lycée de l'Iroise - Brest</p>
                    <p className="timeline-description">
                      Spécialités Mathématiques et Physique, Mention Bien.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Activités */}
            <section id="activites" className={`content-section ${activeSection === 'activites' ? 'active' : ''}`}>
              <h2 className="section-title">Activités Extracurriculaires</h2>

              <div className="activites-layout">
                <div className="timeline">
                  <div className="timeline-dot accent" />
                  <div className="timeline-content">
                    <span className="timeline-badge accent">2023</span>
                    <h3 className="timeline-title">Licence de Pilote Privé (PPL)</h3>
                    <p className="timeline-subtitle">Aéroclub Brest Finistère</p>
                    <p className="timeline-description">
                      Plus de 140 heures de vol avec qualifications annexes (EFIS, Pas Variable, TW...). Passage du FCL 055 : communications radio en anglais.
                    </p>
                  </div>
                </div>

                <div className="avion-photo-wrapper">
                  <img src="/avion.PNG" alt="En vol" className="avion-photo" />
                </div>
              </div>
            </section>

            {/* Références */}
            <section className="content-section">
              <h2 className="section-title">Références</h2>
              
              <div className="references-grid">
                <div className="reference-card">
                  <h3 className="reference-name">Charly Papin</h3>
                  <p className="reference-company">HemoServices Brest</p>
                  <p className="reference-info">📱 06 98 93 73 84</p>
                  <p className="reference-info">📧 responsable29@hemo-services.com</p>
                </div>

                <div className="reference-card">
                  <h3 className="reference-name">Damien Archer</h3>
                  <p className="reference-company">CRNA Ouest, Pôle DATA</p>
                  <p className="reference-info">📧 damien.archer@aviation-civile.gouv.fr</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2026 Simon Dumas - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}