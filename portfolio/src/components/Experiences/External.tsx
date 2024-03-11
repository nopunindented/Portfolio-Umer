import React from 'react';
import './../../index.css';

const External: React.FC = () => {
  return (
    <>
      <div className="external-container">
        <div className="president-position">VP External</div>
        <div className="president-date">May 2023 - May 2024</div>
        <div className="president-club">UofA Computer Engineering Club</div>
        <ul className="president-points">
            <li>Launched initiatives such as the University of Alberta's first ever AI & cloud conference and hybrid technical career fair - Aether.</li>
            <li>Cultivated partnernships with over 15 companies.</li>
            <li>Developed key partnernships with top tech companies, as well as with over universities (e.g. UBC).</li>
            <li>Brought in over 1,200 attendees for Aether, with people across countries such as Canada, the US, and China attending.</li>
            <li>Doubled club's profit from career fair and strived to ensure financial transparency across the club.</li>
        </ul>
      </div>
    </>
  );
};

export default External;
