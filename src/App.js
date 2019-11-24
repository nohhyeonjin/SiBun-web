import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login, OrderList } from "/";

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;
