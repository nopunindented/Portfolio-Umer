import React, { useState } from "react";
import Hamburger from "hamburger-react";


const HamMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default HamMenu;