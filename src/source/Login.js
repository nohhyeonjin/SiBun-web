import React from "react";
import { ApolloProvider } from "react-apollo";
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks'

import "../css/Login.css";
import logo from '../image/logo.png';
import { useInput } from '../useInput';
import apolloClient from '../apollo';


// 쿼리 ?��?��
const SIGN_IN = gql`
  mutation storeSignIn($storeId: String! $pwd: String!) {
    storeSignIn(storeId: $storeId pwd: $pwd)
  }
`;

const Login = () => {
  const idInput = useInput("");
  const pwdInput = useInput("");
  const signInMutation = useMutation(SIGN_IN, { //?��기서 ?���?
    variables: {
      storeId: idInput.value,
      pwd: pwdInput.value
    }
  })[0];

  const handlePressLogin = async () => { // 로그?�� 버튼 리스?��
    const { data: { storeSignIn } } = await signInMutation();
    console.log(storeSignIn); // JWT ?��?��
  }

  return (
    <ApolloProvider client={apolloClient}>
    <div className="header">
      <div className="main_bar">
      <div className="logo">
      <img src={logo} alt="Logo" width="100px" height="auto"/>

      </div>
        <p className="main_title">?��?��?��??? 비�??번호�? ?��?��?��주세?��.</p>
        <form>
          <input
            className="form-item"
            placeholder="?��?��?��"
            name="username"
            type="text"
            //{...idInput}
          />
          <input
            className="form-item"
            placeholder="비�??번호"
            name="password"
            type="password"
            {...pwdInput}
          />
          <input
            className="form-submit"
            value="로그?��"
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
