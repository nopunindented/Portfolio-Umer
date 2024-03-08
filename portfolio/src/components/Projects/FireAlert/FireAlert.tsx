import React, {useState} from "react";
import './../projects.css';
import link from './../link.png'

const FireAlert: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'React',
    'MongoDB',
    'Express.js',
    'Redux',
    'Node.js',
    'TypeScript',
    'JWT',
    'AWS'
    ,'JavaScript'
  ];

  return (
    <>
      <div className={`firealert-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="firealertrow-two" >
          <div className="firealert-logo" style={{gridColumn: "1", gridRow: "1", fontFamily: "Oswald", fontSize:"300%", color: "#FF8928", position: "relative"}}>
            Fire Alert!
          </div>
          <div className="firealert-name" style={{gridColumn: "1", gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600", color: "rgb(216, 191, 191)"}}>
            Fire Alert
          </div>
        </div>
        <div className="firealertrow-three">
          <div className="firealert-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontSize: "81%", fontWeight: "600", color: "white"}}>
          Fire Alert is an android app that provided real-time fire alerts to workers, such as farmers, in remote areas. The user selects a location and then the app provides SMS notifications if a fire is within a certain distance of the specified location.
          </div>
          <a href="https://github.com/nopunindented/ThriftAid">
            <img src={link} alt="link" style={{gridRow: "2", position: "relative", width: "42%", marginTop: "20%"}}/>
          </a>
        </div>
        <div className="thriftaidrow-four">
          {skills.map((skill) => (
            <div>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FireAlert;
