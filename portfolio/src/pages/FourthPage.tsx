import React from 'react';
import './../index.css';
import President from '../components/Experiences/President';
import External from '../components/Experiences/External';
import Rep from '../components/Experiences/Rep';
import Software from '../components/Experiences/Software';

const FourthPage: React.FC = () => {
  return (
    <>
      <div id="extracurriculars" className="fourth-page">
        <div className='extra-header-container'>
          <div className="extra-header">Extracurriculars</div>
        </div>
        <div className='extracurricular-container'>
          <President />
          <div className='parent-circle-container'>
            <div className='first-circle' />
          </div>
          <External />
          <div className='parent-circle2-container'>
            <div className='first-circle' />
          </div>
          <Rep />
          <div className='parent-circle3-container'>
            <div className='first-circle' />
          </div>
          <Software />
          <div className='parent-circle4-container'>
            <div className='first-circle' />
          </div>
          <div className='footer'>
           Ⓒ 2024 Umer Fiaz. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthPage;
