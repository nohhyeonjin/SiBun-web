import React, { useState, Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const StoreManagement = () => {
  const [toggle, setToggle] = useState(1);

  const handleDrawerToggle = async () => {
    if (toggle === 0) {
      setToggle(1);
    } else {
      setToggle(0);
    }
  };
  
  const handlePressOrderScreen = () => {
    window.location.assign("/OrderList"); //페이지 넘기기
  };
  const handlePressStoreScreen = () => {
    window.location.assign("/StoreManagement"); //페이지 넘기기
  };

  return (
    <div className="root">
      <AppBar position="static">
        <IconButton
          className="menuButton"
          color="inherit"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer open={toggle === 0}>
        <MenuItem onClick={handlePressOrderScreen}>order management</MenuItem>
        <MenuItem onClick={handlePressStoreScreen}>store management</MenuItem>
      </Drawer>
    </div>
  );
};

export default StoreManagement;