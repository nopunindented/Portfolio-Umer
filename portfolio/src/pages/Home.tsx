import React from "react";
import SlideAnimation from "../components/SlideAnimation";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from './FourthPage'

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="home_layout">
        <SlideAnimation />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
      </div>
    </div>
  );
};

export default HomePage;
