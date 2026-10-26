import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowUp, CaretDown, DownloadSimple, MapPin, LinkedinLogo, MagnifyingGlass, Medal, SealCheck, GraduationCap, Trophy } from '@phosphor-icons/react';
import profile from './profile.json';

const pdfPath = '/Chua-Jia-Sheng-Resume.pdf';
const navigation = [
  { id: 'about', label: 'About' },
  { id: 'background', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Qualifications' },
  { id: 'contact', label: 'Contact' },
];
const roleDescriptions = [
  'Appointed as an ME4 Apprentice on 8 June 2026.',
  'Completed the joint term at OCS DIS Wing and professional-term training at SAFC4DC. Participated in DIS domain training and the Guardian Exercise Series.',
  'Completed Basic Military Training and passed out on 6 September 2025.',
  'Collaborated with university researchers on humidity sensor fabrication and microcontroller integration. Gained hands-on experience in laboratory research, embedded systems and technical problem-solving within a multicultural team.',
  'Worked part-time as a shop sales assistant.',
];

function useScrollReveals() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 36px 0px' });
    document.documentElement.classList.add('motion-ready');
    elements.forEach(element => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);
}

function useScrollStorytelling() {
  useEffect(() => {
    const scenes = [...document.querySelectorAll('[data-scroll-scene]')];
    const hero = document.querySelector('.overview');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const paint = () => {
      frame = 0;
      scenes.forEach(scene => {
        const bounds = scene.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
        const progress = preference.matches ? 1 : Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight * .78)));
        scene.style.setProperty('--scene-progress', progress.toFixed(3));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const visibility = () => document.documentElement.classList.toggle('motion-suspended', document.hidden);
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
    }) : null;
    if (observer) observer.observe(hero);
    else hero.classList.add('is-in-view');
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', schedule);
    document.addEventListener('visibilitychange', visibility);
    visibility();
    paint();
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', schedule);
      document.removeEventListener('visibilitychange', visibility);
      document.documentElement.classList.remove('motion-suspended');
    };
  }, []);
}

function ExternalLink({ children, ...props }) {
  return <a target="_blank" rel="noopener noreferrer" {...props}>{children}<span className="sr-only"> (opens in a new tab)</span></a>;
}

function ResumeLink({ compact = false }) {
  return <a className={`button ${compact ? 'button-small' : 'button-primary'}`} href={pdfPath} download="Chua-Jia-Sheng-Resume.pdf">{compact ? 'Résumé' : 'Download résumé'}<DownloadSimple size={compact ? 16 : 18} aria-hidden="true" /></a>;
}

