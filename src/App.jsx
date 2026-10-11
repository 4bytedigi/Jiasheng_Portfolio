import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowUp, DownloadSimple, MapPin, LinkedinLogo, List, X, MagnifyingGlass, Plus, Minus, GraduationCap } from '@phosphor-icons/react';
import profile from './profile.json';

const pdfPath = '/Chua-Jia-Sheng-Resume.pdf';
const navigation = [{ id: 'background', label: 'Experience' }, { id: 'education', label: 'Education' }, { id: 'credentials', label: 'Credentials' }];

function ExternalLink({ children, ...props }) {
  return <a target="_blank" rel="noopener noreferrer" {...props}>{children}<span className="sr-only"> (opens in a new tab)</span></a>;
}

function ResumeLink({ compact = false }) {
  return <a className={`button ${compact ? 'button-small' : 'button-primary'}`} href={pdfPath} download="Chua-Jia-Sheng-Resume.pdf">{compact ? 'Résumé' : 'Download résumé'}<DownloadSimple size={compact ? 16 : 19} aria-hidden="true" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('overview');
  const menuButton = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-12% 0px -60% 0px' });
    ['overview', ...navigation.map(item => item.id), 'contact'].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const dismiss = event => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', dismiss);
    return () => document.removeEventListener('keydown', dismiss);
  }, [open]);
  const closeAndFocus = id => {
    setOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  };
  return <header className="site-header">
    <div className="nav-shell">
      <a href="#overview" className="brand" aria-label="Chua Jia Sheng, overview" onClick={() => closeAndFocus('overview')}><span className="monogram" aria-hidden="true">js.</span><span>Jia Sheng</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}<a href="#contact" aria-current={active === 'contact' ? 'location' : undefined}>Contact</a></nav>
      <div className="nav-actions"><ResumeLink compact /><button ref={menuButton} className="menu-button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={24} aria-hidden="true" /> : <List size={24} aria-hidden="true" />}</button></div>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{[...navigation, { id: 'contact', label: 'Contact' }].map(item => <a key={item.id} href={`#${item.id}`} onClick={() => closeAndFocus(item.id)}>{item.label}<ArrowRight size={18} aria-hidden="true" /></a>)}</nav>
  </header>;
}

function Hero() {
  return <section className="overview" id="overview" tabIndex={-1} aria-labelledby="hero-title">
    <div className="hero-intro section-shell"><h1 id="hero-title">Chua <span className="name-rest">Jia Sheng.</span></h1><p className="hero-role">Digital & Intelligence Systems Engineer</p><p className="hero-description">Computer Engineering undergraduate at NTU.<br className="desktop-break" /> A foundation in electronics. A focus on digital systems.</p><div className="hero-actions"><ResumeLink /><ExternalLink href={profile.linkedin} className="text-link">View LinkedIn <ArrowUpRight size={18} aria-hidden="true" /></ExternalLink></div></div>
    <div className="overview-grid section-shell">
      <article className="engineering-feature"><div className="engineering-copy"><h2>Hardware roots.<br /><span>Digital mindset.</span></h2><p>Hands-on experience in sensor fabrication and microcontroller integration.</p><a className="text-link" href="#research">Explore the research <ArrowRight size={17} aria-hidden="true" /></a></div><img className="silicon-art" src="/images/silicon-glass.png" alt="" width="1254" height="1254" fetchPriority="high" /></article>
      <div className="overview-side"><article className="study-feature"><GraduationCap size={29} weight="light" aria-hidden="true" /><h2>Computer<br /> Engineering.</h2><p>Nanyang Technological University</p><div className="study-meta"><span>BEng (Hons)</span><span>Expected 2030</span></div><a href="#education" className="tile-link" aria-label="View education"><ArrowUpRight size={21} aria-hidden="true" /></a></article><article className="service-feature"><h2>Digital &<br />Intelligence Service.</h2><p>Senior DISE (ME4A)</p><span className="service-date">Jun 2026 - Present</span><a href="#background" className="tile-link" aria-label="View work experience"><ArrowUpRight size={21} aria-hidden="true" /></a></article></div>
    </div>
    <div className="profile-note section-shell"><p>{profile.summary}</p><span><MapPin size={16} aria-hidden="true" />{profile.location}</span></div>
  </section>;
}

function Experience() {
  return <section className="experience section-shell section-space" id="background" tabIndex={-1} aria-labelledby="experience-title"><div className="section-aside"><h2 id="experience-title">Experience.</h2><p>Digital systems, research,{' '}<br />and service.</p><a className="text-link" href={pdfPath} download="Chua-Jia-Sheng-Resume.pdf">The complete résumé <DownloadSimple size={17} aria-hidden="true" /></a></div><div className="career-list">{profile.experience.map((job, index) => <article key={job.title} className="career-item" id={index === 3 ? 'research' : undefined}><div className="career-meta"><span>{job.period}</span>{index === 0 && <span className="current-label">Current role</span>}</div><h3>{job.title}</h3><p className="career-org">{job.organization}</p><p className="career-description">{job.description}</p><p className="career-location">{job.location}</p></article>)}</div></section>;
}

