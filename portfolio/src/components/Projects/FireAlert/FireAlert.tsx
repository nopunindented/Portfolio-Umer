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
    'Python',
    'Twilio',
    'Scikit-Learn',
    'GCP',
    'Flask',
    'React Native'
    ,'JavaScript'
  ];

  return (
    <>
      <div className={`firealert-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="thriftaidrow-two" >
          <div className="thriftaid-logo" style={{gridRow: "1", fontFamily: "Oswald", fontSize:"300%", color: "#FF8928", position: "relative"}}>
            Fire Alert!
          </div>
          <div className="thriftaid-name" style={{gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600", color: "rgb(216, 191, 191)"}}>
            Fire Alert
          </div>
        </div>
        <div className="thriftaidrow-three">
          <div className="thriftaid-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontSize: "82%", fontWeight: "600", color: "white"}}>
          Fire Alert is an android app providing real-time fire alerts to workers, such as farmers, in remote areas. The user selects a location and then the app provides SMS notifications if a fire is within a certain distance of the specified location.
          </div>
          <a href="https://github.com/nopunindented/ThriftAid">
            <img src={link} alt="link" style={{gridRow: "2", position: "relative", width: "42%", marginTop: "20%"}}/>
          </a>
        </div>
        <div className="firealertrow-four">
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