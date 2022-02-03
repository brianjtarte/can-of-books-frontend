// import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { useAuth0 } from '@auth0/auth0-react';


function LoginButton() {
    const {
      isAuthenticated,
      loginWithRedirect,
    } = useAuth0();
 

  
    return !isAuthenticated && (  <Button onClick={loginWithRedirect} />
    );
  }


export default LoginButton;
