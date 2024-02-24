import React, { useState } from "react";


const HamMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="menu-btn">
      <div className="menu-btn_burger" />
    </div>
  );
};

export default HamMenu;