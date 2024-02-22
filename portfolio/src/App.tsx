import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
