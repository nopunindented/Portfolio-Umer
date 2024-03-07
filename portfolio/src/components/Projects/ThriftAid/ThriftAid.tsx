import React, {useState} from "react";
import './../projects.css';
import logo from './thriftaid.svg'
import link from './../link.png'

const ThriftAid: React.FC = () => {
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
      <div className={`thriftaid-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="thriftaidrow-two">
          <img src={logo} alt="thriftaid logo" style={{gridRow: "1", position: "relative"}}/>
          <div className="thriftaid-name" style={{gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600", color: "rgb(216, 191, 191)"}}>
            ThriftAid
          </div>
        </div>
        <div className="thriftaidrow-three">
          <div className="thriftaid-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontSize: "90%", fontWeight: "600", color: "white"}}>
            ThriftAid is a platform that links homeless shelters with thrift. Thrift stores can donate excess stock by creating postings which homeless shelters may choose to accept.
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

export default ThriftAid;