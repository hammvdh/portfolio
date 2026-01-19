import './home.css';
import { ArrowUpRight, Laptop, Briefcase, Layers3, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import 'react-github-calendar/tooltips.css';

const Home = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
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
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    if (newMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  const textColor = isLightMode ? 'text-[#1a1a1a]' : 'text-white';
  const secondaryTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#656565]';
  const bodyTextColor = isLightMode ? 'text-[#2a2a2a]' : 'text-[#8a8a91]';
  const mutedTextColor = isLightMode ? 'text-[#5a5a5a]' : 'text-[#96969A]';
  const linkTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#A4A4A4]';
  const headerColor = isLightMode ? 'text-[#1a1a1a]' : 'text-[#bede64]';

  return (
    <div className={`container ${isLightMode ? 'light-mode' : ''}`}>
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 ${textColor} hover:text-[#bede64] transition-colors cursor-pointer z-10 p-2 rounded-full hover:bg-opacity-10 hover:bg-[#bede64]`}
        aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <div className="flex flex-col sm:flex-row sm:justify-between fade-up mt-[3em] sm:mt-[5em]" data-delay="0">
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
          Hey, I'm Hammadh. I'm a software engineer and product designer based in Colombo, Sri Lanka. It's currently {currentTime || 'loading...'} over here.
        </p>
        <p className={`text-pretty text-sm sm:text-base mt-4 leading-[1.75rem] sm:leading-[2rem] ${bodyTextColor}`}>
          I started as a graphic designer with the alias ElitePSD in 2016 and since then I've been building digital experiences for various clients having now transitioned into engineering at HTWorks 
          where I've been building telemedicine and healthcare solutions since 2021. I've grown from 
          intern to software engineer, working on products that impact patient care.
        </p>
        <p className={`text-pretty text-sm sm:text-base mt-4 leading-[1.75rem] sm:leading-[2rem] ${bodyTextColor}`}>
          In 2025, I became a founding engineer at Suno Analytics, building AI-native ERP and agentic 
          solutions. That same year, I founded Prayr—an Islamic companion platform for prayer times, 
          spiritual tracking, and community engagement.
        </p>
      </div>
      <div className="mt-[1em] fade-up hidden sm:block" data-delay="2">
        <GitHubHeatmap isLightMode={isLightMode} />
      </div>
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
              <p className={`${mutedTextColor} text-sm sm:text-base`}>2025 - Present</p>
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
      <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="6">
        <div className={`flex flex-row gap-2 ${textColor} items-center`}>
          <Laptop className={headerColor} size={20} />
          <h4 className={`${headerColor} font-medium text-lg sm:text-xl`}>Tech Stack</h4>
        </div>
      </div>
      <TechnologyList isLightMode={isLightMode} secondaryTextColor={secondaryTextColor} linkTextColor={linkTextColor} />
      <p className={`text-xs sm:text-sm font-normal ${secondaryTextColor} mt-[2em] sm:mt-[3em]`}>
        ©️ 2026 Hammadh Arquil. All Rights Reserved.
      </p>
      <div className="mt-[1.5em] sm:mt-[2em]"></div>
    </div>
  );
};

const techStackGroups = {
  'Languages': ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C#', 'Dart', 'SQL'],
  'Frontend': ['React', 'Next.js', 'Angular', 'Flutter', 'jQuery', 'BackboneJS', 'TailwindCSS', 'CSS3', 'HTML5', 'SASS',  'Vite'],
  'Backend': ['ExpressJS', 'Springboot', 'ASP.NET Core', 'Flask', '.NET', 'FastAPI'],
  'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase'],
  'Cloud & DevOps': ['Azure', 'Docker','Jenkins', 'GitHub Actions', 'CI/CD', 'Vercel', 'Heroku', 'Netlify','Git', 'GitHub', 'GitLab', 'Bitbucket'],
  'Design': ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Adobe Lightroom', 'Cinema4D', 'After Effects'],
  'Tools & Services': ['Postman', 'Jira', 'Confluence', 'Notion', 'Linear', 'Slack', 'VS Code', 'IntelliJ', 'Chrome DevTools'],
};

const TechnologyList = ({ isLightMode, secondaryTextColor, linkTextColor }: { isLightMode: boolean; secondaryTextColor: string; linkTextColor: string }) => {
  const borderColor = isLightMode ? 'border-[#d0d0d0]' : 'border-[#2a2a2a]';
  return (
    <div className="pt-4 space-y-3">
      {Object.entries(techStackGroups).map(([category, technologies]) => (
        <div key={category}>
          <h5 className={`${secondaryTextColor} text-xs sm:text-sm font-medium mb-2 uppercase tracking-wider`}>
            {category}
          </h5>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`px-2.5 py-1 rounded-full border ${borderColor} ${linkTextColor} font-normal text-xs sm:text-sm hover:border-[#bede64] hover:text-[#bede64] transition-colors`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const GitHubHeatmap = ({ isLightMode }: { isLightMode: boolean }) => {
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
    <div className={`github-heatmap-container ${isLightMode ? 'light-mode' : ''}`}>
      <GitHubCalendar 
        username="hammvdh" 
        theme={isLightMode ? lightBlackWhiteTheme : blackWhiteTheme} 
        colorScheme={isLightMode ? "light" : "dark"}
        tooltips={{
          activity: {
            text: (activity) => {
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
      />
    </div>
  );
};

export default Home;

