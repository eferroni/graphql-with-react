import React, { Component } from "react";

class LyricList extends Component {
  onLike(id) {
    console.log(id);
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
            <i
              className="material-icons"
              onClick={() => this.onLike(id)}
              style={{ cursor: "pointer" }}
            >
              thumb_up
            </i>
          </li>
        ))}
      </ul>
    );
  }
}

export default LyricList;
