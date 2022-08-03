import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    console.log(this.props);
    const { song, loading } = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <hr style={{ margin: "20px 0" }} />
        <div>
          <h5>Lyrics</h5>
          <LyricList lyrics={song.lyrics} />
        </div>
        <hr style={{ margin: "20px 0" }} />
        <div>
          <LyricCreate songId={this.props.params.id} />
        </div>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
