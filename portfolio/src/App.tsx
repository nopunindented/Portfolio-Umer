import React, { useState } from "react";
import "./App.css";
import GridHeader from "./components/GridHeader";
import SlideAnimation from "./components/SlideAnimation";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import NoPage from "./pages/NoPage";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handlePathChange = () => {
    setCurrentPath(window.location.pathname);
  };

  window.addEventListener("popstate", handlePathChange);

  const renderPage = () => {
    switch (currentPath) {
      case "/":
      case "/#workexperience":
      case "/#projects":
      case "/#extracurriculars":
      case "/#home":
        return (
          <>
            <SlideAnimation />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <GridHeader />
          </>
        );
      default:
        return <NoPage />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
