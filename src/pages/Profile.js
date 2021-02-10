import React from 'react';
import withSidebarLayout from '../layouts/withSidebarLayout';

export class Profile extends React.Component {
  render() {
    return (
      <div>
        Profile Page
      </div>
    )
  }
}
export default withSidebarLayout(Profile, { title: 'Profile' });