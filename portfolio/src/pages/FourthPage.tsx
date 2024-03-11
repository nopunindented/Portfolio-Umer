import React from 'react';
import './../index.css';
import President from '../components/Experiences/President';

const FourthPage: React.FC = () => {
  return (
    <>
      <div className="fourth-page">
        <div className="work-header">Extracurriculars</div>
        <div className='extracurricular-container'>
          <President />
        </div>
      </div>
    </>
  );
};

export default FourthPage;
