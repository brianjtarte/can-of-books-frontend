import { Component } from "react";
import Button from 'react-bootstrap/Button'
class UpdateBook extends Component {

  render() {
    return (
      <Button onClick= {() => this.props.onButtonClick()}>
        Update
      </Button>
    );
  }
};

export default UpdateBook;