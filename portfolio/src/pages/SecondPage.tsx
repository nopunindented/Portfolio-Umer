import React from "react";
import Dayforce from "../components/Dayforce";
import Subnet from "../components/Subnet";

const SecondPage: React.FC = () => {
  return (
    <>
      <div className="second-page">
        <div className="work-header">Work Experience</div>
        <Dayforce />
        <Subnet />
      </div>
    </>
  );
};

export default SecondPage;
