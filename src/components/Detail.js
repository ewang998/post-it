import React from "react";
import { connect } from "react-redux";
import { selectnote } from "../actions";


class Detail extends React.Component {



  render() {
    if (this.props.currentnote === null) {
      return null;
    } else {
      return (
        <div class="ui container center aligned">

          <p class="ui header">The message: {this.props.notes[this.props.currentnote].text} is posted on {this.props.notes[this.props.currentnote].date}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
          notes: state.notes,
          currentnote: state.currentnote
         };
  }

export default connect(mapStateToProps, { selectnote })(Detail);
