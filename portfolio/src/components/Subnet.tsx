import React from "react";

const Subnet: React.FC = () => {
  return (
    <>
      <div className="subnet-container">
        <div className="subnet-name">SUBNET Solutions</div>
        <div className="subnet-date">May 2024 - Present</div>
        <div className="subnet-position">Software Developer Intern</div>
        <ul className="subnet-points">
        <li>Devising Python AI microservice for querying data on 4 million sensory devices for 300+ companies, using Langchain and Django.</li>
            <li>Creating Typescript-based React interface for Django and .NET REST API pipeline hosted on Azure VM.</li>
            <li>Reduced API calls in TypeScript React UI by over 80% via batching them through new TypeScript Node endpoints.</li>
        </ul>
      </div>
    </>
  );
};

export default Subnet;
