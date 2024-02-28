import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import GridHeader from "./components/GridHeader";

function App() {
  return (
    <>
    <GridHeader />
      <div className="App">
        <HomePage />
      </div>
    </>
  );
}

export default App;
