import React, { Component } from 'react';
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

const handleOrderAccept = async () => {
  // try{

  // }catch(e){
  //   console.log(e);
  // }
}

const handleNotifyDelivery = async () => {

}

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      if(this.props.chatRoom == 2){
        return (
          <Sizer>
          <Square>
            <Contents>
              <p>[address] <br/> {this.props.location}</p>
              <p>[menu List]
              <br/>
              {this.props.menuList.map(menu => {
                 return <text style={{ fontSize: 16 }}>{menu.menu.name}&nbsp; {menu.quantity}개,&nbsp;</text>
               })}
              </p>
              <p>[price] <br/>{this.props.price}원</p>
            </Contents>
            <div className="list_box_button">
              <input
                    value="reject order"
                    type="submit"
                    onClick={this.props.onRejectPress}
              />
              &nbsp; &nbsp;
              <input
                    value="accept order"
                    type="submit"
                    onClick={handleOrderAccept}
              />
            </div>
            <br/>
            </Square>
            </Sizer>
        );
      }
      else{
        return (
          <Sizer>
          <Square>
            <Contents>
              <p>[address] <br/> {this.props.location}</p>
              <p>[menu List]
              <br/>
              {this.props.menuList.map(menu => {
                 return <text style={{ fontSize: 16 }}>{menu.menu.name}&nbsp; {menu.quantity}개,&nbsp;</text>
               })}
              </p>
              <p>[price] <br/>{this.props.price}원</p>
            </Contents>
            <div className="list_box_button">
              <input
                    value="notify Delivery"
                    type="submit"
                    onClick={handleNotifyDelivery}
              />
            </div>
            <br/>
            </Square>
            </Sizer>
        );
      }
    }
    
  
}


export default Order;