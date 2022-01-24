import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './Profile';
import Login from './Login';
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
          <Header user={this.state.user} logoutHandler={this.logoutHandler} />

          <Switch>
            <Route exact path="/">
              {this.state.user ? (
                <BestBooks />
              ) : (
                <Login loginHandler={this.loginHandler} />
              )}
            </Route>
            <Route exact path="/profile">
              {this.state.user ? <Profile user={this.state.user} /> : <h3>Please Login to View Profile</h3>}
            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
