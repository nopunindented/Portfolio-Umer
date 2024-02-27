import React from "react";
import TypingIntro from "./TypingIntro";
import NameIntro from "./NameIntro";
import DescriptIntro from "./DescriptIntro";

const SlideAnimation: React.FC = () => {
  return (
    <>
      <div className="bg">
      <DescriptIntro />
        <NameIntro />
        <div className="typewriter-container">
          <TypingIntro />
        </div>
      </div>
    </>
  );
};

export default SlideAnimation;
