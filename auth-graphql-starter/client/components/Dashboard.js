import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import CurrentUser from "../queries/CurrentUser";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
};

export default Dashboard;
