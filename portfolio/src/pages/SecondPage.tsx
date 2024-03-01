import React from "react";
import Dayforce from "../components/Dayforce";
import Subnet from "../components/Subnet";
import University from "../components/University";
import Painworth from "../components/Painworth";

const SecondPage: React.FC = () => {
  return (
    <>
      <div className="second-page">
        <div className="work-header">Work Experience</div>
        <Dayforce />
        <Subnet />
        <University />
        <Painworth />
      </div>
    </>
  );
};

export default SecondPage;
