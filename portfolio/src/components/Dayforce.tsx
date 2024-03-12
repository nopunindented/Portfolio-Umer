import React, { useEffect, useState } from "react";

const Dayforce: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".dayforce-container");
      if (!container) return;

      const containerHeight = container.clientHeight;
      const scrollPosition = window.scrollY;
      const containerTop = container.getBoundingClientRect().top;
      const triggerPosition = containerTop + containerHeight * 0.1;

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      } else if (containerTop > 0 || scrollPosition < containerTop) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="dayforce-container">
        <div className="dayforce-name">Dayforce (formerly Ceridian)</div>
        <div className="dayforce-date">Incoming @May 2024</div>
        <div className="dayforce-position">Software Engineer Intern</div>
        <ul className={`dayforce-points ${isVisible ? "visible" : ""}`}>
          <li>Intern on the Developer Experience (Internal Software Tool Dev & Infrastructure/DevOps) team.</li>
          <li>Will provide operational support for software delivery management tools such as Azure DevOps, Azure, Jira, Artifactory, Visual Studio/Code, GitHub, Confluence, etc.</li>
          <li>Tech stack consists of: C#, .NET, Docker, Azure DevOps, Github Actions, Azure, MSSQL, and many more DevOps tools.</li>
        </ul>
      </div>
    </>
  );
};

export default Dayforce;