function Header() {
  const [active, setActive] = useState('overview');
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const sections = ['overview', ...navigation.map(item => item.id)].map(id => document.getElementById(id));
    let frame = 0;
    let previousY = window.scrollY;
    let direction = 0;
    let distance = 0;
    const update = () => {
      frame = 0;
      const difference = window.scrollY - previousY;
      const nextDirection = Math.sign(difference);
      if (nextDirection && nextDirection !== direction) { direction = nextDirection; distance = 0; }
      distance += Math.abs(difference);
      if (window.scrollY < 100) setCompact(false);
      else if (distance >= 12) setCompact(direction > 0);
      previousY = window.scrollY;
      const marker = document.querySelector('.site-header').offsetHeight + 64;
      let current = 'overview';
      sections.forEach(section => { if (section && section.getBoundingClientRect().top <= marker) current = section.id; });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = 'contact';
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const initialSection = document.getElementById(window.location.hash.slice(1));
    initialSection?.scrollIntoView({ block: 'start', behavior: 'instant' });
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
  const focusSection = id => document.getElementById(id)?.focus({ preventScroll: true });
  return <div className="header-anchor"><header className={`site-header${compact ? ' is-compact' : ''}`}><div className="nav-shell">
    <a href="#overview" className="brand" aria-label="Portfolio. Back to introduction" onClick={() => focusSection('overview')}><span className="monogram" aria-hidden="true">Portfolio.</span></a>
    <nav className="main-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => focusSection(item.id)} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}</nav>
    <ResumeLink compact />
  </div></header></div>;
}

function Hero() {
  return <section className="overview section-shell" id="overview" tabIndex={-1} aria-labelledby="hero-title">
    <div className="hero-atmosphere" aria-hidden="true"><span className="ambient-light" /><span className="glass-layer layer-back" /><span className="glass-layer layer-front" /></div>
    <div className="hero-intro glass-surface glass-depth" onPointerMove={moveGlassHighlight} onPointerLeave={resetGlassHighlight}><h1 id="hero-title" className="hero-name-mask"><span className="hero-name">{profile.name}<span className="name-period" aria-hidden="true">.</span></span></h1><p className="hero-role"><span className="hero-accent">Digital & Intelligence</span><br className="desktop-break" /> Systems Engineer.</p><p className="hero-description">Computer Engineering undergraduate at NTU.<br className="desktop-break" /> A foundation in electronics. A focus on digital systems.</p><div className="hero-actions"><a href="#background" className="button button-primary">Explore experience <ArrowRight size={18} aria-hidden="true" /></a><a href="#contact" className="button button-secondary">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
    <div className="hero-note"><span>Engineering & digital technology</span><span><MapPin size={14} aria-hidden="true" />{profile.location}</span></div>
  </section>;
}

function About() {
  return <section className="about section-shell section-space" id="about" tabIndex={-1} aria-labelledby="about-title"><h2 id="about-title" data-reveal>About.</h2><div className="about-story" data-scroll-scene><p className="editorial-statement line-reveal" data-reveal><span className="statement-line"><span>Engineering, from research</span></span><span className="statement-line"><span>to practice.</span></span></p></div><div className="about-copy"><p className="lead">A background in electronic and computer engineering, with hands-on work in sensor fabrication and microcontroller integration.</p><p>Experience spans university research, national service and digital systems training. Technical interests include embedded systems, software development, cloud computing and communications.</p></div></section>;
}

function CareerEntry({ job, index }) {
  return <article className="career-item" id={index === 3 ? 'research' : undefined} data-reveal><div className="career-meta"><span>{job.period}</span><span>{job.location}</span></div><div className="career-copy"><h3>{job.title}</h3><p className="career-org">{job.organization}</p><p className="career-description">{roleDescriptions[index]}</p></div></article>;
}

function Experience() {
  const years = [
    { year: '2026', indices: [0] },
    { year: '2025', indices: [1, 2] },
    { year: '2024', indices: [3] },
    { year: '2022', indices: [4] },
  ];
  return <section className="experience section-shell section-space" id="background" tabIndex={-1} aria-labelledby="experience-title"><div className="section-heading"><h2 id="experience-title" data-reveal>Experience.</h2><p>Digital systems, research and service.</p></div><div className="career-timeline">{years.map(group => <div className="timeline-year" key={group.year}><h3 className="year-label">{group.year}</h3><div className="year-entries">{group.indices.map(index => <CareerEntry key={profile.experience[index].title} job={profile.experience[index]} index={index} />)}</div></div>)}</div></section>;
}

const skillGroups = [
  { title: 'Embedded systems', skills: profile.skills.slice(0, 3) },
  { title: 'Software & cloud', skills: profile.skills.slice(3, 6) },
  { title: 'Communications', skills: profile.skills.slice(6, 8) },
  { title: 'Leadership & planning', skills: profile.skills.slice(8) },
];

function moveGlassHighlight(event) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const panel = event.currentTarget;
  const bounds = panel.getBoundingClientRect();
  panel.style.setProperty('--reflection-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 24}px`);
  panel.style.setProperty('--reflection-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 16}px`);
  if (panel.classList.contains('glass-depth')) {
    panel.style.setProperty('--tilt-x', `${-((event.clientY - bounds.top) / bounds.height - .5) * .7}deg`);
    panel.style.setProperty('--tilt-y', `${((event.clientX - bounds.left) / bounds.width - .5) * 1.1}deg`);
  }
}

function resetGlassHighlight(event) {
  event.currentTarget.style.removeProperty('--reflection-x');
  event.currentTarget.style.removeProperty('--reflection-y');
  event.currentTarget.style.removeProperty('--tilt-x');
  event.currentTarget.style.removeProperty('--tilt-y');
}

function Education() {
  return <div className="education-overview">
    <div className="section-heading"><h2 id="education-title" data-reveal>Skills.</h2><p>Embedded systems, software and communications.</p></div>
    <div className="skills-block"><div className="skill-groups">{skillGroups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul className="skill-list">{group.skills.map(skill => <li className="skill-chip glass-surface" key={skill} onPointerMove={moveGlassHighlight} onPointerLeave={resetGlassHighlight}>{skill}</li>)}</ul></div>)}</div></div>
    <section className="academic qualification-subsection" id="academic" tabIndex={-1} aria-labelledby="academic-title"><div className="section-heading"><h2 id="academic-title" data-reveal>Education.</h2><p>A foundation in electronic and computer engineering.</p></div><div className="education-list">{profile.education.map((school, index) => <article className={`education-row glass-surface${index === 0 ? ' education-featured' : ''}`} key={school.institution} data-reveal><div className="school-heading"><span className="school-mark" aria-hidden="true">{['NTU', 'NYP', 'WS'][index]}</span><p className="school-date">{school.period}</p></div><div className="school-copy"><h3>{school.institution}</h3><p className="school-qualification">{school.qualification}</p>{school.detail && <p className="school-detail">{school.detail}</p>}</div></article>)}</div></section>
  </div>;
}

// Replace these preview treatments with supplied project images and details later.
const projectPreviews = ['glass', 'orbit', 'fold'];
const carouselSlides = [2, 0, 1, 2, 0];

function Projects() {
  const rail = useRef(null);
  const track = useRef(null);
  const gesture = useRef(null);
  const wheelGesture = useRef({ delta: 0, committed: false, timer: null });
  const moving = useRef(false);
  const positionRef = useRef(1);
  const [position, setPosition] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [instant, setInstant] = useState(false);
  const active = carouselSlides[position];
  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const move = direction => {
    if (moving.current) return;
    const next = positionRef.current + direction;
    if (prefersReducedMotion()) {
      positionRef.current = next === 0 ? 3 : next === 4 ? 1 : next;
      setPosition(positionRef.current);
    } else {
      moving.current = true;
      positionRef.current = next;
      setPosition(next);
    }
  };

  useEffect(() => {
    const viewport = rail.current;
    const wheel = event => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      const current = wheelGesture.current;
      window.clearTimeout(current.timer);
      current.timer = window.setTimeout(() => { current.delta = 0; current.committed = false; }, 200);
      if (current.committed) return;
      current.delta += event.deltaX;
      if (Math.abs(current.delta) >= 28 && !moving.current) {
        current.committed = true;
        move(current.delta > 0 ? 1 : -1);
      }
    };
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      if (!preference.matches) return;
      moving.current = false;
      positionRef.current = positionRef.current === 0 ? 3 : positionRef.current === 4 ? 1 : positionRef.current;
      setPosition(positionRef.current);
    };
    viewport.addEventListener('wheel', wheel, { passive: false });
    preference.addEventListener('change', updatePreference);
    return () => {
      viewport.removeEventListener('wheel', wheel);
      preference.removeEventListener('change', updatePreference);
      window.clearTimeout(wheelGesture.current.timer);
    };
  }, []);

  useEffect(() => {
    if (!instant) return;
    const frame = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(frame);
  }, [instant]);

  const finishSlide = event => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
    if (positionRef.current === 0 || positionRef.current === 4) {
      setInstant(true);
      positionRef.current = positionRef.current === 0 ? 3 : 1;
      setPosition(positionRef.current);
    }
    moving.current = false;
  };
  const finishGesture = event => {
    if (!gesture.current) return;
    const current = gesture.current;
    const delta = event.clientX - current.x;
    const vertical = event.clientY - current.y;
    gesture.current = null;
    setDragging(false);
    track.current.style.setProperty('--project-drag', '0px');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (event.type !== 'pointercancel' && Math.abs(delta) >= 24 && Math.abs(delta) > Math.abs(vertical)) move(delta < 0 ? 1 : -1);
  };

  return <section className="projects section-space" id="projects" tabIndex={-1} aria-labelledby="projects-title">
    <div className="section-shell section-heading"><h2 id="projects-title" data-reveal>Projects.</h2><p>Selected work. Coming soon.</p></div>
    <div className="project-carousel" data-scroll-scene role="region" aria-roledescription="carousel" aria-label="Project placeholders">
      <p id="project-instructions" className="sr-only">Swipe or drag to browse. With keyboard focus, use the left and right arrow keys.</p>
      <div ref={rail} className={`project-window${dragging ? ' is-dragging' : ''}`} tabIndex={0} aria-label="Browse project previews" aria-describedby="project-instructions" onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }} onPointerDown={event => {
        if (moving.current || event.button !== 0) return;
        gesture.current = { x: event.clientX, y: event.clientY };
        setDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
      }} onPointerMove={event => {
        if (!gesture.current) return;
        const delta = event.clientX - gesture.current.x;
        const vertical = event.clientY - gesture.current.y;
        if (Math.abs(vertical) > Math.abs(delta)) return;
        const width = track.current.firstElementChild.getBoundingClientRect().width;
        track.current.style.setProperty('--project-drag', `${Math.max(-width, Math.min(width, delta))}px`);
      }} onPointerUp={finishGesture} onPointerCancel={finishGesture}>
        <div ref={track} className={`project-track${instant ? ' is-instant' : ''}`} style={{ '--project-position': position }} onTransitionEnd={finishSlide}>{carouselSlides.map((preview, index) => <article key={index} className={`project-slide project-${projectPreviews[preview]}${position === index ? ' is-active' : ''}`} onPointerMove={moveGlassHighlight} onPointerLeave={resetGlassHighlight} aria-hidden={position !== index} role="group" aria-roledescription="slide" aria-label={`Placeholder ${preview + 1} of 3`}>
          <div className="project-art" aria-hidden="true"><span className="project-form form-one" /><span className="project-form form-two" /><span className="project-form form-three" /></div>
          <div className="project-caption"><h3>Coming soon.</h3><span>Project placeholder. Details to follow.</span></div>
        </article>)}</div>
      </div>
      <div className="project-controls section-shell"><p className="project-gesture">Swipe or drag to explore.</p><div className="project-pagination" aria-hidden="true">{projectPreviews.map((_, index) => <span key={index} className={active === index ? 'is-active' : ''} />)}</div><p className="sr-only" role="status" aria-live="polite">Placeholder {active + 1} of 3. Project details coming soon.</p></div>
    </div>
  </section>;
}

