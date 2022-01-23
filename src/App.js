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
      userName: null,
      loginClick: null,
      userEmail: null,
    }
  }



  loginHandler = (user) => {
    this.setState({

      user: null, loginClick: true
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  formHandler = (event) =>{
    this.setState({
      user: true,
    });
    if (event.target.id === 'formUserName'){
      this.setState({
        username: event.target.value,
        user: true,
      } );
        } else if (event.target.id === 'formEmail'){
          this.setState ({email: event.target.value,
            user: true,
      });
    }
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
                <Login loginHandler={this.loginHandler} loginClick={this.state.loginClick} formHandler={this.formHandler}/>
              )}
            </Route>
            <Route exact path="/profile">
              <Profile userName={this.state.userName} userEmail={this.state.userEmail}/>
            </Route>
            
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
