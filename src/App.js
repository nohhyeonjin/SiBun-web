import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login, OrderList } from "/";
import {ApolloProvider} from "react-apollo-hooks";
import apolloClient from "./apollo";

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
        </div>
      </Router>  
      </ApolloProvider>
    );
  }
}

export default App;
