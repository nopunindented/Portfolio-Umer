import React from 'react';
import './../index.css';
import President from '../components/Experiences/President';
import External from '../components/Experiences/External';

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
            <div className='second-circle' />
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthPage;
