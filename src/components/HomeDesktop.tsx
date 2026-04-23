import { useCallback, useEffect, useRef, useState } from 'react';
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

export default function HomeDesktop() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<PortfolioSectionId>('overview');
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

  if (!mounted) {
    return <div className="retro-loading" aria-busy="true" />;
  }

  const statusLabel = NAV.find((n) => n.id === activeSection)?.label ?? 'Ready';

  return (
    <div className="retro-home-wrap">
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
  );
}
