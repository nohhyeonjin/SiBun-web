import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "react-apollo-hooks";

import "../css/Login.css";
import logo from "../image/logo.png";
import { runInContext } from "vm";
import { exportDefaultSpecifier } from "@babel/types";

// 쿼리 ?��?��
const SIGN_IN = gql`
  mutation storeSignIn($storeId: String!, $pwd: String!) {
    storeSignIn(storeId: $storeId, pwd: $pwd)
  }
`;

const GET_STORE_ID = gql`
  query getStoreId($id: String!) {
    getStoreId(id: $id){
      id
    }
  }
`;


const Login = () => {
  const [ id, setID ] = useState("");
  const [ pwd, setPWD ] = useState("");

  const [signInMutation,{loading}] = useMutation(SIGN_IN, {
    variables: {
      storeId: id,
      pwd
    }
  });

  const getStoreIdQuery = useQuery(GET_STORE_ID,{
    variables:{
      id
    }
  });
  
  const handlePressLogin = async () => {
    try{
      // 로그?�� 버튼 리스?��
      if (id === '' || pwd === '') {
        window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      } else {
        const { 
          data: { storeSignIn } 
         } = await signInMutation();
         // JWT ?��?��
         if(storeSignIn !== "SignIn Failed!!!" ){
           const { data : { id } } = getStoreIdQuery;
           window.alert(id);
           //console.log(storeId);
           window.alert("로그인 성공!");
           window.location.assign('/OrderList'); //페이지 넘기기
           console.log(storeSignIn);
           //window.location.replace('/OrderList'); //페이지 넘기기
         }else{
          window.alert("로그인이 실패하였습니다!");
         }
      }
    }catch(e){
      console.log(e);
    }
   };
  return (
     loading?
      <div>
         <img src={logo} alt="Logo" width="100px" height="auto" />
      </div>:
      <div className="header">
        <div className="main_bar">
          <div className="logo">
            <img src={logo} alt="Logo" width="100px" height="auto" />
          </div>
          <p className="main_title">아이디랑 비밀번호를 입력해주세요.</p>
          <form>
            <input
              className="form-item"
              placeholder="아이디"
              name="username"
              type="text"
              value={id}
              onChange={(text)=>setID(text.target.value)}
            />
            <input
              className="form-item"
              placeholder="비밀번호"
              name="password"
              type="password"
              value={pwd}
              onChange={(text)=>setPWD(text.target.value)}
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
    );     
};

export default Login;
