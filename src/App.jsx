import About from "./components/About";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Social from "./components/Social";
import Tech from "./components/Tech";
import { techs, projects, socials } from "./constants";

const python = "./assets/python.png";
const rn = "./assets/React Native.png";
const reservation = ".assets/reservation.jpg";
const js = "./assets/JS.png";
const docker = "./assets/Docker.png";
const github = "./assets/github.png";
const gmail = "./assets/gmail.png";
const app = "./assets/app.png";
const linkedin = "./assets/linkedin.png";
const twitter = "./assets/twitter.png";
const vacancy = "./assets/vacancy.jpg";
const frameworks = [
  "FastAPI",
  "JWT",
  "Postgresql",
  "SQLAlchemy",
  "React Native",
  "Docker",
];
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

            <Project
              frameworks={frameworks}
              projectName={"QUickPickup"}
              url={"https://mohdelivery.onrender.com/docs"}
              img={app}
              description={
                "A Multi vendor dispatch application with wallet system. This app allow users(Sender) to list item for and have dispatch rider pick it up for delivery. A wallet is created for each registered user. Upon delivery confirmation by the sender, the wallet is credited."
              }
            />
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
