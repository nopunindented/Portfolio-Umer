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
        
      </div>
    </>
  );
};

export default VoltScript;
