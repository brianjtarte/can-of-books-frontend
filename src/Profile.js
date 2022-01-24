import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return <>
      <p>Username: {this.props.user.username}</p>
      <p>Email:{this.props.user.email}</p>
    </>
  }
};

export default Profile;
