import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import './home.css'

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="home_layout">
        <h1 className="glass_text">Hello</h1>
      </div>
    </div>
  );
};

export default HomePage;
