import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./images/logo.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import card1 from "./images/card1.png";
import { FaHashnode } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import githubIcon from "./images/github.svg";
import { FaInternetExplorer } from "react-icons/fa";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import Card from "./Card";
import card4 from "./images/card4.png";
import { SiGmail } from "react-icons/si";

const App = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [initialHeight, setInitialHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop <= initialHeight) {
        // Initial page: Always show the nav bar
        setShowNav(true);
      } else {
        // After initial page: Show/hide nav based on scroll direction
        if (currentScrollTop > lastScrollTop) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, initialHeight]);

  return (
    <div className="main-container">
      <nav className={`nav ${showNav ? "visible" : "hidden"}`}>
        <ul>
          <div className="main-nav">
            <div className="left-nav">
              <li className="home-link">
                <a href="#about" className="home-link">
                  <p className="link-orange">/</p>
                  <p>Bhavitha</p>
                </a>
              </li>
            </div>
            <div className="right-nav">
              <li className="right-nav-li">
                <a href="#Projects">Projects</a>
              </li>
              <li className="right-nav-li">
                <a href="#skills">Skills</a>
              </li>
              <li className="cv">
                <a href="">
                  <MdOutlineFileDownload />
                </a>
              </li>
            </div>
          </div>
        </ul>
      </nav>
      <main>
        <div>
          <div className="about" id="about">
            <div className="left-about">
              <div className="flex justify-center items-end space-x-2">
                <h1>
                  Hello I'm <strong className="link-orange">Bhavitha 👋</strong>
                </h1>
              </div>
              <p className="text-lg justify-center items-end text-gray-400 mt-4 space-x-2">
                A Computer Science student with a passion for building web
                applications.
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
              <img src={logo} alt="logo" className="profile" />
            </div>
          </div>
          <div className="projects" id="Projects">
            <h2 className="project-head">Projects</h2>
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
                link1={""}
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
            <h2 className="skills-head">Skills</h2>
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
        </div>
      </main>
    </div>
  );
};

export default App;
