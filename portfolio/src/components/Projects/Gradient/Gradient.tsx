import React, {useState} from "react";
import './../projects.css';
import link from './../link.png'
import logo from './gradient.png'

const Gradient: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Python',
    'Langchain',
    'Firebase',
    'Tornado.py',
    'React',
    'Pytest'
    ,'JavaScript',
    'Tesseract'
  ];

  return (
    <>
      <div className={`gradient-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="thriftaidrow-two" >
        <img src={logo} alt="thriftaid logo" style={{gridRow: "1", position: "relative", width: "80%", marginLeft: "50%", marginRight: "20%", top: "10%"}}/>
          <div className="thriftaid-name" style={{gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600", color: "rgb(216, 191, 191)"}}>
            Gradient
          </div>
        </div>
        <div className="firealertrow-three">
          <div className="thriftaid-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontSize: "83%", fontWeight: "600", color: "white"}}>
          Fire Alert is an android app providing real-time fire alerts to people, such as farmers, in remote areas. You select a location & the app provides SMS notifications if a fire is within a certain distance of the location.
          </div>
          <a href="https://github.com/nopunindented/Fire-Alert">
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

export default Gradient;