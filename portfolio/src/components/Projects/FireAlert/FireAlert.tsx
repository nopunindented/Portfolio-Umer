import React, {useState} from "react";
import './../projects.css';

const FireAlert: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={`firealert-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="firealert-logo" style={{gridColumn: "2", gridRow: "2", fontFamily: "Oswald", fontSize:"300%", color: "#FF8928"}}>
          Fire Alert!
        </div>
      </div>
    </>
  );
};

export default FireAlert;
