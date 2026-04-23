import { useState } from 'react';

const SITE_LINKS: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/work/', label: 'Work' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

function normalizePath(path: string) {
  if (path === '/' || path === '') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export default function RetroSiteNav({ currentPath }: { currentPath: string }) {
  const path = normalizePath(currentPath);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <aside className="retro-sidebar">
        <div className="retro-sidebar__label">Navigate</div>
        <nav className="retro-sidebar__nav" aria-label="Site">
          {SITE_LINKS.map((item) => {
            const active = normalizePath(item.href) === path;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`retro-navitem retro-navitem--link${active ? ' retro-navitem--active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
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
        <div className="retro-mobile-nav" role="navigation" aria-label="Site">
          {SITE_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="retro-navitem retro-navitem--block retro-navitem--link">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
