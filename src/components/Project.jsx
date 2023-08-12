import { useRef } from "react";
import Framework from "./Freamework";
import { useScroll, motion, useTransform } from "framer-motion";

const Project = ({ projectName, description, img, url, frameworks }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.30 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className="projects"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
    >
      <div className="project-img-container">
        <motion.img
          src={img}
          alt={projectName}
          className="project-img"
          whileHover={{
            scale: 1.2,
          }}
        />
      </div>
      <div className="project-desc">
        <h4>{projectName}</h4>
        <p>{description}</p>

        <a href={url} target="_blank" rel="noopener noreferrer">
          View
        </a>

        <div className="framework-container">
          {frameworks.map((framework, index) => (
            <Framework key={index} frameworkName={framework} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
