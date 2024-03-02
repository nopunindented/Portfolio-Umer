import React from "react";
import "./home.css";
import SlideAnimation from "../components/SlideAnimation";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="home_layout">
        <SlideAnimation />
        <SecondPage />
        <ThirdPage />
      </div>
    </div>
  );
};

export default HomePage;
