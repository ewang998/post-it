import React from "react";
import { connect } from "react-redux";
import { addnote } from "../actions";

class Enternote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textvalue: ''
    };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(e) {
    console.log("Updated text");

    this.setState({
      textvalue: e.target.value
    });
  }

  render() {
    return (
      <div class="ui container center aligned">
        <form class="ui form">
          <textarea placeholder="Enter your note here ..." onChange={this.handlechange} rows="3"></textarea>
        </form>
        <br />
        <button class="ui primary button" onClick={() => this.props.addnote(this.state.textvalue, this.props.currentid)}>submit</button>
      </div>
      //{() => this.prop.addnote(document.getElementById("inputtext").value, this.props.currentid)}
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes,
           currentid: state.currentid
         };
  }

export default connect(mapStateToProps, { addnote })(Enternote);
