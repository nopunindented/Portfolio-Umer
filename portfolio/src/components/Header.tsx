import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./header.css";

const Header: React.FC = () => {
  return (
    <AppBar
      className="header"
      sx={{
        marginBottom: 2,
        width: "60%",
        left: "20%",
        background: "rgba(23, 23, 23, 0.27)",
        backdropFilter: "blur(6.7px)",
      }}
    >
      <Toolbar>
        <div style={{ display: "flex", flexGrow: 1 }}>
          <Typography component="h1">Muhammad Umer Fiaz</Typography>
        </div>
        <div style={{ display: "flex", marginRight: 2 }}>
          <Typography variant="body1">My name</Typography>
        </div>
        <Button color="inherit" href="/">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
