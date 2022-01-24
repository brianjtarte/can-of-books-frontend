import React from 'react';
import LoginButton from './LoginButton.js';
import LoginForm from './LoginForm.js';
import Card from 'react-bootstrap/Card';
import './Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
    };
  }

  displayFormHandler = () => {
    this.setState({
      displayForm: true
    });
  }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {this.state.displayForm ? <LoginForm loginHandler={this.props.loginHandler}/> : <LoginButton buttonClickHandler={this.displayFormHandler} />}
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
