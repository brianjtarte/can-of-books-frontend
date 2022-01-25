import { Component } from 'react'

import Button from 'react-bootstrap/Button'


export default class AddBook extends Component {

 

  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return  <Button as="input" type="submit" value="Add Book" onClick={this.props.onButtonClick} />

  }
}