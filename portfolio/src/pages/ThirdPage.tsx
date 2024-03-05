import React from 'react';
import './../index.css';
import ThriftAid from '../components/Projects/ThriftAid/ThriftAid';
import FireAlert from '../components/Projects/FireAlert/FireAlert';
import VoltScript from '../components/Projects/VoltScript/VoltScript';

const ThirdPage: React.FC = () => {
  return (
    <>
      <div className="third-page">
        <div className="work-header">Featured Projects</div>
        <div className='project-container'>
          <VoltScript />
          <ThriftAid />
          <FireAlert />
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
