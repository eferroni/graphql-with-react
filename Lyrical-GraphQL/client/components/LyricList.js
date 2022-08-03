import React, { Component } from "react";
import { graphql } from "react-apollo";
import likeLyric from "../queries/likeLyric";

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: {
        id: id,
      },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id: id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map(({ id, content, likes }) => (
          <li
            key={id}
            className="collection-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {content}
            <div style={{ display: "flex", alignItems: "center" }}>
              <i
                className="material-icons"
                onClick={() => this.onLike(id, likes)}
                style={{ cursor: "pointer" }}
              >
                thumb_up
              </i>
              <span
                style={{
                  marginLeft: "10px",
                  minWidth: "50px",
                  textAlign: "right",
                }}
              >
                {likes} likes
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList);
