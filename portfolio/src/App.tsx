import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import GridHeader from "./components/GridHeader";

function App() {
  return (
    <>
      <div className="App">
        <HomePage />
        <GridHeader />
      </div>
      
    </>
  );
}

export default App;
