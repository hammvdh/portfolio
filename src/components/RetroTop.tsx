import { useCallback, useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { IconBack, IconForward, IconRefresh, IconHome, IconHelp } from './RetroToolbarIcons';

function requestExit() {
  if (window.confirm('Are you sure you want to exit Portfolio.exe?')) {
    window.close();
    setTimeout(() => {
      window.location.href = 'about:blank';
    }, 100);
  }
}

function TitleBarControls() {
  const [minimized, setMinimized] = useState(false);

  const onMin = () => setMinimized((m) => !m);
  const onMax = async () => {
    const el = document.querySelector('.retro-window');
    if (!document.fullscreenElement && el instanceof HTMLElement) {
      try {
        await el.requestFullscreen();
      } catch {
        /* ignore */
      }
    } else {
      await document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    document.body.classList.toggle('retro-window-minimized', minimized);
    return () => document.body.classList.remove('retro-window-minimized');
  }, [minimized]);

  return (
    <div className="retro-titlebar__controls" role="group" aria-label="Window controls">
      <button type="button" className="retro-titlebar__btn retro-titlebar__btn--min" onClick={onMin} aria-label="Minimize" />
      <button type="button" className="retro-titlebar__btn retro-titlebar__btn--max" onClick={onMax} aria-label="Maximize" />
      <button type="button" className="retro-titlebar__btn retro-titlebar__btn--close" onClick={requestExit} aria-label="Close" />
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
            This site uses a classic desktop-style shell. Use the <strong>File</strong> menu for page actions,{' '}
            <strong>Edit</strong> for clipboard, and <strong>View</strong> for layout. On Home, use the sidebar or tabs
            to jump between sections.
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

type MenuId = 'file' | 'edit' | 'view';

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

function MenuSep() {
  return <div className="retro-menu-sep" role="separator" />;
}

export default function RetroTop({ pathname }: { pathname: string }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const menubarRef = useRef<HTMLDivElement>(null);
  const title = titleBarForPath(pathname);

  const closeMenus = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    if (!openMenu) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (menubarRef.current && !menubarRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [openMenu]);

  const openUrl = () => {
    const url = window.prompt('Open URL (relative or absolute):', window.location.pathname);
    if (url != null && url.trim()) {
      try {
        if (url.startsWith('http')) window.location.href = url;
        else window.location.href = url.startsWith('/') ? url : `/${url}`;
      } catch {
        /* ignore */
      }
    }
    closeMenus();
  };

  const copyPageUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      closeMenus();
    } catch {
      window.prompt('Copy this URL:', window.location.href);
      closeMenus();
    }
  };

  const selectAllInPage = () => {
    const root = document.querySelector('.retro-main__content');
    if (!root) return closeMenus();
    const range = document.createRange();
    range.selectNodeContents(root);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    closeMenus();
  };

  const toggleStatusBar = () => {
    document.body.classList.toggle('retro-hide-statusbar');
    closeMenus();
  };

  const printPage = () => {
    closeMenus();
    window.print();
  };

  return (
    <>
      <header className="retro-titlebar">
        <div className="retro-titlebar__text">{title}</div>
        <TitleBarControls />
      </header>

      <div ref={menubarRef} className="retro-menubar" role="menubar" aria-label="Application menu">
        <div className="retro-menubar__slot">
          <button
            type="button"
            className={`retro-menubar__trigger${openMenu === 'file' ? ' retro-menubar__trigger--open' : ''}`}
            aria-expanded={openMenu === 'file'}
            aria-haspopup="true"
            onClick={() => setOpenMenu((m) => (m === 'file' ? null : 'file'))}
          >
            File
          </button>
          {openMenu === 'file' && (
            <div className="retro-menu retro-menu--file" role="menu">
              <button type="button" className="retro-menu__item" role="menuitem" onClick={() => { window.open('/', '_blank'); closeMenus(); }}>
                New window
              </button>
              <button type="button" className="retro-menu__item" role="menuitem" onClick={openUrl}>
                Open…
              </button>
              <MenuSep />
              <a className="retro-menu__item" role="menuitem" href="/" onClick={closeMenus}>
                Home
              </a>
              <a className="retro-menu__item" role="menuitem" href="/about/" onClick={closeMenus}>
                About
              </a>
              <a className="retro-menu__item" role="menuitem" href="/work/" onClick={closeMenus}>
                Work
              </a>
              <a className="retro-menu__item" role="menuitem" href="/blog/" onClick={closeMenus}>
                Blog
              </a>
              <a className="retro-menu__item" role="menuitem" href="/contact/" onClick={closeMenus}>
                Contact
              </a>
              <MenuSep />
              <a
                className="retro-menu__item"
                role="menuitem"
                href="https://drive.google.com/file/d/1ZSCS8i97f35PkGOfqCOUPxefGt2DMpyk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
              >
                Open résumé…
              </a>
              <MenuSep />
              <button type="button" className="retro-menu__item" role="menuitem" onClick={printPage}>
                Print…
              </button>
              <MenuSep />
              <button
                type="button"
                className="retro-menu__item"
                role="menuitem"
                onClick={() => {
                  closeMenus();
                  requestExit();
                }}
              >
                Exit
              </button>
            </div>
          )}
        </div>

        <div className="retro-menubar__slot">
          <button
            type="button"
            className={`retro-menubar__trigger${openMenu === 'edit' ? ' retro-menubar__trigger--open' : ''}`}
            aria-expanded={openMenu === 'edit'}
            aria-haspopup="true"
            onClick={() => setOpenMenu((m) => (m === 'edit' ? null : 'edit'))}
          >
            Edit
          </button>
          {openMenu === 'edit' && (
            <div className="retro-menu retro-menu--edit" role="menu">
              <button type="button" className="retro-menu__item" role="menuitem" onClick={copyPageUrl}>
                Copy page address
              </button>
              <button type="button" className="retro-menu__item" role="menuitem" onClick={selectAllInPage}>
                Select all
              </button>
              <MenuSep />
              <button type="button" className="retro-menu__item" role="menuitem" onClick={() => { window.location.reload(); closeMenus(); }}>
                Refresh
              </button>
            </div>
          )}
        </div>

        <div className="retro-menubar__slot">
          <button
            type="button"
            className={`retro-menubar__trigger${openMenu === 'view' ? ' retro-menubar__trigger--open' : ''}`}
            aria-expanded={openMenu === 'view'}
            aria-haspopup="true"
            onClick={() => setOpenMenu((m) => (m === 'view' ? null : 'view'))}
          >
            View
          </button>
          {openMenu === 'view' && (
            <div className="retro-menu retro-menu--view" role="menu">
              <button type="button" className="retro-menu__item" role="menuitem" onClick={toggleStatusBar}>
                Status bar
              </button>
              <button
                type="button"
                className="retro-menu__item"
                role="menuitem"
                onClick={() => {
                  const el = document.querySelector('.retro-window');
                  if (el instanceof HTMLElement) {
                    el.requestFullscreen?.().catch(() => {});
                  }
                  closeMenus();
                }}
              >
                Full screen
              </button>
            </div>
          )}
        </div>

        <span className="retro-menubar__item retro-menubar__dead">Tools</span>
        <button type="button" className="retro-menubar__item retro-menubar__btn" onClick={() => { closeMenus(); setAboutOpen(true); }}>
          Help
        </button>
      </div>

      <div className="retro-toolbar" role="toolbar" aria-label="Navigation toolbar">
        <button type="button" className="retro-toolbtn" onClick={() => window.history.back()} aria-label="Back">
          <span className="retro-toolbtn__glyph">
            <IconBack />
          </span>
        </button>
        <button type="button" className="retro-toolbtn" onClick={() => window.history.forward()} aria-label="Forward">
          <span className="retro-toolbtn__glyph">
            <IconForward />
          </span>
        </button>
        <button type="button" className="retro-toolbtn" onClick={() => window.location.reload()} aria-label="Refresh">
          <span className="retro-toolbtn__glyph">
            <IconRefresh />
          </span>
        </button>
        <a className="retro-toolbtn" href="/" aria-label="Home">
          <span className="retro-toolbtn__glyph">
            <IconHome />
          </span>
        </a>
        <button type="button" className="retro-toolbtn" onClick={() => setAboutOpen(true)} aria-label="Help">
          <span className="retro-toolbtn__glyph">
            <IconHelp />
          </span>
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
