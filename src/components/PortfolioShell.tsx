import { useCallback, useEffect, useRef, useState } from 'react';
import { RetroShellProvider } from './RetroShellContext';
import ThemeToggle from './ThemeToggle';
import Intro from './Intro';
import GitHubHeatmap from './GitHubHeatmap';
import Connect from './Connect';
import FeaturedWork from './FeaturedWork';
import Experience from './Experience';
import TechStack from './TechStack';
import type { PortfolioSectionId } from './portfolioSectionIds';

const NAV: { id: PortfolioSectionId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'activity', label: 'Activity' },
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'connect', label: 'Connect' },
];

function TitleBarControls() {
  return (
    <div className="retro-titlebar__controls" aria-hidden="true">
      <span className="retro-titlebar__btn retro-titlebar__btn--min" />
      <span className="retro-titlebar__btn retro-titlebar__btn--max" />
      <span className="retro-titlebar__btn retro-titlebar__btn--close" />
    </div>
  );
}

function AboutDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="retro-dialog-overlay" role="presentation" onMouseDown={onClose}>
      <div
        className="retro-dialog"
        role="dialog"
        aria-labelledby="about-dialog-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="retro-dialog__titlebar">
          <span id="about-dialog-title" className="retro-dialog__title">
            About Portfolio.exe
          </span>
          <button type="button" className="retro-dialog__close" onClick={onClose} aria-label="Close dialog">
            ×
          </button>
        </div>
        <div className="retro-dialog__body">
          <p className="retro-dialog__p">
            This portfolio uses a classic desktop-style interface. Use the sidebar or View menu to switch
            sections. Links open in a new tab where noted.
          </p>
          <div className="retro-dialog__actions">
            <button type="button" className="retro-btn" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioShell() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<PortfolioSectionId>('overview');
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionRefs = useRef<Partial<Record<PortfolioSectionId, HTMLElement | null>>>({});
  const mainScrollRef = useRef<HTMLDivElement>(null);

  const registerSection = useCallback((id: PortfolioSectionId, el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  }, []);

  const scrollToSection = useCallback((id: PortfolioSectionId) => {
    setActiveSection(id);
    setMobileNavOpen(false);
    requestAnimationFrame(() => {
      sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  useEffect(() => {
    const container = mainScrollRef.current;
    if (!container) return;

    const updateActiveFromScroll = () => {
      const cr = container.getBoundingClientRect();
      let best: PortfolioSectionId | null = null;
      let bestVisible = 0;
      for (const item of NAV) {
        const el = document.getElementById(`section-${item.id}`);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const top = Math.max(r.top, cr.top);
        const bottom = Math.min(r.bottom, cr.bottom);
        const visible = Math.max(0, bottom - top);
        if (visible > bestVisible) {
          bestVisible = visible;
          best = item.id;
        }
      }
      if (best) setActiveSection(best);
    };

    updateActiveFromScroll();
    const t = window.setTimeout(updateActiveFromScroll, 200);
    container.addEventListener('scroll', updateActiveFromScroll, { passive: true });
    window.addEventListener('resize', updateActiveFromScroll);
    return () => {
      window.clearTimeout(t);
      container.removeEventListener('scroll', updateActiveFromScroll);
      window.removeEventListener('resize', updateActiveFromScroll);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.classList.add('retro-home');
    return () => {
      document.body.classList.remove('retro-home');
    };
  }, []);

  if (!mounted) {
    return <div className="retro-loading" aria-busy="true" />;
  }

  const statusLabel =
    NAV.find((n) => n.id === activeSection)?.label ?? 'Ready';

  return (
    <RetroShellProvider>
      <div className="retro-desktop">
        <div className="retro-window">
          <header className="retro-titlebar">
            <div className="retro-titlebar__text">Portfolio.exe — Hammadh Arquil — Overview</div>
            <TitleBarControls />
          </header>

          <div className="retro-menubar" role="menubar" aria-label="Application menu">
            <span className="retro-menubar__item">File</span>
            <span className="retro-menubar__item">Edit</span>
            <span className="retro-menubar__item">View</span>
            <span className="retro-menubar__item">Tools</span>
            <button type="button" className="retro-menubar__item retro-menubar__btn" onClick={() => setAboutOpen(true)}>
              Help
            </button>
          </div>

          <div className="retro-toolbar" role="toolbar" aria-label="Navigation toolbar">
            <button type="button" className="retro-toolbtn" onClick={() => window.history.back()} aria-label="Back">
              <span className="retro-toolbtn__icon retro-toolbtn__icon--back" />
            </button>
            <button type="button" className="retro-toolbtn" onClick={() => window.history.forward()} aria-label="Forward">
              <span className="retro-toolbtn__icon retro-toolbtn__icon--fwd" />
            </button>
            <button type="button" className="retro-toolbtn" onClick={() => window.location.reload()} aria-label="Refresh">
              <span className="retro-toolbtn__icon retro-toolbtn__icon--refresh" />
            </button>
            <button type="button" className="retro-toolbtn" onClick={() => scrollToSection('overview')} aria-label="Home">
              <span className="retro-toolbtn__icon retro-toolbtn__icon--home" />
            </button>
            <button type="button" className="retro-toolbtn" onClick={() => setAboutOpen(true)} aria-label="Help">
              <span className="retro-toolbtn__icon retro-toolbtn__icon--help" />
            </button>
            <span className="retro-toolbar__sep" aria-hidden="true" />
            <a className="retro-toolbar__link" href="/about">
              About page
            </a>
            <a className="retro-toolbar__link" href="/work">
              Work
            </a>
            <a className="retro-toolbar__link" href="/blog">
              Blog
            </a>
            <a className="retro-toolbar__link" href="/contact">
              Contact
            </a>
            <span className="retro-toolbar__spacer" />
            <span className="retro-toolbar__theme">
              <ThemeToggle />
            </span>
          </div>

          <div className="retro-body">
            <aside className="retro-sidebar">
              <label className="retro-sidebar__label" htmlFor="retro-view-select">
                Current view
              </label>
              <select
                id="retro-view-select"
                className="retro-select retro-sidebar__select"
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value as PortfolioSectionId)}
              >
                {NAV.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>

              <nav className="retro-sidebar__nav" aria-label="Section navigation">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`retro-navitem${activeSection === item.id ? ' retro-navitem--active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <button
                type="button"
                className="retro-mobile-nav-toggle"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen((o) => !o)}
              >
                {mobileNavOpen ? 'Hide menu' : 'Menu'}
              </button>
            </aside>

            {mobileNavOpen && (
              <div className="retro-mobile-nav" role="navigation" aria-label="Mobile section links">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`retro-navitem retro-navitem--block${activeSection === item.id ? ' retro-navitem--active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <main className="retro-main">
              <div className="retro-tabs" role="tablist" aria-label="Sections">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSection === item.id}
                    className={`retro-tab${activeSection === item.id ? ' retro-tab--active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="retro-main__content" ref={mainScrollRef}>
                <Intro registerSection={registerSection} />
                <GitHubHeatmap registerSection={registerSection} />
                <FeaturedWork registerSection={registerSection} />
                <Experience registerSection={registerSection} />
                <TechStack registerSection={registerSection} />
                <Connect registerSection={registerSection} />

                <p className="retro-footer">© 2026 Hammadh Arquil. All rights reserved.</p>
              </div>
            </main>
          </div>

          <footer className="retro-statusbar">
            <span className="retro-statusbar__left">{statusLabel}</span>
            <span className="retro-statusbar__right">Press Help for about this window</span>
          </footer>
        </div>

        <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
      </div>
    </RetroShellProvider>
  );
}
