import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../queries/deleteSong";

const SongList = (props) => {
  const { error, loading, songs } = props.data;

  const onSongDelete = (id) => {
    props.mutate({ variables: { id } });
  };

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error: {error}</div>;
  }

  const renderSongs = () => {
    return songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            {title}
            <i
              className="material-icons"
              style={{ cursor: "pointer" }}
              onClick={() => onSongDelete(id)}
            >
              delete
            </i>
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large blue right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));
