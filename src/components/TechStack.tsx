import { Laptop } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { isLightMode as isLightModeStore } from '../stores/themeStore';
import { useState, useEffect } from 'react';

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
                className={`px-2.5 py-1 rounded-full border ${borderColor} ${linkTextColor} font-normal text-xs sm:text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors`}
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

const TechStack = () => {
    const isLightMode = useStore(isLightModeStore);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    
    const textColor = isLightMode ? 'text-[#1a1a1a]' : 'text-white';
    const secondaryTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#656565]';
    const linkTextColor = isLightMode ? 'text-[#4a4a4a]' : 'text-[#A4A4A4]';
    const headerColor = 'text-[var(--accent)]';
    
    if (!mounted) return null;

    return (
        <div>
            <div className="mt-[2em] sm:mt-[3em] fade-up" data-delay="6">
                <div className={`flex flex-row gap-2 ${textColor} items-center`}>
                    <Laptop className={headerColor} size={20} />
                    <h4 className={`${headerColor} font-medium text-lg sm:text-xl`}>Tech Stack</h4>
                </div>
            </div>
            <TechnologyList isLightMode={isLightMode} secondaryTextColor={secondaryTextColor} linkTextColor={linkTextColor} />
        </div>
    );
};

export default TechStack;
