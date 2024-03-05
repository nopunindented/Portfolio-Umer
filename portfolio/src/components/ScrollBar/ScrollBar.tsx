import React, {useRef, useState} from 'react';
import './../../index.css';
import ProjectData from './ProjectData';

const ScrollBar: React.FC = () => {

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount: number) => {
    if (containerRef.current) {
      const currentScrollLeft = containerRef.current.scrollLeft;
      const newScrollPosition = currentScrollLeft + scrollAmount;
      setScrollPosition(newScrollPosition);
      containerRef.current.scrollLeft = newScrollPosition;
    }
  };
  
  return (
    <div className="scroll-container">
      <div
      >
        <div className="content-box">
          {ProjectData.map((item) => (
            <div className="card" style={{ backgroundColor: item.color }}>
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollBar;
