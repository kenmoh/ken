import { motion } from "framer-motion";

const Social = ({ icon, name, url }) => {
  return (
    <motion.div
      className="social"
      whileHover={{
        scale: 1.6,
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={name} className="social-img" />
      </a>
    </motion.div>
  );
};

export default Social;
