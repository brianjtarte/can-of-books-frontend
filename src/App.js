import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './Profile';
import Login from './Login';
// import { withAuth0 } from '@auth0/auth0-react';


import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }



  loginHandler = (user, event) => {
    event.preventDefault();
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.props.auth0.isAuthenticated} logoutHandler={this.logoutHandler} />

          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <BestBooks user={this.props.auth0.isAuthenticated}/>
              ) : (
                <Login loginHandler={this.loginHandler} />
              )}
            </Route>
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated ? <Profile user={this.props.auth0.isAuthenticated} /> : <h3>Please Login to View Profile</h3>}
            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;

