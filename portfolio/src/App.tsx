import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import GridHeader from "./components/GridHeader";

function App() {
  return (
    <div>
      <GridHeader />
      <div className="App">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
