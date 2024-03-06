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
        <div className="firealertrow-two" >
          <div className="firealert-logo" style={{gridColumn: "2", gridRow: "1", fontFamily: "Oswald", fontSize:"300%", color: "#FF8928", height: "80%", position: "relative"}}>
            Fire Alert!
          </div>
          <div className="thriftaid-name" style={{gridColumn: "2", gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600", color: "rgb(216, 191, 191)"}}>
            ThriftAid
          </div>
        </div>
      </div>
    </>
  );
};

export default FireAlert;
