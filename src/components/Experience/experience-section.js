import './experience.css';

const Experience = () => {
  return (
    <div className="experience h-[400px]">
      <div className="flex justify-around mt-10  items-center">
        <h2 className="font-semibold text-3xl">Work Experience</h2>
        <div className="flex items-center">
          <div className="font-medium text-[14px] mr-10">
            <a
              href="https://www.linkedin.com/in/hammadharquil/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <p className="pr-1">Download CV</p>
              <DownloadIcon />
            </a>
          </div>

          <div className="font-medium text-[14px] items-center flex">
            <a
              href="https://www.linkedin.com/in/hammadharquil/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <p className="pr-1">Get in touch</p>
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="w-100 ml-[15%] mr-[15%] mt-5 mb-10 border-[1px] border-[#B7B7B7]"></div>
      <div className="justify-around flex">
        <div>
          <p className="text-[#96969A] ">2023 - Present</p>
          <div className="flex">
            <p className="mr-2 ">Junior Software Engineer</p>
            <p className="text-[#96969A]">@ HTWorks</p>
          </div>
        </div>
        <div>
          <p className="text-[#96969A] ">2016 - Present</p>
          <div className="flex">
            <p className="mr-2 ">Freelance Designer</p>
            <p className="text-[#96969A]">@ ElitePSD</p>
          </div>
        </div>
        <div>
          <p className="text-[#96969A] ">2021 - 2022</p>
          <div className="flex">
            <p className="mr-2 ">Software Engineer Intern</p>
            <p className="text-[#96969A]">@ HTWorks</p>
          </div>
        </div>
      </div>
      <div className="justify-around flex mt-10">
        <div>
          <p className="text-[#96969A] ">2023 - Present</p>
          <div className="flex">
            <p className="mr-2 ">Software Engineer</p>
            <p className="text-[#96969A]">@ Navaqa</p>
          </div>
        </div>
        <div>
          <p className="text-[#96969A] ">2016 - Present</p>
          <div className="flex">
            <p className="mr-2 ">Freelance Designer</p>
            <p className="text-[#96969A]">@ ElitePSD</p>
          </div>
        </div>
      </div>
      {/* <div className="w-100 ml-[15%] mr-[15%] mt-5 mb-10 border-[1px] border-[#B7B7B7]"></div> */}
      <div className="flex justify-around mt-10  items-center">
        <h2 className="font-semibold text-3xl">Skills & Technologies</h2>
        <div></div>
      </div>

      <div class="mt-5 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img
              className="h-[70px]"
              alt="After Effects CC"
              src={process.env.PUBLIC_URL + '/images/tech-icons/ae.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Illustrator CC"
              src={process.env.PUBLIC_URL + '/images/tech-icons/angular.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="CSS"
              src={process.env.PUBLIC_URL + '/images/tech-icons/css.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Cinema4D"
              src={process.env.PUBLIC_URL + '/images/tech-icons/c4d.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Dart Language"
              src={process.env.PUBLIC_URL + '/images/tech-icons/dart.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Figma"
              src={process.env.PUBLIC_URL + '/images/tech-icons/figma.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Flutter"
              src={process.env.PUBLIC_URL + '/images/tech-icons/flutter.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Github"
              src={process.env.PUBLIC_URL + '/images/tech-icons/github.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="HTML"
              src={process.env.PUBLIC_URL + '/images/tech-icons/html.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Java"
              src={process.env.PUBLIC_URL + '/images/tech-icons/java.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Javascript"
              src={process.env.PUBLIC_URL + '/images/tech-icons/javascript.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="JQuery"
              src={process.env.PUBLIC_URL + '/images/tech-icons/jquery.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Adobe Lightroom CC"
              src={process.env.PUBLIC_URL + '/images/tech-icons/lr.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="MongoDB"
              src={process.env.PUBLIC_URL + '/images/tech-icons/mongo.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="MYSQL"
              src={process.env.PUBLIC_URL + '/images/tech-icons/mysql.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="NoSQL"
              src={process.env.PUBLIC_URL + '/images/tech-icons/nosql.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Photoshop"
              src={process.env.PUBLIC_URL + '/images/tech-icons/ps.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Python"
              src={process.env.PUBLIC_URL + '/images/tech-icons/python.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="R Language"
              src={process.env.PUBLIC_URL + '/images/tech-icons/r.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="React"
              src={process.env.PUBLIC_URL + '/images/tech-icons/react.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Springboot"
              src={process.env.PUBLIC_URL + '/images/tech-icons/springboot.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="SQL"
              src={process.env.PUBLIC_URL + '/images/tech-icons/sql.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Typescript"
              src={process.env.PUBLIC_URL + '/images/tech-icons/typescript.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Adobe XD"
              src={process.env.PUBLIC_URL + '/images/tech-icons/xd.png'}
            />
          </li>
        </ul>
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img
              className="h-[70px]"
              alt="After Effects CC"
              src={process.env.PUBLIC_URL + '/images/tech-icons/ae.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Illustrator CC"
              src={process.env.PUBLIC_URL + '/images/tech-icons/angular.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="CSS"
              src={process.env.PUBLIC_URL + '/images/tech-icons/css.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Cinema4D"
              src={process.env.PUBLIC_URL + '/images/tech-icons/c4d.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Dart Language"
              src={process.env.PUBLIC_URL + '/images/tech-icons/dart.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Figma"
              src={process.env.PUBLIC_URL + '/images/tech-icons/figma.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Flutter"
              src={process.env.PUBLIC_URL + '/images/tech-icons/flutter.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Github"
              src={process.env.PUBLIC_URL + '/images/tech-icons/github.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="HTML"
              src={process.env.PUBLIC_URL + '/images/tech-icons/html.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Java"
              src={process.env.PUBLIC_URL + '/images/tech-icons/java.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Javascript"
              src={process.env.PUBLIC_URL + '/images/tech-icons/javascript.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="JQuery"
              src={process.env.PUBLIC_URL + '/images/tech-icons/jquery.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Adobe Lightroom CC"
              src={process.env.PUBLIC_URL + '/images/tech-icons/lr.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="MongoDB"
              src={process.env.PUBLIC_URL + '/images/tech-icons/mongo.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="MYSQL"
              src={process.env.PUBLIC_URL + '/images/tech-icons/mysql.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="NoSQL"
              src={process.env.PUBLIC_URL + '/images/tech-icons/nosql.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Photoshop"
              src={process.env.PUBLIC_URL + '/images/tech-icons/ps.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Python"
              src={process.env.PUBLIC_URL + '/images/tech-icons/python.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="R Language"
              src={process.env.PUBLIC_URL + '/images/tech-icons/r.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="React"
              src={process.env.PUBLIC_URL + '/images/tech-icons/react.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Springboot"
              src={process.env.PUBLIC_URL + '/images/tech-icons/springboot.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="SQL"
              src={process.env.PUBLIC_URL + '/images/tech-icons/sql.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Typescript"
              src={process.env.PUBLIC_URL + '/images/tech-icons/typescript.png'}
            />
          </li>
          <li>
            <img
              className="h-[70px]"
              alt="Adobe XD"
              src={process.env.PUBLIC_URL + '/images/tech-icons/xd.png'}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;

export const DownloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
};

export const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
};
