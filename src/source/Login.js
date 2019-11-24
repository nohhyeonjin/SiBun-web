import React from "react";
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks'

import "../css/Login.css";
import logo from '../image/logo.png';

// 쿼리 작성
const SIGN_IN = gql`
  mutation storeSignIn($storeId: String! $pwd: String!) {
    storeSignIn(storeId: $storeId pwd: $pwd)
  }
`;

const Login = () => {
  const signInMutation = useMutation(SIGN_IN, {
    variables: {
      storeId: "",
      pwd: ""
    }
  })[0];

  const handlePressLogin = async () => { // 로그인 버튼 리스너
    const { data: { storeSignIn } } = await signInMutation();
    console.log(storeSignIn); // JWT 토큰
  }

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
