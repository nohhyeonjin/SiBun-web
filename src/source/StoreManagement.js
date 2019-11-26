import React, { useState, Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "../css/StoreManagement.css";
import logo from "../image/logo.png";
import change from "../image/change.png";
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
  const handlePressInfo = () => {
    window.location.assign("/Store"); //페이지 넘기기
  };
  const handlePressMenu = () => {};
  const handlePressCategory = () => {};

  const handlePressChange = () => {};
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
        <MenuItem onClick={handlePressOrderScreen}>매장 관리</MenuItem>
        <MenuItem onClick={handlePressInfo}>기본 정보 관리</MenuItem>
        <MenuItem onClick={handlePressMenu}>메뉴 관리</MenuItem>
        <MenuItem onClick={handlePressCategory}>메뉴 카테고리 관리</MenuItem>
      </Drawer>
      <div className="body">
      <div className="info">기본 정보 관리</div>
        <div className="text">매장명</div>
        <div className="value">bhc 옥계점</div>
        <div className="tttt">
          <text className="text">
            최소 주문 금액{`\n`}
            <img src={change} alt="change" height="20px" width="20px" />
          </text>
        </div>

        <div className="value">15000원</div>
        <div className="tttt">
        <text className="text">
            배달팁{`\n`}
            <img src={change} alt="change" height="20px" width="20px" />
          </text></div>
        <div className="value">1000원</div>
      </div>
    </div>
  );
};

export default StoreManagement;
