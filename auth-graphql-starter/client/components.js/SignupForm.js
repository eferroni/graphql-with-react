import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Signup from "../mutations/Signup";
import CurrentUser from "../queries/CurrentUser";
import { graphql } from "react-apollo";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }
  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: CurrentUser }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({
          errors,
        });
      });
  }

  render() {
    return (
      <div>
        <h4>Sign up</h4>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(Signup)(SignupForm);
