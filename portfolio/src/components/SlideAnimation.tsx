import React from "react";
import TypingIntro from "./TypingIntro";
import NameIntro from "./NameIntro";

const SlideAnimation: React.FC = () => {
  return (
    <>
      <div className="bg">
        <NameIntro />
        <div className="typewriter-container">
          <TypingIntro />
        </div>
      </div>
    </>
  );
};

export default SlideAnimation;
