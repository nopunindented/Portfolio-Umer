import React from 'react';
import './../../index.css';

const President: React.FC = () => {
  return (
    <>
      <div className="president-container">
        <div className="president-position">(Prospective) President</div>
        <div className="president-date">HOPEFULLY @APRIL 2024</div>
        <div className="president-club">UofA Computer Engineering Club</div>
        <ul className="president-points">
            <li>Co-running for President in the 2024 CompE Club election.</li>
            <li>Plan to greatly increase financial transparency - especially on HackED - and get rid of blatant funds misusage across the club.</li>
            <li>Will replace most current junior exec roles by giving each portfolio 2-4 "office" roles that are interview-based, in order to ensure greater committment.</li>
            <li>Aiming for complete club financial self-sufficiency through greatly increasing number of companies at our major events - Aether & HackED.</li>
            <li>HackED has had negligible oversight for the past 2 years. We plan to shift that by integrating it fully into the club, just like Aether is.</li>
        </ul>
      </div>
    </>
  );
};

export default President;
