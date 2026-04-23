import { GitHubCalendar } from 'react-github-calendar';
import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';
import { useRetroShell } from './RetroShellContext';
import { SectionPanel } from './SectionPanel';
import type { PortfolioSectionId } from './portfolioSectionIds';

type GitHubHeatmapProps = {
  registerSection?: (id: PortfolioSectionId, el: HTMLElement | null) => void;
};

const retroLightTheme = {
  light: ['#c0c0c0', '#9aa0a6', '#6b8e23', '#4169e1', '#1a1a1a'],
};

const retroDarkTheme = {
  dark: ['#3a3a3a', '#4a4a4a', '#6b8e23', '#7aa6ff', '#e0e0e0'],
};

const GitHubHeatmap = ({ registerSection }: GitHubHeatmapProps) => {
  const isLightMode = useStore(isLightModeStore);
  const inRetro = useRetroShell();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const blackWhiteTheme = {
    dark: ['#1a1a1a', '#404040', '#707070', '#a0a0a0', '#ffffff'],
  };

  const lightBlackWhiteTheme = {
    light: ['#e5e5e5', '#d0d0d0', '#a0a0a0', '#707070', '#1a1a1a'],
  };

  if (inRetro) {
    return (
      <SectionPanel id="activity" registerSection={registerSection} className="retro-panel retro-panel--heatmap">
        <div className="retro-panel__titlebar">
          <span className="retro-panel__title" id="heading-activity">
            Open source activity
          </span>
        </div>
        <div className="retro-panel__body retro-panel__body--flush">
          <div className={`github-heatmap-container retro-heatmap ${isLightMode ? 'light-mode' : ''}`}>
            <GitHubCalendar
              username="hammvdh"
              theme={isLightMode ? retroLightTheme : retroDarkTheme}
              colorScheme={isLightMode ? 'light' : 'dark'}
              tooltips={{
                // @ts-ignore
                activity: {
                  text: (activity: { date: string | number | Date; count: number }) => {
                    const date = new Date(activity.date);
                    const formattedDate = date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                    return `${activity.count} contribution${activity.count > 1 ? 's' : ''} on ${formattedDate}`;
                  },
                },
              }}
              labels={{
                legend: { less: 'Less', more: 'More' },
                months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                totalCount: '{{count}} contributions in {{year}}',
                weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              }}
            />
          </div>
        </div>
      </SectionPanel>
    );
  }

  return (
    <div className={`mt-[1em] fade-up hidden sm:block github-heatmap-container ${isLightMode ? 'light-mode' : ''}`}>
      <GitHubCalendar
        username="hammvdh"
        theme={isLightMode ? lightBlackWhiteTheme : blackWhiteTheme}
        colorScheme={isLightMode ? 'light' : 'dark'}
        tooltips={{
          // @ts-ignore
          activity: {
            text: (activity: { date: string | number | Date; count: number }) => {
              const date = new Date(activity.date);
              const formattedDate = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });
              return `${activity.count} contribution${activity.count > 1 ? 's' : ''} on ${formattedDate}`;
            },
          },
        }}
        labels={{
          legend: { less: 'Less', more: 'More' },
          months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          totalCount: '{{count}} contributions in {{year}}',
          weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        }}
      />
    </div>
  );
};

export default GitHubHeatmap;
