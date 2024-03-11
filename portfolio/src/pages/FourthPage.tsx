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
          <External />
        </div>
      </div>
    </>
  );
};

export default FourthPage;
