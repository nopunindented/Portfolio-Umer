import React, {useState} from "react";
import './../projects.css';

const VoltScript: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={`voltscript-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="voltscript-logo" style={{gridColumn: "2", gridRow: "2", fontFamily: "Verdana", fontSize:"300%", color: "rgb(33, 181, 222)"}}>
          VoltScript
        </div>
      </div>
    </>
  );
};

export default VoltScript;
