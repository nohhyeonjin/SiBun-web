import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import gql from "graphql-tag";
import { useQuery, useSubscription } from "react-apollo-hooks";

import '../css/OrderList.css'
import logo from "../image/logo.png";
import Order from './Order';

//graphQL queries

const GET_STORE_ORDER_LIST = gql`
  query getStoreOrderList($storeId: String!) {
    getStoreOrderList(storeId: $storeId){
      id
      address
      menuList{
        menu{
          name
        }
        quantity
      }
      totalPrice
      chatRoom{
        state
      }
    }
  }
`;

const SUBSCRIBE_STORE_ORDER = gql`
  supscription subscriptStoreOrder($storeId: String!) {
    subscriptStoreOrder(storeId: $storeId) {
      id
      address
      menuList{
        menu{
          name
        }
        quantity
      }
      totalPrice
      chatRoom{
        state
      }
    }
  }
`;

const OrderList = () => {
  const [ toggle, setToggle ] = useState(1);

  const StoreID = window.localStorage.getItem('id');
  const { data: { getStoreOrderList }, loading } = useQuery(GET_STORE_ORDER_LIST, {
    variables: {
      storeId : StoreID
    }
  });
  const [ storeOrderList, setStoreOrderList ] = useState(getStoreOrderList || []);
  const { data } = useSubscription(SUBSCRIBE_STORE_ORDER, {
    variables: {
      storeId: StoreID
    }
  });

  const handleNewStoreOrder = () => {
    if(data !== undefined) {
      const { subscriptStoreOrder } = data;
      setStoreOrderList(previous => [...previous, subscriptStoreOrder]);
    }
  }

  useEffect(() => {
    handleNewStoreOrder();
  }, [data]);

  const handleDrawerToggle = async () => {
    if(toggle === 0) {
      setToggle(1)
    } else {
      setToggle(0)
    }
  };

  return (
    loading ?
    <div>
        <img src={logo} alt="Logo" width="100px" height="auto" />
    </div>:
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
        <MenuItem onClick={handleDrawerToggle}>order management</MenuItem>
        <MenuItem onClick={handleDrawerToggle}>store management</MenuItem>
      </Drawer>
      <div className="menu_list">
      {
        storeOrderList.length === 0 ?
        <p>주문내역이 없습니다!</p>
        :
        storeOrderList.map(item =>{
          return <Order
            key={item.id}
            roomId={item.id}
            location={item.address}
            menuList={item.menuList}
            price={item.totalPrice}
            chatRoom={item.chatRoom.state}
          />;
      })};
        
      </div>
    </div>
  );
}

export default OrderList;