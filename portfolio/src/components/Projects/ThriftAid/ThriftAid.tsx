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
        <img src={logo} alt="thriftaid logo" style={{gridColumn: "2", gridRow: "2", justifyContent: "center", alignItems: "center"}}/>
      </div>
    </>
  );
};

export default ThriftAid;
