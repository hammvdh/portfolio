import { Layers3, ArrowUpRight } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';
import { useRetroShell } from '../lib/useRetroShell';
import { SectionPanel } from './SectionPanel';
import type { PortfolioSectionId } from './portfolioSectionIds';

const projects = [
  {
    key: 'vital',
    title: 'Vital: Remote Patient Monitoring',
    desc: 'Realtime patient monitoring for care providers with triage and health status alerts.',
    projClass: 'proj1',
  },
  {
    key: 'frostify',
    title: 'Frostify Portfolio',
    desc: 'Portfolio site design from a community challenge.',
    projClass: 'proj2',
  },
  {
    key: 'prayr',
    title: 'Prayr',
    desc: 'Islamic companion: prayer times, tracking, podcasts, Quran, duas, hadith.',
    projClass: 'proj3',
  },
  {
    key: 'medoment',
    title: 'Medoment',
    desc: 'Website for HTWorks — joined the team as an engineer afterward.',
    projClass: 'proj4',
  },
];

type FeaturedWorkProps = {
  registerSection?: (id: PortfolioSectionId, el: HTMLElement | null) => void;
};

const FeaturedWork = ({ registerSection }: FeaturedWorkProps) => {
  const isLightMode = useStore(isLightModeStore);
  const inRetro = useRetroShell();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const textColor = isLightMode ? 'text-[#1a1a1a]' : 'text-white';
  const bodyTextColor = isLightMode ? 'text-[#2a2a2a]' : 'text-[#8a8a91]';
  const linkTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#A4A4A4]';
  const headerColor = 'text-[var(--accent)]';

  if (!mounted) return null;

  if (inRetro) {
    return (
      <SectionPanel id="work" registerSection={registerSection} className="retro-panel">
        <div className="retro-panel__titlebar retro-panel__titlebar--split">
          <span className="retro-panel__title" id="heading-work">
            Featured work
          </span>
          <a
            className="retro-panel__action"
            href="https://www.behance.net/hammadh"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more
          </a>
        </div>
        <div className="retro-panel__body retro-panel__body--table">
          <div className="retro-table-wrap">
            <table className="retro-table">
              <thead>
                <tr>
                  <th scope="col">Preview</th>
                  <th scope="col">Project</th>
                  <th scope="col">Summary</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.key}>
                    <td>
                      <div className={`retro-thumb proj ${p.projClass}`} role="img" aria-label="" />
                    </td>
                    <td>
                      <strong>{p.title}</strong>
                    </td>
                    <td>{p.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionPanel>
    );
  }

  return (
    <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="4">
      <div className={`flex flex-col sm:flex-row sm:justify-between ${textColor} font-semibold items-start sm:items-center mb-4 sm:mb-0`}>
        <div className={`flex flex-row ${textColor} gap-2 hover:text-[var(--accent)] items-center mb-2 sm:mb-0`}>
          <Layers3 className={headerColor} size={20} />
          <h4 className={`${headerColor} font-semibold text-lg sm:text-xl`}>Featured Work</h4>
        </div>
        <div className={`flex flex-row ${linkTextColor} gap-1 hover:text-[var(--accent)] items-center`}>
          <a
            className={`font-normal text-sm sm:text-base link ${linkTextColor}`}
            href="https://www.behance.net/hammadh"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More
          </a>
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 mt-[15px]">
        {projects.map((p) => (
          <div key={p.key} className="rounded-lg overflow-hidden link">
            <div className={`proj ${isLightMode ? 'bg-[#e5e5e5]' : 'bg-[#373737]'} h-[180px] sm:h-[200px] ${p.projClass}`}></div>
            <div className="mt-3">
              <h5 className={`${textColor} font-semibold text-sm sm:text-base mb-1`}>{p.title}</h5>
              <p className={`${bodyTextColor} text-xs sm:text-sm`}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
