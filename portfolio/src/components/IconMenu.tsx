import React from "react";
import gitlogo from "./github.svg"
import linkedin from "./linkedin.svg"

const IconMenu: React.FC = () => {
  return (
    <>
      <div className="icon-menu">
        <img src={gitlogo} className="gitlogo" alt="githublogo" />
        <img src={linkedin} className="linkedinlogo" alt="linkedinlogo" />
      </div>
    </>
  );
};

export default IconMenu;
