import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
// import PinterestLayout from "./PinterestLayout.jsx";
import { Link } from "react-router-dom";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import card1 from "./images/card1.png";
import { FaHashnode } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter';
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import RVA from "./images/RVA.png";
import Card from "./Card";
import card4 from "./images/card4.png";
import ExperienceCard from "./ExperienceCard.jsx";
import { SiGmail } from "react-icons/si";
import GitHubCalendar from "react-github-calendar";
import vit from "./images/VIT-WHITE.png";
import chaitanya from "./images/chaitanya.png";
import ImageRotate from "./ImageRotate.jsx";
import MilestoneLogo from "./images/Milestone.svg"
import clickSound from './assets/click.mp3';

const App = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [initialHeight, setInitialHeight] = useState(window.innerHeight);
  // useEffect(() => {
  //   const styleContributions = () => {
  //     const rects = document.querySelectorAll(".github-graph rect");
  //     rects.forEach((rect) => {
  //       const fill = rect.getAttribute("fill");
  //       if (fill == "#39d353") rect.setAttribute("fill", "#3e5be7");
  //       if (fill == "#26a641") rect.setAttribute("fill", "#2641a6");
  //       if (fill == "#006d32") rect.setAttribute("fill", "#00326d");
  //       if (fill == "#0e4429") rect.setAttribute("fill", "#0e2944");
  //       if (fill == "#161b22") rect.setAttribute("fill", "#161b22");
  //     });
  //   };
  //   //

  //   styleContributions();
  // }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;

  //     if (currentScrollTop <= initialHeight) {
  //       // Initial page: Always show the nav bar
  //       setShowNav(true);
  //     } else {
  //       // After initial page: Show/hide nav based on scroll direction
  //       if (currentScrollTop > lastScrollTop) {
  //         setShowNav(false);
  //       } else {
  //         setShowNav(true);
  //       }
  //       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollTop, initialHeight]);


  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color-2)",
        }}
      /> */}
      <div className="main-container" onClick={playClickSound}>
        <nav className={`nav ${showNav ? "visible" : "hidden"}`}>
          <ul>
            <div className="main-nav">
              <div className="left-nav">
                <li className="home-link">
                  <a href="#about" className="home-link">
                    <p className="link-orange">
                      <FaHeart />
                    </p>
                    <p>bhavitha</p>
                  </a>
                </li>
              </div>
              <div className="right-nav">
                <li className="right-nav-li">
                  <a href="#Projects">projects</a>
                </li>
                <li className="right-nav-li">
                  <a href="#skills">skills</a>
                </li>
                <li className="right-nav-li">
                  <a href="#experience">experience</a>
                </li>
                {/* <li className="cv">
                  <a href="">
                    
                  </a>
                </li> */}
              </div>
            </div>
          </ul>
        </nav>
        <main>
          <div>
            <div className="about" id="about">
              <div className="left-about">
                <div className="flex justify-center items-end space-x-2">
                  <h1 className="hello-text">
                    Hello, I'm{" "}
                    <strong className="link-orange title-bha">
                      <Typewriter
                        words={['Bhavitha', 'భవిత', 'भविता',]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                      />
                    </strong>{" "}
                    👋
                  </h1>
                </div>
                <p className="text-xxl-lg justify-center items-end text-gray-400 mt-4 space-x-2 py-8">
                  I'm a Computer Science student and I like building things, <br />
                  learning tech stacks, and hanging around online communities. <br />
                  Welcome to my little 🤏 corner on the internet.
                </p>
                <div className="social-links">
                  <a href="https://github.com/nightcoder26">
                    <FaGithub className="FaGithub" />
                  </a>
                  <a href="https://www.linkedin.com/in/bhavitha-m-942799304/">
                    <FaLinkedinIn className="FaLinkedIn" />
                  </a>
                  <a href="mailto:bhavitha961@gmail.com">
                    <SiGmail className="SiGmail" />
                  </a>
                  <a href="https://bhavitha.hashnode.dev/">
                    <FaHashnode className="FaHashnode" />
                  </a>
                  <a>
                    <FaDiscord className="FaDiscord" />
                  </a>
                </div>
              </div>
              <div className="right-about">
                <ImageRotate />
              </div>
            </div>

            <div className="projects" id="Projects">
              <h2 className="project-head head-titles">Projects</h2>
              <div className="project-cards">
                <Card
                  image={card1}
                  heading="Fin-Z"
                  description="A user-friendly finance tracker application.  It includes an overview dashboard, analysis, transaction logs. Users can easily add new entries, create accounts, and manage their financial data."
                  technologies={[
                    "React.js",
                    "CSS",
                    "Node.js",
                    "MongoDB",
                    "Express",
                  ]}
                  link1={"https://github.com/nightcoder26/Fin-Z"}
                  link2={""}
                />
                <Card
                  image={card3}
                  heading="Medicine Dispenser"
                  description="A Medicine dispenser coupled with a mobile app through which users scan their prescription QR code, make a payment, to receive their medicines."
                  technologies={[
                    "Arduino UNO",
                    "MIT App Inventor",
                    "Firebase",
                    "Node.js",
                  ]}
                  link1={"https://github.com/nightcoder26/MEDICINE_DISPENSER"}
                  link2={"https://medicine-dispenser.vercel.app/"}
                />
                <Card
                  image={card2}
                  heading="Drive 2 Destiny"
                  description="A job portal for job seekers and employers. Job seekers can search for jobs. Employers can post jobs."
                  technologies={[
                    "UML",
                    "React.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                  ]}
                  link1={"https://github.com/nightcoder26/Drive2Destiny"}
                  link2={"https://nightcoder26.github.io/Drive2Destiny/"}
                />
                <Card
                  image={card4}
                  heading="Better Care"
                  description="A mental health application with features like mood trackers and tag based journalling "
                  technologies={[
                    "React.js",
                    "Tailwind CSS",
                    "Node.js",
                    "Express",
                    "MongoDB",
                  ]}
                  link1={"https://github.com/nightcoder26/better_care"}
                  link2={"https://better-care-tau.vercel.app/"}
                />
              </div>
              <div className="button-container">
                <a
                  className="button"
                  href="https://github.com/nightcoder26?tab=repositories"
                >
                  View more
                </a>
              </div>
            </div>

            <div className="skills" id="skills">
              <h2 className="skills-head head-titles">Skills</h2>
              <div className="skills-container">
                <div className="skills-category">
                  <h3>Languages</h3>
                  <ul className="skills-list">
                    <li className="skill-tag">C</li>
                    <li className="skill-tag">C++</li>
                    <li className="skill-tag">HTML/CSS</li>
                    <li className="skill-tag">JavaScript</li>

                    <li className="skill-tag">SQL</li>
                    <li className="skill-tag">Java</li>
                  </ul>
                </div>
                <div className="skills-category">
                  <h3>Technologies/Frameworks</h3>
                  <ul className="skills-list">
                    <li className="skill-tag">React.js</li>
                    <li className="skill-tag">Node.js</li>
                    <li className="skill-tag">Redux</li>
                    <li className="skill-tag">Tailwind CSS</li>
                    <li className="skill-tag">Sass</li>
                    <li className="skill-tag">Qt6</li>
                    <li className="skill-tag">MongoDB</li>
                  </ul>
                </div>
                <div className="skills-category">
                  <h3>Developer Tools</h3>
                  <ul className="skills-list">
                    <li className="skill-tag">Git & Github</li>
                    <li className="skill-tag">Postman</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="exp-edu" id="experience">
              <div className="education">
                <h2 className=" exp-titles">Experience</h2>
                <div>
                  <div >
                    <ExperienceCard
                      company={"RVA"}
                      role={"Web Developer (freelance)"}
                      startDate={"AUG, 2024"}
                      endDate={"OCT, 2024"}
                      // description={"Worked as a Web Developer for a freelance client. Collaborated with a client to enhance a React-based CRM & internal tools by resolving UI bugs and improving usability Refactored a single-component front-end into 20+ modular, reusable React components to improve maintainability Implemented validation logic across 5 user flows to ensure complete user inputs across multiple user interfaces"}
                      description={"Refactored single component front-end and enhanced a React-based CRM & internal tools by resolving UI bugs and improving validation logic"}
                      logo={RVA}
                    />
                    <ExperienceCard
                      company="Milestone Club - VIT-AP"
                      role="Club Manager"
                      startDate="FEB, 2023"
                      endDate="SEP, 2024"
                      description="As Manager, I led multiple teams to develop projects, conducted weekly code reviews, interviews for recruitment and teaching sessions"
                      logo={MilestoneLogo}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="exp-titles ">Education</h2>
                <div>
                  <div >
                    <ExperienceCard
                      company={"Vellore Institute of Technology - AP"}
                      role={"B.Tech, Computer Science Engineering with Business Systems"}
                      startDate={"OCT, 2022"}
                      endDate={"PRESENT"}
                      // description={"Worked as a Web Developer for a freelance client. Collaborated with a client to enhance a React-based CRM & internal tools by resolving UI bugs and improving usability Refactored a single-component front-end into 20+ modular, reusable React components to improve maintainability Implemented validation logic across 5 user flows to ensure complete user inputs across multiple user interfaces"}
                      description={`CGPA: 9.04/10\n Coursework: DSA, DBMS, OS, CN, Financial Management, Operations Research, Business Strategy`}
                      logo={vit}
                    />
                    <ExperienceCard
                      company="Sri Chaitanya Junior College"
                      role="Intermediate, MPC"
                      startDate="MAY, 2020"
                      endDate="MARCH, 2022"
                      description={`Grade: 97.5%\nSubjects: Mathematics, Physics, Chemistry`}
                      logo={chaitanya}
                    />
                  </div>
                </div>
              </div>

            </div>
            <div className="timeline"></div>
            <div className="github-graph">
              <h1 className="mb-8 pt-8 text-center head-titles">Recent Activity</h1>
              {/* <GitHubCalendar
                username="nightcoder26"
                colorScheme="dark"
              ></GitHubCalendar> */}
              <figure><embed src="https://wakatime.com/share/@f330c801-7c98-4b37-8a28-0dacdec90131/37d30673-b5ba-4fcf-afc3-d64e1029d59e.svg"></embed></figure>
            </div>
            <footer>
              {/* <div className="some-stuff">
                <h1 className=" text-center ">Some Stuff</h1>
              </div>

              <div className="pins">
                <PinterestLayout />
              </div> */}
              <div className="footer-div">
                <p>🫐🦢🪻🐚</p>
                <p>
                  Made with{" "}
                  <span role="img" aria-label="love">
                    💙
                  </span>{" "}
                  by Bhavitha
                </p>
                <p>🍇🎧🧿🐚</p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