function Education() {
  const abbreviations = ['NTU', 'NYP', 'WS'];
  return <section className="education section-band" id="education" tabIndex={-1} aria-labelledby="education-title"><div className="section-shell section-space"><div className="section-heading"><h2 id="education-title">Built on solid foundations.</h2><p>Education in electronic and computer engineering.</p></div><div className="education-list">{profile.education.map((school, index) => <article className="education-row" key={school.institution}><div className="school-abbreviation" aria-hidden="true">{abbreviations[index]}</div><div className="school-info"><h3>{school.institution}</h3><p>{school.qualification}</p>{school.detail && <span className="school-detail">{school.detail}</span>}</div><span className="school-date">{school.period}</span></article>)}</div><div className="skills-block"><h3>Technical focus & skills</h3><div className="skill-tags">{profile.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></div></section>;
}

function Credentials() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const searchInput = useRef(null);
  const categories = ['All', 'Cloud & software', 'Security', 'Communications', 'Leadership'];
  const filtered = profile.certifications.filter(cert => (filter === 'All' || cert.category === filter) && `${cert.title} ${cert.issuer} ${cert.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  const visible = expanded ? filtered : filtered.slice(0, 6);
  const clearSearch = () => { setQuery(''); setFilter('All'); setExpanded(false); searchInput.current?.focus(); };
  return <section className="credentials section-shell section-space" id="credentials" tabIndex={-1} aria-labelledby="credentials-title">
    <div className="section-heading"><h2 id="credentials-title">Learning, without limits.</h2><p>Certifications and courses across cloud, security, communications and leadership.</p></div>
    <div className="credential-tools"><div className="filters" role="group" aria-label="Filter certifications">{categories.map(category => <button key={category} aria-pressed={filter === category} onClick={() => { setFilter(category); setExpanded(false); }}>{category}</button>)}</div><div className="search-field"><MagnifyingGlass size={18} aria-hidden="true" /><input ref={searchInput} type="search" value={query} onChange={event => { setQuery(event.target.value); setExpanded(false); }} aria-label="Search credentials" placeholder="Find a credential" /></div></div>
    <p className="result-count" role="status" aria-live="polite">Showing {visible.length} of {filtered.length} credentials & courses</p>
    <div className="credential-list" id="credential-results">{visible.map(cert => <article key={cert.id} className="credential-row"><div className="credential-details"><h3>{cert.title}</h3><p>{cert.issuer}{cert.note && <span className="course-note">{cert.note}</span>}</p></div><div className="credential-meta"><span className="credential-category">{cert.category}</span><span>{cert.date}</span>{cert.credentialId && !cert.credentialId.startsWith('UC-') && <span className="credential-id">ID {cert.credentialId}</span>}</div></article>)}</div>
    {filtered.length === 0 && <div className="empty-state"><h3>No matching credentials.</h3><p>Try a different title, provider, or category.</p><button className="button button-secondary" onClick={clearSearch}>Reset search</button></div>}
    <div className="credential-actions">{filtered.length > 6 && <button className="button button-secondary" aria-expanded={expanded} aria-controls="credential-results" onClick={() => setExpanded(value => !value)}>{expanded ? 'Show fewer credentials' : `View all ${filtered.length} credentials`}{expanded ? <Minus size={17} aria-hidden="true" /> : <Plus size={17} aria-hidden="true" />}</button>}<ExternalLink className="text-link" href={profile.linkedin}>View on LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></ExternalLink></div>
  </section>;
}

function Recognition() {
  return <section className="recognition section-shell section-space" aria-labelledby="recognition-title"><div className="section-aside"><h2 id="recognition-title">Recognition.</h2><p>For achievement,{' '}<br />skills, and service.</p></div><div className="award-list">{profile.awards.map(award => <article className="award-row" key={award.title}><span className="award-date">{award.date}</span><h3>{award.title}</h3><p>{award.detail}<span>{award.issuer}</span></p></article>)}</div></section>;
}

function Contact() {
  return <><section className="contact section-band" id="contact" tabIndex={-1} aria-labelledby="contact-title"><div className="section-shell"><h2 id="contact-title">Let’s connect.</h2><p>Start a conversation with Jia Sheng.</p><ExternalLink className="button button-primary" href={profile.linkedin}><LinkedinLogo size={20} weight="fill" aria-hidden="true" />Connect on LinkedIn<ArrowUpRight size={17} aria-hidden="true" /></ExternalLink></div></section><footer className="site-footer section-shell"><span>Chua Jia Sheng</span><span>Engineering & digital technology</span><a href="#overview">Back to top <ArrowUp size={16} aria-hidden="true" /></a></footer></>;
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" tabIndex={-1}><Hero /><Experience /><Education /><Credentials /><Recognition /><Contact /></main></>;
}
