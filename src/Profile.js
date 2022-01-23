import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return <>
      <p>`Username: {this.props.userName}`</p>
      <p>`Email:{this.props.userEmail}`</p>
    </>
  }
};

export default Profile;
