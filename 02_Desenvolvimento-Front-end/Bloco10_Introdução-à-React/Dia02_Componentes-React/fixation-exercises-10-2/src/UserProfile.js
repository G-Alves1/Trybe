import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() { 
    return (
      <>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
        <br />
        <br />
      </>
    );
  }
}

export default UserProfile;
