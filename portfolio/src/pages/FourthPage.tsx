import React from 'react';
import './../index.css';
import President from '../components/Experiences/President';
import External from '../components/Experiences/External';
import Rep from '../components/Experiences/Rep';

const FourthPage: React.FC = () => {
  return (
    <>
      <div className="fourth-page">
        <div className="work-header">Extracurriculars</div>
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
        </div>
      </div>
    </>
  );
};

export default FourthPage;
