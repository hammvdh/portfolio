import { Briefcase, ArrowUpRight } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';
import { useRetroShell } from './RetroShellContext';
import { SectionPanel } from './SectionPanel';
import type { PortfolioSectionId } from './portfolioSectionIds';

const roles = [
  { period: '2025 - 2026', title: 'Founding Engineer', org: 'Suno Analytics', href: 'https://sunoanalytics.com', type: 'NEW' as const },
  { period: '2024 - Present', title: 'Software Engineer', org: 'HTWorks', href: 'https://htworkslk.com', type: 'RENEWAL' as const },
  { period: '2025 - Present', title: 'Founder & CEO', org: 'Prayr', href: 'https://prayr-app.com', type: 'NEW' as const },
  { period: '2023 - 2024', title: 'Junior Software Engineer', org: 'HTWorks', href: 'https://htworkslk.com', type: 'RENEWAL' as const },
  { period: '2016 - Present', title: 'Visual/Product Designer', org: 'ElitePSD', href: 'https://x.com/hammvdh', type: 'TRIAL' as const },
  { period: '2021 - 2022', title: 'Software Engineer Intern', org: 'HTWorks', href: 'https://htworkslk.com', type: 'TRIAL' as const },
];

type ExperienceProps = {
  registerSection?: (id: PortfolioSectionId, el: HTMLElement | null) => void;
};

const Experience = ({ registerSection }: ExperienceProps) => {
  const isLightMode = useStore(isLightModeStore);
  const inRetro = useRetroShell();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const textColor = isLightMode ? 'text-[#1a1a1a]' : 'text-white';
  const mutedTextColor = isLightMode ? 'text-[#5a5a5a]' : 'text-[#96969A]';
  const linkTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#A4A4A4]';
  const headerColor = 'text-[var(--accent)]';

  if (!mounted) return null;

  if (inRetro) {
    return (
      <SectionPanel id="experience" registerSection={registerSection} className="retro-panel">
        <div className="retro-panel__titlebar retro-panel__titlebar--split">
          <span className="retro-panel__title" id="heading-experience">
            Experience
          </span>
          <a
            className="retro-panel__action"
            href="https://drive.google.com/file/d/1ZSCS8i97f35PkGOfqCOUPxefGt2DMpyk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className="retro-panel__body retro-panel__body--table">
          <div className="retro-table-wrap">
            <table className="retro-table">
              <thead>
                <tr>
                  <th scope="col">Period</th>
                  <th scope="col">Role</th>
                  <th scope="col">Organization</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((r) => (
                  <tr key={`${r.period}-${r.title}`}>
                    <td>{r.period}</td>
                    <td>{r.title}</td>
                    <td>
                      <a href={r.href} target="_blank" rel="noopener noreferrer" className="retro-table__link">
                        @{r.org}
                      </a>
                    </td>
                    <td>
                      <span className={`retro-tag retro-tag--${r.type.toLowerCase()}`}>{r.type}</span>
                    </td>
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
    <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="5">
      <div className={`flex flex-col sm:flex-row sm:justify-between ${textColor} items-start sm:items-center mb-4 sm:mb-0`}>
        <div className={`flex flex-row ${textColor} gap-2 hover:text-[var(--accent)] items-center mb-2 sm:mb-0`}>
          <Briefcase className={headerColor} size={20} />
          <h4 className={`${headerColor} font-medium text-lg sm:text-xl`}>Experience</h4>
        </div>

        <div className={`flex flex-row ${linkTextColor} hover:text-[var(--accent)] items-center`}>
          <a
            className={`${linkTextColor} font-normal text-sm sm:text-base link`}
            href="https://drive.google.com/file/d/1ZSCS8i97f35PkGOfqCOUPxefGt2DMpyk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <ArrowUpRight size={16} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 mt-[15px]">
        {roles.map((r) => (
          <div key={`${r.period}-${r.title}`} className="rounded-lg">
            <div>
              <p className={`${mutedTextColor} text-sm sm:text-base`}>{r.period}</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className={`mr-2 ${textColor} text-sm sm:text-base`}>{r.title}</p>
                <p className={`${mutedTextColor} hover:text-[var(--accent)] link text-sm sm:text-base`}>
                  <a href={r.href} target="_blank" rel="noopener noreferrer">
                    {' '}
                    @ {r.org}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
