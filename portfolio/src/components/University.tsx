import React from "react";

const University: React.FC = () => {
  return (
    <>
      <div className="uni-container">
        <div className="dayforce-name">University of Alberta</div>
        <div className="subnet-date">May 2023 - August 2023</div>
        <div className="dayforce-position">Fullstack Developer</div>
        <ul className="dayforce-points">
        <li> Developed a payments page containing different pricing plans using TypeScript, React, Next.js, and Figma.</li>
            <li> Reduced errors users faced by 41.8% by enhancing UI designs, and improving and creating UX designs in Figma.</li>
            <li> Created application implementing the API 1183 practice for assessing pipelines utilizing a Docker-containerized
Flask REST API Python workflow that uses Pandas, NumPy, and Seaborn for data visualization.</li>
        </ul>
      </div>
    </>
  );
};

export default University;
