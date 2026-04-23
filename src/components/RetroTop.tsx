import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

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
            This site uses a classic desktop-style shell on every page. On Home, use the sidebar or tabs to move
            between sections. On other pages, use the sidebar to navigate the site.
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

function titleBarForPath(pathname: string) {
  const p = pathname.replace(/\/$/, '') || '/';
  if (p === '/') return 'Portfolio.exe — Hammadh Arquil — Overview';
  if (p === '/about') return 'Portfolio.exe — About';
  if (p === '/work') return 'Portfolio.exe — Work';
  if (p === '/blog') return 'Portfolio.exe — Blog';
  if (p === '/contact') return 'Portfolio.exe — Contact';
  if (p.startsWith('/blog/')) return 'Portfolio.exe — Blog — Article';
  return 'Portfolio.exe — Hammadh Arquil';
}

export default function RetroTop({ pathname }: { pathname: string }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const title = titleBarForPath(pathname);

  return (
    <>
      <header className="retro-titlebar">
        <div className="retro-titlebar__text">{title}</div>
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
        <a className="retro-toolbtn" href="/" aria-label="Home">
          <span className="retro-toolbtn__icon retro-toolbtn__icon--home" />
        </a>
        <button type="button" className="retro-toolbtn" onClick={() => setAboutOpen(true)} aria-label="Help">
          <span className="retro-toolbtn__icon retro-toolbtn__icon--help" />
        </button>
        <span className="retro-toolbar__sep" aria-hidden="true" />
        <a className="retro-toolbar__link" href="/about/">
          About
        </a>
        <a className="retro-toolbar__link" href="/work/">
          Work
        </a>
        <a className="retro-toolbar__link" href="/blog/">
          Blog
        </a>
        <a className="retro-toolbar__link" href="/contact/">
          Contact
        </a>
        <span className="retro-toolbar__spacer" />
        <span className="retro-toolbar__theme">
          <ThemeToggle />
        </span>
      </div>

      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
}
