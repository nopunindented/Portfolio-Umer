import React from "react";
import "./header.css";
import Hamburger from 'hamburger-react'
import { useState} from 'react';

const HamMenu : React.FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false)

    return (
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    )
}

export default HamMenu;