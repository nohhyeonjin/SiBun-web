import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login, OrderList } from "/";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/Login"></Link>
          <Link to="/OrderList"></Link>

          <Route exact path="/Login" component={Login} />
          <Route path="/OrderList" component={OrderList} />
        </div>
      </Router>
    );
  }
}

export default App;
