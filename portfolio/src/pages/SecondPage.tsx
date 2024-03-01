import React from "react";
import Dayforce from "../components/Dayforce";
import Subnet from "../components/Subnet";
import University from "../components/University";

const SecondPage: React.FC = () => {
  return (
    <>
      <div className="second-page">
        <div className="work-header">Work Experience</div>
        <Dayforce />
        <Subnet />
        <University />
      </div>
    </>
  );
};

export default SecondPage;
