import React from "react";
import { useState, useEffect } from 'react';
import "./header.css";

interface ScreenSizeState {
  width: number;
}


const ScreenSize: () => number = () => {

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
  }

const GridHeader: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="name_navbar">Muhammad Umer Fiaz</div>
            <div className="work_navbar">Work Experience</div>
            <div className="projects_navbar">Projects</div>
            <div className="extra_navbar">Extracurriculars</div>
      </div>
    );
  };
  
  export default GridHeader;