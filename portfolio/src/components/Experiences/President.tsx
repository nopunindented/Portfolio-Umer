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
            <li>Plan to greatly increase financial transparency across the club, especially in HackED & Geer Week.</li>
            <li>Will replace most current junior exec roles by giving each portfolio 2-4 "officer" roles that are interview-based, in order to ensure greater committment.</li>
            <li>Aiming for complete club financial self-sufficiency through greatly increasing number of sponsors at our major events - Aether & HackED.</li>
            <li>Planning to increase oversight across HackED and fully integrating it into the club by adding clauses in the constitution requiring full transparency and approval for a financial decisions.</li>
            <li>I will continue working on inter-university partnerships as well - such as an expansion of our current one with UBC's CS club (which I cultivated).</li>
        </ul>
      </div>
    </>
  );
};

export default President;
