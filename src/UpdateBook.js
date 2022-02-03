import { Component } from "react";
import Button from 'react-bootstrap/Button'
class UpdateBook extends Component {

  render() {
    return (
      <Button onClick= {() => this.props.onButtonClick(this.props.book)}>
        Update
      </Button>
    );
  }
};

export default UpdateBook;