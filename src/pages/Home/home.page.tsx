import './home.css';
import { ArrowUpRight, Laptop, Briefcase, Layers3 } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentTime, setCurrentTime] = useState('');

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
  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row sm:justify-between fade-up mt-[3em] sm:mt-[5em]" data-delay="0">
        <div className="flex flex-row text-white font-semibold items-center mb-4 sm:mb-0">
          <div className="avatar h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] rounded-full bg-white mr-3"></div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Hammadh Arquil</h3>
            <p className="text-base sm:text-lg font-normal text-[#656565]">
              Software Engineer & Product Designer
            </p>
          </div>
        </div>
        <div className="flex text-white font-medium items-center text-xs sm:text-sm">
          <span className="availability-indicator mr-2"></span>
          <p className="whitespace-nowrap">AVAILABLE FOR WORK</p>
        </div>
      </div>
      <div className="mt-[1.5em] sm:mt-[2em] fade-up" data-delay="1">
        <p className="text-pretty text-sm sm:text-base leading-[1.75rem] sm:leading-[2rem] text-[#8a8a91]">
          Hey, I'm Hammadh. I'm a software engineer and product designer based in Colombo, Sri Lanka. It's currently {currentTime || 'loading...'} over here.
        </p>
        <p className="text-pretty text-sm sm:text-base mt-4 leading-[1.75rem] sm:leading-[2rem] text-[#8a8a91]">
          I started as a graphic designer with the alias ElitePSD in 2016 and since then I've been building digital experiences for various clients having now transitioned into engineering at HTWorks 
          where I've been building telemedicine and healthcare solutions since 2021. I've grown from 
          intern to software engineer, working on products that impact patient care.
        </p>
        <p className="text-pretty text-sm sm:text-base mt-4 leading-[1.75rem] sm:leading-[2rem] text-[#8a8a91]">
          In 2025, I became a founding engineer at Suno Analytics, building AI-native ERP and agentic 
          solutions. That same year, I founded Prayr—an Islamic companion platform for prayer times, 
          spiritual tracking, and community engagement.
        </p>
      </div>
      <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="2">
        <div className="flex flex-col sm:flex-row sm:justify-between text-white font-semibold items-start sm:items-center mb-4 sm:mb-0">
          <div className="flex flex-row text-white gap-2 hover:text-[#bede64] items-center mb-2 sm:mb-0">
            <Layers3 className="text-[#bede64]" size={20} />
            <h4 className="text-[#bede64] font-semibold text-lg sm:text-xl">
              Featured Work
            </h4>
          </div>
          <div className="flex flex-row text-[#A4A4A4] gap-1 hover:text-[#bede64] items-center">
            <a
              className="font-normal text-sm sm:text-base link text-[#A4A4A4]"
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
            <div className="proj bg-[#373737] h-[180px] sm:h-[200px] proj1"></div>
            <div className="mt-3">
              <h5 className="text-white font-semibold text-sm sm:text-base mb-1">Vital: Remote Patient Monitoring</h5>
              <p className="text-[#8a8a91] text-xs sm:text-sm">Realtime patient monitoring system for care providers with triage and health status alerts.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden link">
            <div className="proj bg-[#373737] h-[180px] sm:h-[200px] proj2"></div>
            <div className="mt-3">
                <h5 className="text-white font-semibold text-sm sm:text-base mb-1">Frostify Portfolio</h5>
                <p className="text-[#8a8a91] text-xs sm:text-sm">A portfolio site design built during a community challenge.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden link">
            <div className="proj bg-[#373737] h-[180px] sm:h-[200px] proj3"></div>
            <div className="mt-3">
            <h5 className="text-white font-semibold text-sm sm:text-base mb-1">Prayr</h5>
            <p className="text-[#8a8a91] text-xs sm:text-sm">An Islamic companion application with prayer times, tracking, podcasts, quran, duas, hadith.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden link">
            <div className="proj bg-[#373737] h-[180px] sm:h-[200px] proj4"></div>
            <div className="mt-3">
              <h5 className="text-white font-semibold text-sm sm:text-base mb-1">Medoment</h5>
              <p className="text-[#8a8a91] text-xs sm:text-sm">Designed a website for HTWorks, before I ended up joining the team as a software engineer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="3">
        <div className="flex flex-col sm:flex-row sm:justify-between text-white items-start sm:items-center mb-4 sm:mb-0">
          <div className="flex flex-row text-white gap-2 hover:text-[#bede64] items-center mb-2 sm:mb-0">
            <Briefcase className="text-[#bede64]" size={20} />
            <h4 className="text-[#bede64] font-medium text-lg sm:text-xl">Experience</h4>
          </div>

          <div className="flex flex-row text-[#A4A4A4] hover:text-[#bede64] items-center">
            <a
              className="text-[#A4A4A4] font-normal text-sm sm:text-base link"
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
              <p className="text-[#96969A] text-sm sm:text-base">2025 - Present</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className="mr-2 text-white text-sm sm:text-base">Founding Engineer</p>
                <p className="text-[#96969A] hover:text-[#bede64] link text-sm sm:text-base">
                <a href="https://sunoanalytics.com" target="_blank" rel="noopener noreferrer"> @ Suno Analytics</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div>
              <p className="text-[#96969A] text-sm sm:text-base">2024 - Present</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className="mr-2 text-white text-sm sm:text-base">Software Engineer</p>
                <p className="text-[#96969A] hover:text-[#bede64] link text-sm sm:text-base">
                <a href="https://htworkslk.com" target="_blank" rel="noopener noreferrer"> @ HTWorks</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div>
              <p className="text-[#96969A] text-sm sm:text-base">2025 - Present</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className="mr-2 text-white text-sm sm:text-base">Founder & CEO</p>
                <p className="text-[#96969A] hover:text-[#bede64] link text-sm sm:text-base">
                <a href="https://prayr-app.com" target="_blank" rel="noopener noreferrer"> @ Prayr</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div>
              <p className="text-[#96969A] text-sm sm:text-base">2023 - 2024</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className="mr-2 text-white text-sm sm:text-base">Junior Software Engineer</p>
                <p className="text-[#96969A] hover:text-[#bede64] link text-sm sm:text-base">
                <a href="https://htworkslk.com" target="_blank" rel="noopener noreferrer"> @ HTWorks</a>
                </p>
              </div>
            </div>
          </div>
         
          <div className="rounded-lg">
            <div>
              <p className="text-[#96969A] text-sm sm:text-base">2016 - Present</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className="mr-2 text-white text-sm sm:text-base">Visual/Product Designer</p>
                <p className="text-[#96969A] hover:text-[#bede64] link text-sm sm:text-base">
                <a href="https://x.com/hammvdh" target="_blank" rel="noopener noreferrer"> @ ElitePSD</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div>
              <p className="text-[#96969A] text-sm sm:text-base">2021 - 2022</p>
              <div className="flex flex-wrap items-baseline mt-1">
                <p className="mr-2 text-white text-sm sm:text-base">Software Engineer Intern</p>
                <p className="text-[#96969A] hover:text-[#bede64] link text-sm sm:text-base">
                <a href="https://htworkslk.com" target="_blank" rel="noopener noreferrer"> @ HTWorks</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="4">
        <div className="flex flex-row gap-2 text-white items-center">
          <Laptop className="text-[#bede64]" size={20} />
          <h4 className="text-[#bede64] font-medium text-lg sm:text-xl">Tech Stack</h4>
        </div>
      </div>
      <TechnologyList />
      <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="6">
        <h4 className="text-[#bede64] font-semibold text-xl sm:text-2xl">Let's connect</h4>
        <div className="text-[#8a8a91] gap-3 sm:gap-4 flex flex-wrap mt-3">
          <a
            className="text-sm sm:text-base underline hover:text-[#bede64]"
            href="mailto:hammadharquil@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            className="text-sm sm:text-base underline hover:text-[#bede64]"
            href="https://www.linkedin.com/in/hammadharquil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-sm sm:text-base underline hover:text-[#bede64]"
            href="https://twitter.com/elitepsd"
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter
          </a>
          <a
            className="text-sm sm:text-base underline hover:text-[#bede64]"
            href="https://www.instagram.com/hammvdh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="text-sm sm:text-base underline hover:text-[#bede64]"
            href="https://github.com/hammvdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-sm sm:text-base underline hover:text-[#bede64]"
            href="https://www.behance.net/hammadh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          <a
            className="text-sm sm:text-base underline hover:text-[#bede64]"
            href="https://drive.google.com/file/d/1ZSCS8i97f35PkGOfqCOUPxefGt2DMpyk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <p className="text-xs sm:text-sm font-normal text-[#656565] mt-[2em] sm:mt-[3em]">
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

const TechnologyList = () => {
  return (
    <div className="pt-4 space-y-3">
      {Object.entries(techStackGroups).map(([category, technologies]) => (
        <div key={category}>
          <h5 className="text-[#656565] text-xs sm:text-sm font-medium mb-2 uppercase tracking-wider">
            {category}
          </h5>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-2.5 py-1 rounded-full border border-[#2a2a2a] text-[#A4A4A4] font-normal text-xs sm:text-sm hover:border-[#bede64] hover:text-[#bede64] transition-colors"
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

export default Home;

