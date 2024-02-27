import React from "react";
import "./home.css";
import SlideAnimation from "../components/SlideAnimation";
import SecondPage from "./SecondPage";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="home_layout">
        <SlideAnimation />
        <SecondPage />
      </div>
    </div>
  );
};

export default HomePage;
