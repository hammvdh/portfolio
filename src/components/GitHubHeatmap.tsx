import { GitHubCalendar } from 'react-github-calendar';
import { useEffect, useState } from 'react';

const transformLastSixMonths = (
  data: Array<{ date: string; count: number; level: number }>
) => {
  const sixAgo = new Date();
  sixAgo.setMonth(sixAgo.getMonth() - 6);
  return data.filter((d) => new Date(d.date) >= sixAgo);
};

// Single theme object with both color schemes — the library indexes
// `theme[colorScheme]`, so both keys must be present.
const theme = {
  light: ['#e5e5ea', '#c7c7cc', '#a4a4ab', '#7d7d83', '#5a8a1a'],
  dark: ['#18181c', '#3f3f44', '#7d7d83', '#a4a4ab', '#c4e069'],
};

const GitHubHeatmap = () => {
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const readTheme = () =>
      (document.documentElement.dataset.theme as 'dark' | 'light') ?? 'dark';
    setColorScheme(readTheme());
    const onTheme = () => setColorScheme(readTheme());
    window.addEventListener('themechange', onTheme);

    const mq = window.matchMedia('(max-width: 639px)');
    const onResize = () => setIsMobile(mq.matches);
    onResize();
    mq.addEventListener('change', onResize);

    return () => {
      window.removeEventListener('themechange', onTheme);
      mq.removeEventListener('change', onResize);
    };
  }, []);

  return (
    <div className="github-heatmap-container">
      <p className="caption">
        {isMobile ? 'Last 6 months' : 'This year on GitHub'}
      </p>
      <GitHubCalendar
        username="hammvdh"
        theme={theme}
        colorScheme={colorScheme}
        blockSize={isMobile ? 10 : 12}
        blockMargin={isMobile ? 3 : 4}
        blockRadius={2}
        fontSize={12}
        // @ts-ignore — transformData is supported but not in older types
        transformData={isMobile ? transformLastSixMonths : undefined}
        labels={{
          totalCount: '{{count}} contributions in the last year',
        }}
        errorMessage="Couldn't load GitHub contributions right now."
      />
    </div>
  );
};

export default GitHubHeatmap;
