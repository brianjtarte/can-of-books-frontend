import React from 'react';
import LoginButton from './LoginButton.js';
import LoginForm from './LoginForm';
import Card from 'react-bootstrap/Card';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>

          {!this.props.user ? (
        <LoginButton loginHandler={this.props.loginHandler}/>
      ) : (
        <LoginForm />
    )
    }

        </Card.Body>
      </Card>
    )
  }
}

export default Login;
