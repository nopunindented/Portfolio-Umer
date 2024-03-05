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
        ref={containerRef}
        style={{
          overflowX: 'scroll',
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap', // Ensure children are in a horizontal line
        }}
      >
        {/* Add your components here */}
      </div>
      <div className="action-btns">
        <button onClick={() => handleScroll(-200)}>Scroll Left</button>
        <button onClick={() => handleScroll(200)}>Scroll Right</button>
      </div>
    </div>
  );
}

export default ScrollBar;
