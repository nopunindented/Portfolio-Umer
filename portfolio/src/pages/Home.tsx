import React from "react";
import "./home.css";
import SlideAnimation from "../components/SlideAnimation";
import NameIntro from "../components/NameIntro";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="home_layout">
        <SlideAnimation />
      </div>
    </div>
  );
};

export default HomePage;
