import React from "react";
import gitlogo from "./github.svg";
import linkedin from "./linkedin.svg";
import email from "./email.svg";

const IconMenu: React.FC = () => {
  return (
    <>
      <div className="icon-menu">
        <img src={gitlogo} className="gitlogo" alt="githublogo" />
        <img src={linkedin} className="linkedinlogo glow-on-hover" alt="linkedinlogo" />
        <img src={email} className="emaillogo" alt="emaillogo" />
      </div>
    </>
  );
};

export default IconMenu;
