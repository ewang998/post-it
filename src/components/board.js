import React from "react";
import { connect } from "react-redux";
import { deletenote, selectnote } from "../actions";


class Board extends React.Component {

  renderlist() {
    return this.props.notes.map(note => {
      return (
        <div className="item" key={note.id}>
          <div className="right floated content">
            <button class="ui primary button" onClick={() => this.props.deletenote(note.id)}>x</button>
          </div>
          <div className="content" onClick={() => this.props.selectnote(note.id)}>{note.text}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div class="ui container center aligned">
        <div class="ui divided list">
          {this.renderlist()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
          notes: state.notes
         };
  }

export default connect(mapStateToProps, { deletenote, selectnote })(Board);
