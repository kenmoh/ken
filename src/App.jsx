import About from "./components/About";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Social from "./components/Social";
import Tech from "./components/Tech";
import { techs, projects, socials } from "./constants";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        {/* <div className="social-container">
          <Button />
          <div className="social-icon-container">
            {socials.map((social) => (
              <Social
                key={social.name}
                name={social.name}
                icon={social.icon}
                url={social.url}
              />
            ))}
          </div>
        </div> */}
        <div className="about-tech">
          <About />
          <div className="tech-container" id="technologies">
            <h3>TECHNOLOGIES</h3>
            <div className="technologies">
              {techs.map((tech, index) => (
                <Tech key={index} iconUrl={tech.icon} iconName={tech.name} />
              ))}
            </div>
          </div>
          <div className="projects-container" id="projects">
            <h3>PROJECTS</h3>
            {projects.map((project) => (
              <Project
                key={project.frameworks}
                projectName={project.projectName}
                description={project.description}
                frameworks={project.frameworks}
                img={project.img}
                url={project.url}
              />
            ))}
          </div>
          <div className="mb"></div>
        </div>
        <Button />
        <hr />
        <div className="social-container">
          <div className="social-icon-container">
            {socials.map((social) => (
              <Social
                key={social.name}
                name={social.name}
                icon={social.icon}
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
