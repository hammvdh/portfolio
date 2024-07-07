import './hero.css';

const Hero = () => {
  return (
    <div className="hero h-[37em]">
      <div className="p-[1em] flex justify-center">
        <div className="logo">
          <img
            className="h-[20px]"
            alt="Elite's Logo"
            src={process.env.PUBLIC_URL + '/images/elite-text.png'}
          />
        </div>
      </div>
      <div className="text-center mt-10 flex justify-around  ">
        <h4 className="text-white font-semibold ">HAMMADH ARQUIL</h4>
        {/* <h4 className="text-white font-normal  ">aka. ELITEPSD</h4> */}
        <h4 className="text-white font-semibold ">
          ENHANCING BRANDS SINCE 2016
        </h4>
      </div>
      <div className="text-center mt-10">
        <h1 className="font-medium text-7xl text-[#BEDE64]">
          Software Engineer & Visual Designer
        </h1>
        <h1 className="font-medium text-7xl mt-5 text-white">
          based in Sri Lanka.
        </h1>
      </div>
      <div className=" flex justify-around mt-10">
        <div className="text-white flex items-center font-semibold ">
          <p className="">8</p>
          <p className="mr-1 text-[#BEDE64]">+</p>
          <p className="">YEARS OF EXPERIENCE</p>
        </div>
        <div className="text-white flex items-center font-normal">
          <p className="mr-2">GRAPHIC DESIGN & UI/UX</p>
          <div className="w-[38px] mr-2 border-[1px] border-[#BEDE64]"></div>
          <p className="">SOFTWARE SOLUTIONS & PRODUCT DEVELOPMENT</p>
        </div>
      </div>
      <div className="w-100 ml-[15%] mr-[15%] mt-20 border-[1px] border-[#363636]"></div>
      <div className="justify-around flex mt-5">
        <div className="flex text-[#9C9C9C] items-center">
          <a
            data-replace="LinkedIn"
            href="https://www.linkedin.com/in/hammadharquil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
          </a>
          <div className="w-2 h-2 ml-4 mr-4 rounded bg-[#464646]"></div>
          <a
            data-replace="X / Twitter"
            href="https://twitter.com/elitepsd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>X / Twitter</span>
          </a>
          <div className="w-2 h-2 ml-4 mr-4 rounded bg-[#464646]"></div>
          <a
            data-replace="Instagram"
            href="https://www.instagram.com/hammvdh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Instagram</span>
          </a>
          <div className="w-2 h-2 ml-4 mr-4 rounded bg-[#464646]"></div>
          <a
            data-replace="GitHub"
            href="https://github.com/hammvdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
          </a>
          <div className="w-2 h-2 ml-4 mr-4 rounded bg-[#464646]"></div>
          <a
            data-replace="Behance"
            href="https://www.behance.net/hammadh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Behance</span>
          </a>
        </div>
        <div className="flex text-white font-semibold items-center">
          <span class="blink_me mr-2"></span>
          <p>AVAILABLE FOR WORK</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
