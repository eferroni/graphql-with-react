import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import addLyricToSong from "../queries/addLyricToSong";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId,
        },
      })
      .then(() => this.setState({ content: "" }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          onChange={(event) => this.setState({ content: event.target.value })}
          value={this.state.content}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
