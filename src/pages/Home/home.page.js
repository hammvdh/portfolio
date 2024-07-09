import './home.css';
import AnimatedCursor from 'react-animated-cursor';
import { ArrowUpRight, Laptop, Briefcase, Layers3 } from 'lucide-react';

const Home = () => {
  return (
    <div className="container">
      <AnimatedCursor
        color="190,222,100"
        trailingSpeed={20}
        innerSize={8}
        outerSize={20}
        innerScale={1.2}
        outerScale={3}
        outerAlpha={1}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <div className="flex flex-row justify-between fadeUpProfile mt-[5em]">
        <div className="flex flex-row	text-white font-semibold items-center">
          <div className="avatar h-[80px] w-[80px] rounded-full bg-white mr-3"></div>
          <div>
            <h3 className="text-xl font-semibold">Hammadh Arquil</h3>
            <p className="text-lg font-normal text-[#656565]">
              Software Engineer & Product Designer
            </p>
          </div>
        </div>
        <div className="flex text-white font-medium items-center">
          <span class="blink_me mr-2"></span>
          <p>AVAILABLE FOR WORK</p>
        </div>
      </div>
      <div className="mt-[2em] fadeUpDesc">
        <p className="text-pretty font-md leading-[2rem] text-[#8a8a91]">
          Hey there, I’m Hammadh. A Software Engineer and Product Designer based
          in Colombo, Sri Lanka. Currently working at HTWorks building
          telemedicine and healthcare solutions.
        </p>
        <p className="text-pretty font-md mt-4 leading-[2rem] text-[#8a8a91]">
          In my spare time I am building eFlow, an system that streamlines
          request approvals within teams through form automation workflows. Also
          working on Prayr, a Islamic companion application with prayer times,
          salah tracking, duas, hadith and a discussion forum. Always
          consistently learning and working on improving myself daily.
        </p>
      </div>
      <div className="mt-[2em] fadeUpDesc">
        <h4 className="text-white font-semibold text-base">Let's connect</h4>
        <div className="text-[#8a8a91] gap-4 flex flex-row mt-3">
          <a
            className=" text-base underline hover:text-[#bede64]"
            href="mailto:hammadharquil@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            className=" text-base underline hover:text-[#bede64]"
            href="https://www.linkedin.com/in/hammadharquil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-base underline hover:text-[#bede64]"
            href="https://twitter.com/elitepsd"
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter
          </a>
          <a
            className=" text-base underline hover:text-[#bede64]"
            href="https://www.instagram.com/hammvdh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className=" text-base underline hover:text-[#bede64]"
            href="https://github.com/hammvdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className=" text-base underline hover:text-[#bede64]"
            href="https://www.behance.net/hammadh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          <a
            className="text-base underline hover:text-[#bede64]"
            href="https://drive.google.com/file/d/18JrHT5_aCjXMZXx1zyCXIkCBsrZ96xdu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="mt-[3em] fadeUpRest">
        <div className="flex flex-row justify-between	text-white font-semibold items-center">
          <div className="flex flex-row	text-white gap-2 hover:text-[#bede64] items-center">
            <Layers3 className="text-[#bede64]" />
            <h4 className="text-white font-semibold text-xl">
              Featured Work
            </h4>{' '}
          </div>
          <div className="flex flex-row	text-[#A4A4A4] gap-1 hover:text-[#bede64] items-center">
            <a
              className=" font-normal text-base link text-[#A4A4A4]"
              href="https://www.behance.net/hammadh"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
            <ArrowUpRight />
          </div>
        </div>

        <div class="grid grid-flow-col gap-3 mt-[15px]">
          <div className="col-span-2 rounded-lg overflow-hidden link">
            <div className="proj bg-[#373737] h-[200px] proj1"></div>
          </div>
          <div className="col-span-2 rounded-lg overflow-hidden link">
            <div className="proj bg-[#373737] h-[200px]  proj2"></div>
          </div>
        </div>
        {/* <div className="grid grid-flow-col gap-3 mt-[15px]">
          <div className="bg-[#373737] col-span-2 h-[200px] rounded-lg"></div>
          <div className="bg-[#373737] col-span-2 h-[200px] rounded-lg"></div>
          <div className="bg-[#373737] col-span-2 h-[200px] rounded-lg"></div>
        </div> */}
        <div className="grid grid-flow-col gap-3 mt-[15px] ">
          <div className="col-span-2 rounded-lg overflow-hidden link">
            <div className="proj bg-[#373737] h-[200px] proj3"></div>
          </div>
          <div className="col-span-2 rounded-lg overflow-hidden link">
            <div className="proj bg-[#373737] h-[200px] proj4"></div>
          </div>
        </div>
      </div>
      <div className="mt-[3em] fadeUpRest">
        <div className="flex flex-row justify-between	text-white items-center">
          <div className="flex flex-row	text-white gap-2 hover:text-[#bede64] items-center">
            <Briefcase className="text-[#bede64]" />
            <h4 className="text-white font-medium text-xl">Experience</h4>
          </div>

          <div className="flex flex-row text-[#A4A4A4] hover:text-[#bede64]">
            <a
              className="text-[#A4A4A4] font-normal text-base link"
              href="https://drive.google.com/file/d/18JrHT5_aCjXMZXx1zyCXIkCBsrZ96xdu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <ArrowUpRight />
          </div>
        </div>
        <div class="grid grid-flow-col gap-3 mt-[15px]">
          <div class=" col-span-2  rounded-lg">
            <div>
              <p className="text-[#96969A] ">2023 - Present</p>
              <div className="flex">
                <p className="mr-2 text-white">Junior Software Engineer</p>
                <p className="text-[#96969A] hover:text-[#bede64] link">
                  @ HTWorks
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2 rounded-lg">
            <div>
              <p className="text-[#96969A] ">2016 - Present</p>
              <div className="flex">
                <p className="mr-2 text-white">Visual/Product Designer</p>
                <p className="text-[#96969A] hover:text-[#bede64] link">
                  @ ElitePSD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-flow-col gap-3 mt-[20px]">
          <div class=" col-span-2 rounded-lg">
            <div>
              <p className="text-[#96969A] ">2021 - 2022</p>
              <div className="flex">
                <p className="mr-2 text-white">Software Engineer Intern</p>
                <p className="text-[#96969A] hover:text-[#bede64] link">
                  @ HTWorks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[3em] fadeUpRest">
        <div className="flex flex-row gap-2	text-white items-center">
          <Laptop className="text-[#bede64]" />
          <h4 className="text-white font-medium text-xl">Tech Stack</h4>

          {/* <p className="text-[#A4A4A4] font-normal text-base">Download CV</p> */}
        </div>
      </div>
      <TechnologyList />
      <p className="text-sm font-normal text-[#656565] mt-[3em]">
        ©️ 2024 Hammadh Arquil. All Rights Reserved.
      </p>
      <div className="mt-[2em]"></div>
    </div>
  );
};

const technologies = [
  'JavaScript',
  'Jira',
  'Figma',
  '.NET',
  'Flutter',
  'Angular',
  'PostgreSQL',
  'Springboot',
  'jQuery',
  'Notion',
  'MongoDB',
  'Bitbucket',
  'BackboneJS',
  'MySQL',
  'TailwindCSS',
  'Heroku',
  'ExpressJS',
  'Linear',
  'Postman',
  'Vercel',
  'Adobe Lightroom',
  'Cinema4D',
  'After Effects',
  'Git',
  'Python',
  'Adobe XD',
  'Illustrator',
  'Photoshop',
  'TypeScript',
  'PHP',
  'Firebase',
  'React',
  'Supabase',
];

const TechnologyList = () => {
  return (
    <div className="flex flex-wrap gap-4 text-[#A4A4A4] font-normal pt-4">
      {technologies.map((tech, index) => (
        <div key={index} className="hover:text-[#bede64]">
          {tech}
        </div>
      ))}
    </div>
  );
};

export default Home;
