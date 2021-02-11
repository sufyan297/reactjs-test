import React from 'react';
import withSidebarLayout from '../layouts/withSidebarLayout';
import ProfileContainer from '../components/profile/ProfileContainer';
export class Profile extends React.Component {
  render() {
    return (
      <div>
        <ProfileContainer {...this.props} />
      </div>
    )
  }
}
export default withSidebarLayout(Profile, { title: 'Profile' });