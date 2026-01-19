import { GitHubCalendar } from 'react-github-calendar';
import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';

const GitHubHeatmap = () => {
  const isLightMode = useStore(isLightModeStore);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const blackWhiteTheme = {
    dark: [
      '#1a1a1a', // level 0 - no contributions (dark gray)
      '#404040', // level 1
      '#707070', // level 2
      '#a0a0a0', // level 3
      '#ffffff', // level 4 - most contributions (white)
    ],
  };

  const lightBlackWhiteTheme = {
    light: [
      '#e5e5e5', // level 0 - no contributions (light gray)
      '#d0d0d0', // level 1
      '#a0a0a0', // level 2
      '#707070', // level 3
      '#1a1a1a', // level 4 - most contributions (dark gray/black)
    ],
  };

  return (
    <div className={`mt-[1em] fade-up hidden sm:block github-heatmap-container ${isLightMode ? 'light-mode' : ''}`}>
      <GitHubCalendar 
        username="hammvdh" 
        theme={isLightMode ? lightBlackWhiteTheme : blackWhiteTheme} 
        colorScheme={isLightMode ? "light" : "dark"}
        tooltips={{
          // @ts-ignore
          activity: {
            text: (activity: { date: string | number | Date; count: number; }) => {
              const date = new Date(activity.date);
              const formattedDate = date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              });
              return `${activity.count} contribution${activity.count > 1 ? 's' : ''} on ${formattedDate}`;
            }
          }
        }}
        // @ts-ignore
        labels={{
            legend: {
                less: 'Less',
                more: 'More',
            },
            months: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            totalCount: '{{count}} contributions in {{year}}',
            weekdays: [
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ]
        }}
      />
    </div>
  );
};
export default GitHubHeatmap;
