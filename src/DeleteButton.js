import { Component } from "react";

class DeleteButton extends Component {

  render() {
    return (
      <button onClick={() => this.props.deleteBook(this.props.book)}>
        Delete
      </button>
    );
  }
};

export default DeleteButton;
