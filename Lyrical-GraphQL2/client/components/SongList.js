import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = (props) => {
  const { error, loading, songs } = props.data;
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error: {error}</div>;
  }
  const renderSongs = () => {
    return songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  };

  return <ul className="collection">{renderSongs()}</ul>;
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
