import React from "react";
import TypingIntro from "./TypingIntro";

const SlideAnimation: React.FC = () => {
  return (
    <>
      <div className="bg">
        <div className="typewriter-container">
          <TypingIntro />
        </div>
      </div>
    </>
  );
};

export default SlideAnimation;
