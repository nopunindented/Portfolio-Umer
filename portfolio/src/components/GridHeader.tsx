import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./header.css";

const GridHeader: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="name_navbar">Muhammad Umer Fiaz</div>
            <div className="work_navbar">Work Experience</div>
            <div className="projects_navbar">Projects</div>
      </div>
    );
  };
  
  export default GridHeader;