import { motion } from "framer-motion";

const URL = "https://mohdelivery.s3.amazonaws.com/resume/Aremohken.pdf";

const Button = () => {
  const downloadResume = () => {
    const fileName = URL.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = URL;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <motion.button
      onClick={downloadResume}
      className="resume"
      whileHover={{ scale: 1.1 }}
    >
      Download Resume
    </motion.button>
  );
};

export default Button;
