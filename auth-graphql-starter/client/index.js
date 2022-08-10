import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory } from "react-router";
import App from "./components.js/App";
import LoginForm from "./components.js/LoginForm";
import SignupForm from "./components.js/SignupForm";
import Dashboard from "./components.js/Dashboard";

const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    credentials: "same-origin",
  },
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: (object) => object.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm}></Route>
          <Route path="signup" component={SignupForm}></Route>
          <Route path="dashboard" component={Dashboard}></Route>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
