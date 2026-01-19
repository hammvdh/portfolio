import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import Intro from './Intro';
import GitHubHeatmap from './GitHubHeatmap';
import Connect from './Connect';
import FeaturedWork from './FeaturedWork';
import Experience from './Experience';
import TechStack from './TechStack';
import { useState, useEffect } from 'react';

const Home = () => {
  const isLightMode = useStore(isLightModeStore);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={`container ${isLightMode ? 'light-mode' : ''} pb-[3em]`}>
      <Intro />
      <GitHubHeatmap />
      <Connect />
      <FeaturedWork />
      <Experience />
      <TechStack />
      
      <p className={`text-xs sm:text-sm font-normal ${isLightMode ? 'text-[#4a4a4a]' : 'text-[#656565]'} mt-[2em] sm:mt-[3em]`}>
        ©️ 2026 Hammadh Arquil. All Rights Reserved.
      </p>
      <div className="mt-[1.5em] sm:mt-[2em]"></div>
    </div>
  );
};

export default Home;
