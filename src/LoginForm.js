import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      user: null,
    }
  }

  
  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form>
  <Form.Group className="mb-3" controlId="formUserName">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter Username" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>E-Mail</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={this.props.formHandler}>
    Submit
  </Button>
</Form>
    );
  }
};

export default LoginForm;
