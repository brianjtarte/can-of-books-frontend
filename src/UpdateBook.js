import { Component } from "react";

class UpdateBook extends Component {

  render() {
    return (
      <button onClick={() => this.props.onUpdate(this.props.book)}>
        Update
      </button>
    );
  }
};

export default UpdateBook;