import { useEffect, useState } from "react";
import initials from "./assets/initialsUpdated.png";
import googleIcon from "./assets/google.png";
import linkedInIcon from "./assets/linkedIn.png";
import resume from "./assets/resume.pdf";
import githubIcon from "./assets/github.png";

import { experienceData } from "./data/experience";
import { projectsData } from "./data/projects";

import "./index.css";

function App() {
  const [page, setPage] = useState("main");

  const displayContent =
    page === "main" ? (
      <>
        <Header onSetPage={setPage} />
        <Main />
      </>
    ) : page === "experience" ? (
      <Experience />
    ) : page === "skills" ? (
      <Skills />
    ) : page === "projects" ? (
      <Projects />
    ) : null;

  return (
    <div className="app">
      <div className="background"></div>
      {displayContent}
    </div>
  );
}

export default App;

function Header({ onSetPage }) {
  return (
    <header>
      <img
        src={initials}
        alt="An uppercase letter B in gold color with dark background"
      />
      <nav>
        <ul>
          <li>
            <a onClick={() => onSetPage("experience")} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a onClick={() => onSetPage("skills")} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => onSetPage("projects")} href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <a className="resume" href={resume} download>
        Resume <span>&#8595;</span>
      </a>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h1>Jarrod Bogard</h1>
      <h2>Frontend Programmer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis,
        ipsa quas aperiam harum praesentium necessitatibus debitis soluta a odio
        reiciendis modi maiores error, excepturi, omnis itaque mollitia
        asperiores voluptatum. Rem enim molestias nulla id voluptas natus iusto
        aut laboriosam nam excepturi eos deleniti saepe amet laudantium maxime
        harum ratione commodi atque voluptates obcaecati, deserunt quos! Odio
      </p>
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/jarrod-bogard" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a href="mailto:jarrodbogard@gmail.com">
            <img src={googleIcon} alt="Google Icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/JarrodBogard" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </li>
      </ul>
    </main>
  );
}

function Skills() {
  return (
    <>
      <div className="skillsets">
        <a href=".." className="back-button">
          &#8592;
        </a>
        <h1>Skills</h1>
        <div className="skillset-left slide-right">
          <span>JavaScript</span>
          <span>React.js</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>BootStrap</span>
          <span>Redux Toolkit</span>
        </div>
        <div className="skillset-right slide-left">
          <span>RESTful APIs</span>
          <span>Node.js</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Fetch API</span>
          <span>Axios</span>
          <span>SQL</span>
        </div>
      </div>
    </>
  );
}

function Experience() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(experienceData);
  }, []);

  const experienceCard = data.map((el) => (
    <div className={`card ${el.bgColor}`} key={el.id}>
      <div className="card-content">
        <img src={el.img} alt="" />
        <h2 className="title">{el.company}</h2>
        <ul className="details">
          <li>
            {el.position} ({el.fullTime ? "full-time" : "part-time"})
          </li>
          <li>{el.timeFrame}</li>
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="experience-container">
      <a href=".." className="back-button">
        &#8592;
      </a>
      <h1>Experience</h1>
      <div className="card-container">{experienceCard}</div>
    </div>
  );
}

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projectsData);
  }, []);

  const projectCard = data.map((el) => (
    <div className="project-card" key={el.id}>
      <div className="project-content">
        <h2 className="title">{el.name}</h2>
        <img src={el.img} alt="" />
        <p className="description">{el.description}</p>
        {/* <form>
          <input
            type="submit"
            formAction="https://www.freecodecamp.org/"
            value="freeCodeCamp"
          />
        </form> */}
        <ul>
          <li>
            <a href={el.demoLink} target="_blank">
              View Demo
            </a>
          </li>
          <li>
            <a href={el.repoLink} target="_blank">
              View Repo
            </a>
          </li>
          {el.hasWebsite ? (
            <li>
              <a href={el.website} target="_blank">
                View Site
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="project-container">
      <a href=".." className="back-button">
        &#8592;
      </a>
      <h1>Projects</h1>
      {projectCard}
    </div>
  );
}
