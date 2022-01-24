import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
    }
  }

  formHandler = (event) =>{
    if (event.target.id === 'formUserName'){
      this.setState({
        username: event.target.value
      });
        } else if (event.target.id === 'formEmail'){
          this.setState ({email: event.target.value
      });
    }
  }
  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form onSubmit={ (event) => this.props.loginHandler({username: this.state.username, email: this.state.email}, event )}>
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>E-Mail</Form.Label>
    <Form.Control onChange={this.formHandler} type="email" placeholder="Enter Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formUserName">
    <Form.Label>Username</Form.Label>
    <Form.Control onChange={this.formHandler} type="username" placeholder="Enter Username" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
  }
};

export default LoginForm;
