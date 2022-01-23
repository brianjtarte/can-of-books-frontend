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
      loginClick: null,
    }
  }



  loginHandler = (user) => {
    this.setState({
      user: true, loginClick: true
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
         
          <Switch>
            <Route exact path="/">
              {this.state.user ? (
                 <BestBooks/>
              ) : (
                <Login loginHandler={this.loginHandler}/>
              )}
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