function CredentialFacts({ cert }) {
  return <dl className="credential-facts">
    <div><dt>Issued</dt><dd>{cert.date}</dd></div>
    <div><dt>Category</dt><dd>{cert.category}</dd></div>
    {cert.note && <div><dt>Record type</dt><dd>{cert.note}</dd></div>}
    {cert.credentialId && <div className="credential-fact-id"><dt>Credential ID</dt><dd>{cert.credentialId}</dd></div>}
  </dl>;
}

function CredentialRow({ cert, print = false }) {
  if (print) return <article className="print-credential-row"><h4>{cert.title}</h4><p>{cert.issuer}</p><CredentialFacts cert={cert} /></article>;
  return <details className="credential-row">
    <summary className="credential-summary"><span className="credential-summary-copy"><span className="credential-name">{cert.title}</span><span className="credential-issuer">{cert.issuer}</span></span><CaretDown className="disclosure-caret" size={18} aria-hidden="true" /></summary>
    <CredentialFacts cert={cert} />
  </details>;
}

function Credentials() {
  const [query, setQuery] = useState('');
  const searchInput = useRef(null);
  const categories = ['Cloud & software', 'Security', 'Communications', 'Leadership'];
  const searchTerm = query.trim().toLowerCase();
  const filtered = profile.certifications.filter(cert => `${cert.title} ${cert.issuer} ${cert.category} ${cert.note || ''} ${cert.credentialId || ''}`.toLowerCase().includes(searchTerm));
  const groups = categories.map(category => ({ category, records: filtered.filter(cert => cert.category === category) })).filter(group => group.records.length > 0);
  const clearSearch = () => { setQuery(''); searchInput.current?.focus(); };
  return <section className="credentials qualification-subsection" id="credentials" tabIndex={-1} aria-labelledby="credentials-title">
    <div className="subsection-heading"><h3 id="credentials-title" data-reveal>Credentials & courses.</h3><p>Continued learning in cloud, security, communications and leadership.</p></div>
    <div className="credential-tools"><p className="credential-hint">Browse a category. Open a credential for details.</p><div className="search-field glass-surface"><MagnifyingGlass size={18} aria-hidden="true" /><input ref={searchInput} type="search" value={query} onChange={event => setQuery(event.target.value)} aria-label="Search credentials" aria-controls="credential-results" placeholder="Find a credential" /></div></div>
    <p className="result-count" role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'credential or course' : 'credentials & courses'} in {groups.length} {groups.length === 1 ? 'category' : 'categories'}</p>
    <div className="credential-groups" id="credential-results">{groups.map(({ category, records }) => <details className="credential-group" key={`${category}-${searchTerm}`} open={searchTerm ? true : undefined}>
      <summary className="credential-group-summary"><span className="credential-group-label">{category}</span><span className="credential-group-count" aria-label={`${records.length} credentials and courses`}>{records.length}</span><CaretDown className="disclosure-caret" size={22} aria-hidden="true" /></summary>
      <div className="credential-list">{records.map(cert => <CredentialRow key={cert.id} cert={cert} />)}</div>
    </details>)}</div>
    <div className="print-only print-credential-list">{profile.certifications.map(cert => <CredentialRow key={cert.id} cert={cert} print />)}</div>
    {filtered.length === 0 && <div className="empty-state"><h4>No matching credentials.</h4><p>Try a different title, provider or category.</p><button className="button button-secondary" onClick={clearSearch}>Reset search</button></div>}
  </section>;
}

