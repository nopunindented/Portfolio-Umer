import React, {useState} from "react";
import './../projects.css';
import logo from './thriftaid.svg'

const ThriftAid: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={`thriftaid-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <img src={logo} alt="thriftaid logo" style={{gridColumn: "2", gridRow: "2"}}/>
        <div className="thriftaid-name" style={{gridColumn: "2", gridRow: "3", fontFamily: "Space Grotesk, sans-serif", position: "relative", top: "-45%", marginTop: "10%", fontSize: "200%", fontWeight: "600", color: "rgb(216, 191, 191)"}}>
          ThriftAid
        </div>
      </div>
    </>
  );
};

export default ThriftAid;
