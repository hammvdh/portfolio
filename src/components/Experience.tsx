import { Briefcase, ArrowUpRight } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';

const Experience = () => {
    const isLightMode = useStore(isLightModeStore);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const textColor = isLightMode ? 'text-[#1a1a1a]' : 'text-white';
    const mutedTextColor = isLightMode ? 'text-[#5a5a5a]' : 'text-[#96969A]';
    const linkTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#A4A4A4]';
    const headerColor = isLightMode ? 'text-[#1a1a1a]' : 'text-[#bede64]';
  
    if (!mounted) return null;

    return (
      <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="5">
        <div className={`flex flex-col sm:flex-row sm:justify-between ${textColor} items-start sm:items-center mb-4 sm:mb-0`}>
          <div className={`flex flex-row ${textColor} gap-2 hover:text-[#bede64] items-center mb-2 sm:mb-0`}>
            <Briefcase className={headerColor} size={20} />
            <h4 className={`${headerColor} font-medium text-lg sm:text-xl`}>Experience</h4>
          </div>

          <div className={`flex flex-row ${linkTextColor} hover:text-[#bede64] items-center`}>
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
          <div className="rounded-lg">
            <div>
              <p className={`${mutedTextColor} text-sm sm:text-base`}>2025 - 2026</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className={`mr-2 ${textColor} text-sm sm:text-base`}>Founding Engineer</p>
                <p className={`${mutedTextColor} hover:text-[#bede64] link text-sm sm:text-base`}>
                <a href="https://sunoanalytics.com" target="_blank" rel="noopener noreferrer"> @ Suno Analytics</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div>
              <p className={`${mutedTextColor} text-sm sm:text-base`}>2024 - Present</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className={`mr-2 ${textColor} text-sm sm:text-base`}>Software Engineer</p>
                <p className={`${mutedTextColor} hover:text-[#bede64] link text-sm sm:text-base`}>
                <a href="https://htworkslk.com" target="_blank" rel="noopener noreferrer"> @ HTWorks</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div>
              <p className={`${mutedTextColor} text-sm sm:text-base`}>2025 - Present</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className={`mr-2 ${textColor} text-sm sm:text-base`}>Founder & CEO</p>
                <p className={`${mutedTextColor} hover:text-[#bede64] link text-sm sm:text-base`}>
                <a href="https://prayr-app.com" target="_blank" rel="noopener noreferrer"> @ Prayr</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div>
              <p className={`${mutedTextColor} text-sm sm:text-base`}>2023 - 2024</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className={`mr-2 ${textColor} text-sm sm:text-base`}>Junior Software Engineer</p>
                <p className={`${mutedTextColor} hover:text-[#bede64] link text-sm sm:text-base`}>
                <a href="https://htworkslk.com" target="_blank" rel="noopener noreferrer"> @ HTWorks</a>
                </p>
              </div>
            </div>
          </div>
         
          <div className="rounded-lg">
            <div>
              <p className={`${mutedTextColor} text-sm sm:text-base`}>2016 - Present</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className={`mr-2 ${textColor} text-sm sm:text-base`}>Visual/Product Designer</p>
                <p className={`${mutedTextColor} hover:text-[#bede64] link text-sm sm:text-base`}>
                <a href="https://x.com/hammvdh" target="_blank" rel="noopener noreferrer"> @ ElitePSD</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div>
              <p className={`${mutedTextColor} text-sm sm:text-base`}>2021 - 2022</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className={`mr-2 ${textColor} text-sm sm:text-base`}>Software Engineer Intern</p>
                <p className={`${mutedTextColor} hover:text-[#bede64] link text-sm sm:text-base`}>
                <a href="https://htworkslk.com" target="_blank" rel="noopener noreferrer"> @ HTWorks</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Experience;
