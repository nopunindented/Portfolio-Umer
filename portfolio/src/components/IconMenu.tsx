import React from "react";
import gitlogo from "./github.svg";
import linkedin from "./linkedin.svg";
import email from "./email.svg";
import cv from "./cv.svg"

const IconMenu: React.FC = () => {
  return (
    <>
      <div className="icon-menu">
        <a href="https://github.com/nopunindented">
          <img src={gitlogo} className="gitlogo glow-on-hover" alt="githublogo"/>
        </a>
        <a href="https://www.linkedin.com/in/umer-fiaz/">
          <img src={linkedin} className="linkedinlogo glow-on-hover" alt="linkedinlogo" />
        </a>
        <a href="mailto:mufiaz@ualberta.ca">
          <img src={email} className="emaillogo glow-on-hover" alt="emaillogo" />
        </a>
        <a href="/DayforceResume.pdf" target="_blank" rel="noreferrer">
          <img src={cv} className="cvlogo glow-on-hover" alt="cvlogo" />
        </a>
      </div>
    </>
  );
};

export default IconMenu;
