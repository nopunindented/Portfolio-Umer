import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./header.css";

const GridHeader: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="">Muhammad Umer Fiaz</div>
            <div className="marginedone">Two</div>
            <div className="marginedtwo">Three</div>
      </div>
    );
  };
  
  export default GridHeader;