import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/`}>
          <h1>Adopt Me</h1>
        </Link>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
