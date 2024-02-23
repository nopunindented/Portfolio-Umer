import React from "react";
import { useState, useEffect } from 'react';
import "./header.css";
import HamMenu from "./HamMenu";

interface ScreenSizeState {
  width: number;
}

const GridHeader: React.FC = () => {

  const [screenSize, setScreenSize] = useState<ScreenSizeState>({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(
        {
          width: window.innerWidth
        });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="name_navbar">Muhammad Umer Fiaz</div>
      {screenSize.width > 540 ? (
        <>
          <div className="work_navbar">Work Experience</div>
          <div className="projects_navbar">Projects</div>
          <div className="extra_navbar">Extracurriculars</div>
        </>
      ) : (
        <HamMenu />
      )}
    </div>
  );
      }
  
  
  export default GridHeader;