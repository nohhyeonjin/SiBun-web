import React from "react";
import { ApolloProvider } from "react-apollo";
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks'

import "../css/Login.css";
import logo from '../image/logo.png';
import { useInput } from '../useInput';
import apolloClient from '../apollo';


// 쿼리 작성
const SIGN_IN = gql`
  mutation storeSignIn($storeId: String! $pwd: String!) {
    storeSignIn(storeId: $storeId pwd: $pwd)
  }
`;

const Login = () => {
  const idInput = useInput("");
  const pwdInput = useInput("");
  const signInMutation = useMutation(SIGN_IN, { //여기서 터짐
    variables: {
      storeId: idInput.value,
      pwd: pwdInput.value
    }
  })[0];

  const handlePressLogin = async () => { // 로그인 버튼 리스너
    const { data: { storeSignIn } } = await signInMutation();
    console.log(storeSignIn); // JWT 토큰
  }

  return (
    <ApolloProvider client={apolloClient}>
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
            {...idInput}
          />
          <input
            className="form-item"
            placeholder="비밀번호"
            name="password"
            type="password"
            {...pwdInput}
          />
          <input
            className="form-submit"
            value="로그인"
            type="submit"
            onClick={handlePressLogin}
          />
        </form>
      </div>
    </div>
    </ApolloProvider>
  );
};

export default Login;
