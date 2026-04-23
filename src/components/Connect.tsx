import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';
import { useRetroShell } from '../lib/useRetroShell';
import { SectionPanel } from './SectionPanel';
import type { PortfolioSectionId } from './portfolioSectionIds';

type ConnectProps = {
  registerSection?: (id: PortfolioSectionId, el: HTMLElement | null) => void;
};

const links = [
  { label: 'Email', href: 'mailto:hammadharquil@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hammadharquil/' },
  { label: 'X / Twitter', href: 'https://twitter.com/elitepsd' },
  { label: 'Instagram', href: 'https://www.instagram.com/hammvdh/' },
  { label: 'GitHub', href: 'https://github.com/hammvdh' },
  { label: 'Behance', href: 'https://www.behance.net/hammadh' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1ZSCS8i97f35PkGOfqCOUPxefGt2DMpyk/view?usp=sharing' },
];

const Connect = ({ registerSection }: ConnectProps) => {
  const isLightMode = useStore(isLightModeStore);
  const inRetro = useRetroShell();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const headerColor = 'text-[var(--accent)]';
  const bodyTextColor = isLightMode ? 'text-[#2a2a2a]' : 'text-[#8a8a91]';

  if (!mounted) return null;

  if (inRetro) {
    return (
      <SectionPanel id="connect" registerSection={registerSection} className="retro-panel">
        <div className="retro-panel__titlebar">
          <span className="retro-panel__title" id="heading-connect">
            Connect
          </span>
        </div>
        <div className="retro-panel__body">
          <p className="retro-p retro-muted">Open a channel — all links open in a new tab except mail.</p>
          <div className="retro-linkgrid">
            {links.map((l) => (
              <a
                key={l.href}
                className="retro-linkbtn"
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </SectionPanel>
    );
  }

  return (
    <div className="mt-[1em] sm:mt-[2em] fade-up" data-delay="3">
      <h4 className={`${headerColor} font-medium text-md sm:text-lg`}>Let's connect</h4>
      <div className={`${bodyTextColor} gap-3 sm:gap-4 flex flex-wrap mt-3`}>
        {links.map((l) => (
          <a
            key={l.href}
            className="animated-underline text-sm sm:text-base hover:text-[var(--accent)]"
            href={l.href}
            target={l.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Connect;
