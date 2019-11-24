import React from "react";
import "../css/Login.css";
import logo from '../image/logo.png';

const Login = () => {
  return (
    <div className="header">
      <div className="main_bar">
      <div className="logo">
      <img src={logo} alt="Logo" width="100px" height="auto"/>

      </div>
        <p className="main_title">아이디와 비밀번호를 입력해주세요.</p>
        <form>
          <input
            className="form-item"
            placeholder="아이디"
            name="username"
            type="text"
          />
          <input
            className="form-item"
            placeholder="비밀번호"
            name="password"
            type="password"
          />
          <input className="form-submit" value="로그인" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
