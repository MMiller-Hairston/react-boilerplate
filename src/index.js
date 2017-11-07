import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Search, Mine } from "./screens";

const Index = ({ store }) =>
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/mine" component={Mine} />
    </div>
  </Router>;

render(<Index />, document.getElementById("root"));
