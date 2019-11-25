import React, {useState, Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import '../css/OrderList.css'


const Sizer = styled.div`
  display: inline-block;
  width: 20%;
  padding: 0.5rem;
`;

// 정사각형을 만들어줍니다. (padding-top 은 값을 % 로 설정하였을 때 부모 엘리먼트의 width 의 비율로 적용됩니다.)
const Square = styled.div`
  padding-top: 100%;
  position: relative;
  background: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
const SquareDone = styled.div`
  padding-top: 100%;
  position: relative;
  background-color: rgba(192,192,192);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
// 실제 내용이 들어가는 부분입니다.
const Contents = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  bottom: 1rem;
  right: 1rem;
  /* 텍스트가 길어지면 새 줄 생성; 박스 밖의 것은 숨김 */
  white-space: pre-wrap;
  overflow: hidden;
`;
const ContentsDone = styled.div`
  position: absolute;
  color: white;
  top: 1rem;
  left: 1rem;
  bottom: 1rem;
  right: 1rem;
  /* 텍스트가 길어지면 새 줄 생성; 박스 밖의 것은 숨김 */
  white-space: pre-wrap;
  overflow: hidden;
`;

const OrderList = () => {
 
  const [toggle, setToggle ] = useState(1);

  const handleDrawerToggle = async () => {
    if(toggle.value === 0)
    {
      setToggle(1)
    }else{
      setToggle(0)
    }
  }


    return (
      <div className="root">
        <AppBar position="static">
          <IconButton
            className="menuButton"
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon/>
          </IconButton>
        </AppBar>
        <Drawer open={toggle === 0} >
          <MenuItem onClick={handleDrawerToggle}>주문관리</MenuItem>
          <MenuItem onClick={handleDrawerToggle}>매장관리</MenuItem>
        </Drawer>
        <div className="menu_list">
          <Sizer>
            <Square>
              <Contents>
                <p>[주소] 경북 구미시 대학로 61 오름관</p>
                <p>[메뉴] 달콤바삭 치즈볼 3</p>
                <p>[가격] 15000</p>
              </Contents>
              <div className="list_box_button">
                <button className="button">주문거절</button>
                <button className="button">주문승낙</button>
              </div>
              
            </Square>
          </Sizer>
          <Sizer>
            <SquareDone>
            <ContentsDone>
                <p>[주소] 경북 구미시 대학로 61 테크노관</p>
                <p>[메뉴] 뿌링 치즈볼 1 {`\n\t `} 뿌링클 1</p>
                <p>[가격] 23500</p>
              </ContentsDone>
              <div className="list_box_button">
                <input
                className="delivery_button"
                value="배달알리기"
                type="submit"
                onClick={handleDrawerToggle}
                />
              </div>
            </SquareDone>
          </Sizer>
        </div>
      </div>
    );
  }



export default OrderList;