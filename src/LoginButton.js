import { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class LoginButton extends Component {

 

  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return  <Button as="input" type="submit" value="Login" onClick={this.props.buttonClickHandler} />
  }
}
