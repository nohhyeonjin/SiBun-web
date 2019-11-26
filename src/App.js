import React, {useState, Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login, OrderList, StoreManagement } from "/";
import {ApolloProvider} from "react-apollo-hooks";
import apolloClient from "./apollo";
import  Store from '../src/source/StoreManagement';
import Info from '../src/source/Info';
import Menu from '../src/source/Menu';
import Category from '../src/source/Category';


class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={apolloClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/OrderList">OrderList</Link>
              </li>
            </ul>
          </nav>

          <Route exact path="/Login" component={Login} />
          <Route path="/OrderList" component={OrderList} />
          <Route path="/Store" component={Store} />
          {/* <Route path="/Info" component={Info} /> */}
          <Route path="/Menu" component={Menu} />
          <Route path="/Category" component={Category} />
          {/* <Route path="/StoreManagement" component={StoreManagement}/> */}
        </div>
      </Router>  
      </ApolloProvider>
    );
  }
}

export default App;
