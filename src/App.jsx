import About from "./components/About";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Social from "./components/Social";
import Tech from "./components/Tech";
import { techs, projects, socials } from "./constants";

const python = ".assets/python.png";
const rn = ".assets/React Native.png";
const reservation = ".assets/reservation.jpg";
const js = "./assets/JS.png";
const docker = "./assets/Docker.png";

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
              <Tech iconUrl={python} iconName={"Python"} />
              <Tech iconUrl={js} iconName={"JavaScript"} />
              <Tech iconUrl={rn} iconName={"React Native"} />
              <Tech iconUrl={docker} iconName={"Docker"} />
            </div>
          </div>
          <div className="projects-container" id="projects">
            <h3>PROJECTS</h3>
            {projects.map((project, index) => (
              <Project
                key={index}
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
