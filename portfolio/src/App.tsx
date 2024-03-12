import React, { useState, useEffect } from "react";
import "./App.css";
import GridHeader from "./components/GridHeader";
import SlideAnimation from "./components/SlideAnimation";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import NoPage from "./pages/NoPage";

function App() {
  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(getPath());
    };

    window.addEventListener("popstate", handlePathChange);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  function getPath() {
    const path = window.location.pathname;
    return path + window.location.hash;
  }

  const isValidPath = (path: string) => {
    const validPaths = ["/", "/#workexperience", "/#projects", "/#extracurriculars", "/#home"];
    return validPaths.includes(path);
  };

  const renderPage = () => {
    if (isValidPath(currentPath)) {
      return (
        <>
          <SlideAnimation />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
          <GridHeader />
        </>
      );
    } else {
      return <NoPage />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
