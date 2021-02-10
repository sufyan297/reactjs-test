import React from 'react';
import LoginContainer from '../components/login/LoginContainer';
import withLoginLayout from '../layouts/withLoginLayout';
class Login extends React.Component {
  render() {
    return (
      <div>
        <LoginContainer />
      </div>
    )
  }
}
export default withLoginLayout(Login, { title: 'Login'});