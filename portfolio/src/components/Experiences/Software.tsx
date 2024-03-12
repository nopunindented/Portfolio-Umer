import React from 'react';
import './../../index.css';

const Software: React.FC = () => {
  return (
    <>
      <div className="software-container">
        <div className="president-position">Software Team Member</div>
        <div className="president-date">August 2022 - November 2022</div>
        <div className="president-club">UofA Computer Engineering Club</div>
        <ul className="president-points">
            <li>Led implementation of UDP connection between client’s UI application and C++ program running on a Teensy 4.1.</li>
            <li>Cooperated with 5 team members to develop a PyQt GUI to display telemetry information from hyperloop pod.</li>
        </ul>
      </div>
    </>
  );
};

export default Software;
