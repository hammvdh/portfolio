import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';

const Connect = () => {
    const isLightMode = useStore(isLightModeStore);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    
    const bodyTextColor = isLightMode ? 'text-[#2a2a2a]' : 'text-[#8a8a91]';
    const headerColor = isLightMode ? 'text-[#1a1a1a]' : 'text-[#bede64]';

    if (!mounted) return null;

    return (
        <div className="mt-[1em] sm:mt-[2em] fade-up" data-delay="3">
            <h4 className={`${headerColor} font-medium text-md sm:text-lg`}>Let's connect</h4>
            <div className={`${bodyTextColor} gap-3 sm:gap-4 flex flex-wrap mt-3`}>
            <a
                className="animated-underline text-sm sm:text-base hover:text-[#bede64]"
                href="mailto:hammadharquil@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Email
            </a>
            <a
                className="animated-underline text-sm sm:text-base hover:text-[#bede64]"
                href="https://www.linkedin.com/in/hammadharquil/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
            <a
                className="animated-underline text-sm sm:text-base hover:text-[#bede64]"
                href="https://twitter.com/elitepsd"
                target="_blank"
                rel="noopener noreferrer"
            >
                X / Twitter
            </a>
            <a
                className="animated-underline text-sm sm:text-base hover:text-[#bede64]"
                href="https://www.instagram.com/hammvdh/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram
            </a>
            <a
                className="animated-underline text-sm sm:text-base hover:text-[#bede64]"
                href="https://github.com/hammvdh"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            <a
                className="animated-underline text-sm sm:text-base hover:text-[#bede64]"
                href="https://www.behance.net/hammadh"
                target="_blank"
                rel="noopener noreferrer"
            >
                Behance
            </a>
            <a
                className="animated-underline text-sm sm:text-base hover:text-[#bede64]"
                href="https://drive.google.com/file/d/1ZSCS8i97f35PkGOfqCOUPxefGt2DMpyk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                Resume
            </a>
            </div>
        </div>
    );
};

export default Connect;
