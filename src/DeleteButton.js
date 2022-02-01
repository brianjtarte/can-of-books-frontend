import { Component } from "react";
import Button from 'react-bootstrap/Button'
class DeleteButton extends Component {

  render() {
    return (
      <Button onClick={() => this.props.deleteBook(this.props.book)}>
        Delete
      </Button>
    );
  }
};

export default DeleteButton;
