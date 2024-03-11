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
            <li>Developed a Discord bot to efficiently manage club meetings and important announcements.</li>
            <li>Managed presentations during career fair and resolved technical errors.</li>
            <li>Planned various social events and worked on inter-club events.</li>
            <li>Created email scraper application to help outreach time find contacts from companies.</li>
        </ul>
      </div>
    </>
  );
};

export default Software;
