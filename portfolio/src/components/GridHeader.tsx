import React, { useState, useEffect } from "react";
import "./../index.css";
import Hamburger from "hamburger-react";

interface ScreenSizeState {
  width: number;
}

const GridHeader: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<ScreenSizeState>({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenSize({
        width: newWidth,
      });

      // Close the hamburger menu if screen size is greater than 550
      if (newWidth > 550 && isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]); // Add isOpen as a dependency to avoid stale closure

  return (
    <div className={`wrapper ${isOpen ? "open" : ""}`}>
      {screenSize.width > 550 ? (
        <>
          <div className="name_navbar">Muhammad Umer Fiaz</div>
          <div className="work_navbar">Work Experience</div>
          <div className="projects_navbar">Projects</div>
          <div className="extra_navbar">Extracurriculars</div>
        </>
      ) : (
        <>
          <div className={`name_navbar_hamburger ${isOpen ? "open" : ""}`}>
            Muhammad Umer Fiaz
            {isOpen ? (
              <>
                <div
                  className={`work_navbar_hamburger ${isOpen ? "open" : ""}`}
                >
                  Work Experience
                </div>
                <div
                  className={`projects_navbar_hamburger ${isOpen ? "open" : ""}`}
                >
                  Projects
                </div>
                <div
                  className={`extra_navbar_hamburger ${isOpen ? "open" : ""}`}
                >
                  Extracurriculars
                </div>
              </>
            ) : null}
          </div>
          <div className={`hamburger-position ${isOpen ? "open" : ""}`}>
            <Hamburger
              color="white"
              size={16}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GridHeader;
