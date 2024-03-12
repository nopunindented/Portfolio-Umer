import React from "react";
import "./App.css";
import GridHeader from "./components/GridHeader";
import SlideAnimation from "./components/SlideAnimation";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";

function App() {
  return (
    <>
      <div className="App">
        <SlideAnimation />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <GridHeader />
      </div>
      
    </>
  );
}

export default App;
