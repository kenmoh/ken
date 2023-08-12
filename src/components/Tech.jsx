import logo from "../assets/python.png";

const Tech = ({ iconName, iconUrl }) => {
  return (
    <>
      <div className="img-container">
        <img src={iconUrl} alt={iconName} className="img" />
        <span className="icon-name">{iconName}</span>
      </div>
    </>
  );
};

export default Tech;
