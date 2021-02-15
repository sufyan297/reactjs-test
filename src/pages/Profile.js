import React from 'react';
import withSidebarLayout from '../layouts/withSidebarLayout';
import ProfileContainer from '../components/profile/ProfileContainer';
export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null
    }
    this.profileRef = React.createRef();
  }

  onChange(e) {
    this.setState({test: e.target.value}, () => {
      console.log("State: Test - ", this.state.test);
    });
  }
  
  render() {
    return (
      <div>
        <ProfileContainer ref={(x) => this.profileRef = x} {...this.props} />

        <input type="text" onChange={(e) => this.onChange(e)} />
        <button onClick={() => {
          if (this.profileRef) {
            console.log("Profile Ref: ", this.profileRef);
            console.log("[Container] State: ", this.profileRef.state);
            this.profileRef.onSubmit();
          }
        }}>Click me to Test</button>
      </div>
    )
  }
}
export default withSidebarLayout(Profile, { title: 'Profile' });