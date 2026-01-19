import { Layers3, ArrowUpRight } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';

const FeaturedWork = () => {
  const isLightMode = useStore(isLightModeStore);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const textColor = isLightMode ? 'text-[#1a1a1a]' : 'text-white';
  const bodyTextColor = isLightMode ? 'text-[#2a2a2a]' : 'text-[#8a8a91]';
  const linkTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#A4A4A4]';
  const headerColor = isLightMode ? 'text-[#1a1a1a]' : 'text-[#bede64]';
  
  if (!mounted) return null;

  return (
    <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="4">
        <div className={`flex flex-col sm:flex-row sm:justify-between ${textColor} font-semibold items-start sm:items-center mb-4 sm:mb-0`}>
          <div className={`flex flex-row ${textColor} gap-2 hover:text-[#bede64] items-center mb-2 sm:mb-0`}>
            <Layers3 className={headerColor} size={20} />
            <h4 className={`${headerColor} font-semibold text-lg sm:text-xl`}>
              Featured Work
            </h4>
          </div>
          <div className={`flex flex-row ${linkTextColor} gap-1 hover:text-[#bede64] items-center`}>
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
          <div className="rounded-lg overflow-hidden link">
            <div className={`proj ${isLightMode ? 'bg-[#e5e5e5]' : 'bg-[#373737]'} h-[180px] sm:h-[200px] proj1`}></div>
            <div className="mt-3">
              <h5 className={`${textColor} font-semibold text-sm sm:text-base mb-1`}>Vital: Remote Patient Monitoring</h5>
              <p className={`${bodyTextColor} text-xs sm:text-sm`}>Realtime patient monitoring system for care providers with triage and health status alerts.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden link">
            <div className={`proj ${isLightMode ? 'bg-[#e5e5e5]' : 'bg-[#373737]'} h-[180px] sm:h-[200px] proj2`}></div>
            <div className="mt-3">
                <h5 className={`${textColor} font-semibold text-sm sm:text-base mb-1`}>Frostify Portfolio</h5>
                <p className={`${bodyTextColor} text-xs sm:text-sm`}>A portfolio site design built during a community challenge.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden link">
            <div className={`proj ${isLightMode ? 'bg-[#e5e5e5]' : 'bg-[#373737]'} h-[180px] sm:h-[200px] proj3`}></div>
            <div className="mt-3">
            <h5 className={`${textColor} font-semibold text-sm sm:text-base mb-1`}>Prayr</h5>
            <p className={`${bodyTextColor} text-xs sm:text-sm`}>An Islamic companion application with prayer times, tracking, podcasts, quran, duas, hadith.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden link">
            <div className={`proj ${isLightMode ? 'bg-[#e5e5e5]' : 'bg-[#373737]'} h-[180px] sm:h-[200px] proj4`}></div>
            <div className="mt-3">
              <h5 className={`${textColor} font-semibold text-sm sm:text-base mb-1`}>Medoment</h5>
              <p className={`${bodyTextColor} text-xs sm:text-sm`}>Designed a website for HTWorks, before I ended up joining the team as a software engineer</p>
            </div>
          </div>
        </div>
      </div>
  );
};
export default FeaturedWork;
