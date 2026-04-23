import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useRetroShell } from '../lib/useRetroShell';
import { SectionPanel } from './SectionPanel';
import type { PortfolioSectionId } from './portfolioSectionIds';

type IntroProps = {
  registerSection?: (id: PortfolioSectionId, el: HTMLElement | null) => void;
};

const Intro = ({ registerSection }: IntroProps) => {
  const [currentTime, setCurrentTime] = useState('');
  const isLightMode = useStore(isLightModeStore);
  const inRetro = useRetroShell();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const getISTTime = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, '0');
      return `${displayHours}:${displayMinutes} ${ampm}`;
    };

    setCurrentTime(getISTTime());
    const interval = setInterval(() => {
      setCurrentTime(getISTTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  if (inRetro) {
    return (
      <SectionPanel id="overview" registerSection={registerSection} className="retro-panel retro-panel--first">
        <div className="retro-panel__titlebar">
          <span className="retro-panel__title" id="heading-overview">
            Overview
          </span>
        </div>
        <div className="retro-panel__body">
          <div className="retro-intro-head">
            <div className="retro-avatar" aria-hidden="true" />
            <div>
              <h3 className="retro-heading-sub">Hammadh Arquil</h3>
              <p className="retro-muted">Software Engineer &amp; Product Designer</p>
            </div>
            <div className="retro-badge">
              <span className="retro-badge__dot" aria-hidden="true" />
              <span>Available for work</span>
            </div>
          </div>
          <p className="retro-p">
            Hey, I&apos;m Hammadh. I&apos;m a software engineer and product designer based in Colombo, Sri Lanka.
            It&apos;s currently {currentTime || '…'} over here.
          </p>
          <p className="retro-p">
            I started as a graphic designer with the alias ElitePSD in 2016 and since then I&apos;ve been building
            digital experiences for various clients having now transitioned into engineering at HTWorks where
            I&apos;ve been building telemedicine and healthcare solutions since 2021. I&apos;ve grown from intern to
            software engineer, working on products that impact patient care.
          </p>
          <p className="retro-p">
            In 2025, I was a founding engineer at Suno Analytics, building AI-native ERP and agentic solutions before
            the company sunsetted. That same year, I founded Prayr—an Islamic companion platform for prayer times,
            spiritual tracking, and community engagement.
          </p>
        </div>
      </SectionPanel>
    );
  }

  const textColor = isLightMode ? 'text-[#1a1a1a]' : 'text-white';
  const secondaryTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#656565]';
  const bodyTextColor = isLightMode ? 'text-[#2a2a2a]' : 'text-[#8a8a91]';

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between fade-up mt-[2em] sm:mt-[4em]" data-delay="0">
        <div className={`flex flex-row ${textColor} font-semibold items-center mb-4 sm:mb-0`}>
          <div className="avatar h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] rounded-full bg-white mr-3"></div>
          <div>
            <h3 className={`text-lg sm:text-xl font-semibold ${textColor}`}>Hammadh Arquil</h3>
            <p className={`text-base sm:text-lg font-normal ${secondaryTextColor}`}>
              Software Engineer & Product Designer
            </p>
          </div>
        </div>
        <div className={`flex ${textColor} font-medium items-center text-xs sm:text-sm`}>
          <span className="availability-indicator mr-2"></span>
          <p className="whitespace-nowrap">AVAILABLE FOR WORK</p>
        </div>
      </div>
      <div className="mt-[1.5em] sm:mt-[2em] fade-up" data-delay="1">
        <p className={`text-pretty text-sm sm:text-base leading-[1.75rem] sm:leading-[2rem] ${bodyTextColor}`}>
          Hey, I'm Hammadh. I'm a software engineer and product designer based in Colombo, Sri Lanka. It's currently{' '}
          {currentTime || 'loading...'} over here.
        </p>
        <p className={`text-pretty text-sm sm:text-base mt-4 leading-[1.75rem] sm:leading-[2rem] ${bodyTextColor}`}>
          I started as a graphic designer with the alias ElitePSD in 2016 and since then I've been building digital
          experiences for various clients having now transitioned into engineering at HTWorks where I've been
          building telemedicine and healthcare solutions since 2021. I've grown from intern to software engineer,
          working on products that impact patient care.
        </p>
        <p className={`text-pretty text-sm sm:text-base mt-4 leading-[1.75rem] sm:leading-[2rem] ${bodyTextColor}`}>
          In 2025, I was a founding engineer at Suno Analytics, building AI-native ERP and agentic solutions before the
          company sunsetted. That same year, I founded Prayr—an Islamic companion platform for prayer times, spiritual
          tracking, and community engagement.
        </p>
      </div>
    </>
  );
};

export default Intro;