const achievementIcons = [Medal, SealCheck, GraduationCap, Trophy];

function Recognition() {
  return <section className="recognition qualification-subsection" id="achievements" tabIndex={-1} aria-labelledby="recognition-title"><div className="subsection-heading"><h3 id="recognition-title" data-reveal>Achievements.</h3><p>Academic recognition, skills and service.</p></div><div className="award-list">{profile.awards.map((award, index) => { const Icon = achievementIcons[index]; return <article className="award-row" key={award.title}><p className="award-date">{award.date}</p><h4>{award.title}</h4><p className="award-detail">{award.detail}</p><p className="award-issuer">{award.issuer}</p><Icon className="award-icon" size={42} weight="regular" aria-hidden="true" /></article>; })}</div></section>;
}

function Contact() {
  return <><section className="contact section-shell section-space" id="contact" tabIndex={-1} aria-labelledby="contact-title"><div className="contact-panel glass-surface glass-depth" onPointerMove={moveGlassHighlight} onPointerLeave={resetGlassHighlight}><div className="contact-intro"><h2 id="contact-title" data-reveal>Contact.</h2><p>Let’s connect.</p></div><div className="contact-details"><p>Connect through LinkedIn.</p><ExternalLink className="text-link contact-link" href={profile.linkedin}><LinkedinLogo size={23} weight="fill" aria-hidden="true" />linkedin.com/in/chua-jia-sheng<ArrowUpRight size={20} aria-hidden="true" /></ExternalLink></div></div></section><footer className="site-footer section-shell"><span>Engineering & digital technology</span><a href="#overview">Back to top <ArrowUp size={16} aria-hidden="true" /></a></footer></>;
}

export default function App() {
  useScrollReveals();
  useScrollStorytelling();
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" tabIndex={-1}><Hero /><About /><Experience /><Projects /><section className="qualifications section-shell section-space" id="education" tabIndex={-1} aria-labelledby="education-title"><Education /><Credentials /><Recognition /></section><Contact /></main></>;
}
