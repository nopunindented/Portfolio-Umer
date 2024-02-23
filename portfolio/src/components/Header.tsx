import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./header.css";

const Header: React.FC = () => {
  return (
    <AppBar
      className="hea"
      sx={{
        marginBottom: 2,
        width: "60%",
        left: "20%",
        marginTop: 2,
        height: "7vh",
        background: "rgba(23, 23, 23, 0.27)",
        backdropFilter: "blur(0.5px)",
      }}
    >
      <Toolbar>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            fontFamily: "Fira Code",
            position: "relative",
            top: "-7%",
          }}
        >
          <Typography
            component="h1"
            sx={{ fontWeight: "0%", fontFamily: "Roboto" }}
          >
            Muhammad Umer Fiaz
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            marginLeft: 2,
            marginRight: 2,
            left: "-10%",
            top: "-7%",
          }}
        >
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
